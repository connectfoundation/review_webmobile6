'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('room_options', {
            bed: {
                type: Sequelize.INTEGER,
            },
            bedroom: {
                type: Sequelize.INTEGER,
            },
            bathroom: {
                type: Sequelize.INTEGER,
            },
            free_parking: {
                type: Sequelize.BOOLEAN,
            },
            wifi: {
                type: Sequelize.BOOLEAN,
            },
            kitchen: {
                type: Sequelize.BOOLEAN,
            },
            washer: {
                type: Sequelize.BOOLEAN,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('room_options');
    },
};
