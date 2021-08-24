'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'users',
            [
                {
                    name: '일지수',
                    email: 'init@init.com',
                    password: 'password',
                    salt: 'salt',
                    is_super_host: false,
                },
                {
                    name: '이지수',
                    email: 'init2@init.com',
                    password: 'password',
                    salt: 'salt',
                    is_super_host: false,
                },
                {
                    name: '삼지수',
                    email: 'init3@init.com',
                    password: 'password',
                    salt: 'salt',
                    is_super_host: false,
                },
            ],
            {},
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    },
};
