'use strict';
const data = require('../../init-data/room_option_data.json');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('room_options', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('room_options', null, {});
    },
};
