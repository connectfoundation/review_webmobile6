const Op = require('sequelize').Op;

module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define(
        'Booking',
        {
            checkIn: {
                allowNull: false,
                type: DataTypes.DATE,
                field: 'check_in',
            },
            checkOut: {
                allowNull: false,
                type: DataTypes.DATE,
                field: 'check_out',
            },
            adult: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            children: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            infant: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'bookings',
        },
    );

    Booking.registerNewBooking = async ({ userId, roomId, date, personnel }) => {
        try {
            const { checkIn, checkOut } = date;
            const { adult, children, infant } = personnel;
            const [_, created] = await Booking.findOrCreate({
                where: {
                    check_out: { [Op.gt]: checkIn },
                    check_in: { [Op.lt]: checkOut },
                    room_id: roomId,
                },
                defaults: { user_id: userId, room_id: roomId, checkIn, checkOut, adult, children, infant },
            });

            return created;
        } catch (error) {
            throw error;
        }
    };

    return Booking;
};
