import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY;

export const tokenCreator = data =>
    new Promise((resolve, reject) => {
        jwt.sign(
            data,
            TOKEN_SECRET_KEY,
            { expiresIn: '100d', issuer: 'boost-airbnb', subject: 'user' },
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            },
        );
    });

export const isTokenValid = token => {
    try {
        const decoded = jwt.verify(token, TOKEN_SECRET_KEY);
        return decoded;
    } catch (err) {
        console.log(err);
        return undefined;
    }
};
