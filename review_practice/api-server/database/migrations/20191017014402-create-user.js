'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
            salt: {
                type: Sequelize.STRING,
            },
            is_super_host: {
                type: Sequelize.BOOLEAN,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    },
};
