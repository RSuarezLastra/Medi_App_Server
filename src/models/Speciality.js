const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        'Specialty',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                
            },
            specialty_name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },{timestamps: false}
    )
};