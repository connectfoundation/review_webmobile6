'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface
            .addColumn(
                'rooms', // name of Source model
                'user_id', // name of the key we're adding
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'users', // name of Target model
                        key: 'id', // key in Target model that we're referencing
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            )
            .then(() => {
                return queryInterface.addColumn(
                    'room_options', // name of Target model
                    'id', // name of the key we're adding
                    {
                        type: Sequelize.INTEGER,
                        references: {
                            model: 'rooms', // name of Source model
                            key: 'id',
                        },
                        primaryKey: true,
                        allowNull: false,
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE',
                    },
                );
            })
            .then(() => {
                return queryInterface.addColumn(
                    'rooms', // name of Target model
                    'room_type_id', // name of the key we're adding
                    {
                        type: Sequelize.INTEGER,
                        references: {
                            model: 'room_types', // name of Source model
                            key: 'id',
                        },
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    },
                );
            });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface
            .removeColumn(
                'rooms', // name of Source model
                'user_id', // key we want to remove
            )
            .then(() => {
                return queryInterface.removeColumn(
                    'room_options', // name of the Target model
                    'id', // key we want to remove
                );
            })
            .then(() => {
                return queryInterface.removeColumn(
                    'rooms', // name of the Target model
                    'room_type_id', // key we want to remove
                );
            });
    },
};
