const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        'Specialty',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
                
            },
            specialty_name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },{timestamps: false}
    )
};