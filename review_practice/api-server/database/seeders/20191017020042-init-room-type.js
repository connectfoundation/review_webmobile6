'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'room_types',
            [
                {
                    name: '집 전체',
                },
                {
                    name: '개인실',
                },
                {
                    name: '호텔 객실',
                },
                {
                    name: '다인실',
                },
            ],
            {},
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('room_types', null, {});
    },
};
