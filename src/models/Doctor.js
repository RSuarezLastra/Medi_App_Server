const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        'Doctor',
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
            specialty: {
                type: DataTypes.ARRAY(DataTypes.JSON),
                allowNull: false,
            },
            education: {
                type: DataTypes.ARRAY(DataTypes.JSON),
                allowNull:true,
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
                defaultValue: 'doctor'
            }
        },{timestamps: false}
    )
};