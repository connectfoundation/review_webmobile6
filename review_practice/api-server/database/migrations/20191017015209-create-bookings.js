module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('bookings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            check_in: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            check_out: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            adult: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            children: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            infant: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            room_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'rooms',
                    key: 'id',
                },
            },
        });
    },

    down: (queryInterface, Sequelize) => {
        // remove table
        return queryInterface.dropTable('bookings');
    },
};
