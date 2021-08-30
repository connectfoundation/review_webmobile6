'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('rooms', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            price: {
                type: Sequelize.INTEGER,
            },
            max_guest: {
                type: Sequelize.INTEGER,
            },
            star_rating: {
                type: Sequelize.INTEGER,
            },
            review_num: {
                type: Sequelize.INTEGER,
            },
            image_path: {
                type: Sequelize.STRING,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('rooms');
    },
};
