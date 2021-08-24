// import dotenv from 'dotenv';
const dotenv = require('dotenv');
dotenv.config();

const {
    DB_DEV_USER,
    DB_DEV_PASSWORD,
    DB_DEV_DATABASE,
    DB_DEV_HOST,
    DB_PRODUCTION_USER,
    DB_PRODUCTION_PASSWORD,
    DB_PRODUCTION_DATABASE,
    DB_PRODUCTION_HOST,
} = process.env;

module.exports = {
    development: {
        username: DB_DEV_USER,
        password: DB_DEV_PASSWORD,
        database: DB_DEV_DATABASE,
        host: DB_DEV_HOST,
        dialect: 'mysql',
    },
    test: {
        username: DB_DEV_USER,
        password: DB_DEV_PASSWORD,
        database: DB_DEV_DATABASE,
        host: DB_DEV_HOST,
        dialect: 'mysql',
    },
    production: {
        username: DB_PRODUCTION_USER,
        password: DB_PRODUCTION_PASSWORD,
        database: DB_PRODUCTION_DATABASE,
        host: DB_PRODUCTION_HOST,
        dialect: 'mysql',
    },
};
