import { gql } from 'apollo-server';

export default gql`
    type User {
        id: ID!
        email: String
        password: String
        salt: String
        name: String
        isSuperHost: Boolean
    }

    extend type Query {
        user(id: ID): User
    }

    extend type Mutation {
        joinUser(email: String!, password: String!): LoginResponse
        registerUser(data: RegisterInput!): RegisterResponse
    }

    "Input"
    input RegisterInput {
        email: String!
        password: String!
        name: String!
    }

    "Response"
    type LoginResponse {
        token: String!
        user: User!
    }

    type RegisterResponse {
        token: String!
        user: User!
    }
`;
