'use strict';
const data = require('../../init-data/room_data.json');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('rooms', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('rooms', null, {});
    },
};
