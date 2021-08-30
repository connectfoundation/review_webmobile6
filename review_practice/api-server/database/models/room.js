const Op = require('sequelize').Op;

module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define(
        'Room',
        {
            name: DataTypes.STRING,
            price: DataTypes.INTEGER,
            maxGuest: {
                type: DataTypes.INTEGER,
                field: 'max_guest',
            },
            starRating: {
                type: DataTypes.INTEGER,
                field: 'star_rating',
            },
            reviewNum: {
                type: DataTypes.INTEGER,
                field: 'review_num',
            },
            imagePath: {
                type: DataTypes.STRING,
                field: 'image_path',
            },
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'rooms',
        },
    );
    Room.associate = function(models) {
        Room.belongsTo(models.RoomType, { foreignKey: 'roomTypeId', targetKey: 'id' });
        Room.hasOne(models.RoomOption, { foreignKey: 'id' });
        Room.hasMany(models.Booking, {
            foreignKey: 'room_id',
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    };

    Room.findAllByFilter = async searchOptions => {
        const models = require('../models');

        const joinCondition = { model: models.RoomOption };
        if (searchOptions && searchOptions.date) {
            joinCondition['where'] = createDateFilterCondition(searchOptions.date);
        }

        const roomCondition = {};
        if (searchOptions && searchOptions.personnel) {
            roomCondition.maxGuest = createPersonnelFilterCondition(searchOptions.personnel);
        }
        if (searchOptions && searchOptions.price) {
            roomCondition.price = createPriceFilterCondition(searchOptions.price);
        }

        try {
            return await Room.findAll({
                include: [joinCondition],
                where: roomCondition,
            });
        } catch (error) {
            throw error;
        }
    };

    // 쿼리 조건 생성 함수
    const createDateFilterCondition = ({ checkIn, checkOut }) => {
        const reservedRooomsSQL = sequelize.dialect.QueryGenerator.selectQuery('bookings', {
            attributes: ['room_id'],
            where: {
                check_out: { [Op.gt]: checkIn },
                check_in: { [Op.lt]: checkOut },
            },
        }).slice(0, -1);

        return {
            id: {
                [Op.notIn]: sequelize.literal('(' + reservedRooomsSQL + ')'),
            },
        };
    };

    const createPersonnelFilterCondition = ({ adult, children }) => {
        const guestCount = adult + children;
        return { [Op.gte]: guestCount };
    };

    const createPriceFilterCondition = ({ startPrice, endPrice }) => {
        return { [Op.gte]: startPrice, [Op.lte]: endPrice };
    };

    return Room;
};
