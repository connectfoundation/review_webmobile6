'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'bookings',
            [
                {
                    user_id: 1,
                    room_id: 1,
                    check_in: new Date(2019, 10, 10),
                    check_out: new Date(2019, 10, 20),
                    adult: 1,
                    children: 1,
                    infant: 1,
                },
            ],
            {},
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('bookings', null, {});
    },
};
