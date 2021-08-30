'use strict';
module.exports = (sequelize, DataTypes) => {
    const RoomType = sequelize.define(
        'RoomType',
        {
            name: DataTypes.STRING,
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'room_types',
        },
    );
    RoomType.associate = function(models) {
        RoomType.hasMany(models.Room, { foreignKey: 'roomTypeId', sourceKey: 'id' });
    };
    return RoomType;
};
