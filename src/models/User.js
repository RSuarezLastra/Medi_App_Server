const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            birthday: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            userType: {
                type: DataTypes.STRING,
                defaultValue: 'user'
            }
        },{timestamps: false}
    )
};