'use strict';
module.exports = (sequelize, DataTypes) => {
    const RoomOption = sequelize.define(
        'RoomOption',
        {
            bed: DataTypes.INTEGER,
            bedroom: DataTypes.INTEGER,
            bathroom: DataTypes.INTEGER,
            freeParking: {
                type: DataTypes.BOOLEAN,
                field: 'free_parking',
            },
            wifi: DataTypes.BOOLEAN,
            kitchen: DataTypes.BOOLEAN,
            washer: DataTypes.BOOLEAN,
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'room_options',
        },
    );
    RoomOption.associate = function(models) {
        RoomOption.belongsTo(models.Room, { foreignKey: 'id', targetKey: 'id' });
    };
    return RoomOption;
};
