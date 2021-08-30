import { ValidationError, UserInputError } from 'apollo-server';

import * as passwordManager from '../util/password-manager';
import { tokenCreator } from '../util/jwt-manager';

const registerUser = async (_, args, context) => {
    const { User } = context.model;
    const userInput = args.data;

    try {
        // #1 Password hash
        const encypted = await passwordManager.encrypt(userInput.password);
        userInput['password'] = encypted.passwordKey;
        userInput['salt'] = encypted.salt;

        // #2 Add user to Users DB table
        userInput.is_super_host = false;
        const [user, created] = await User.findOrCreate({
            where: { email: userInput.email },
            defaults: userInput,
        });
        if (!created) throw new ValidationError('Is duplicated email');

        // #3 Create token and return
        const token = await tokenCreator({ id: user.id, name: user.name });

        return {
            token,
            user,
        };
    } catch (error) {
        throw error;
    }
};

const joinUser = async (_, args, context) => {
    const { User } = context.model;
    const { email, password } = args;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) throw new UserInputError('Is not exist email');

        const isCorrectAccount = await passwordManager.checkCorrectPassword(password, user.password, user.salt);
        if (!isCorrectAccount) throw new UserInputError('Is not correct password');

        const token = await tokenCreator({ id: user.id, name: user.name });

        return {
            token,
            user,
        };
    } catch (error) {
        throw error;
    }
};

export const Mutation = { registerUser, joinUser };
