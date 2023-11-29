const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        'Doctor',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
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
            education: {
                type: DataTypes.STRING,
                allowNull:true,
            },
            birthday: {
                type: DataTypes.DATEONLY,
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
                defaultValue: 'doctor'
            }
        },{timestamps: false}
    )
};