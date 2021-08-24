import { getToken } from './TokenManager';

// Import Apoll client modules
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';

// Import environment variable manage module
import dotenv from 'dotenv';
dotenv.config();

const httpLink = createHttpLink({ uri: process.env.REACT_APP_API_URL });
const authLink = setContext((_, { headers }) => {
    const token = getToken();
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`,
        },
    };
});
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) => {
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        });
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});

export default new ApolloClient({
    link: errorLink.concat(authLink.concat(httpLink)),
    cache: new InMemoryCache(),
});
