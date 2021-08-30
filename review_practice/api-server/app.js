import { ApolloServer } from 'apollo-server';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

import model from './database/models';
import * as jwtManager from './util/jwt-manager';

// Set GraphQL Apollo server
const context = ({ req }) => {
    const authorizationHeader = req.headers.authorization || '';
    const token = authorizationHeader.split(' ')[1];
    const user = jwtManager.isTokenValid(token);

    return { user, model };
};

const formatError = err => {
    console.error('--- GraphQL Error ---');
    console.error('Path:', err.path);
    console.error('Message:', err.message);
    console.error('Code:', err.extensions.code);
    console.error('Original Error', err.originalError);
    return err;
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    formatError,
    debug: false,
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
