const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        'Specialty',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
                
            },
            specialty_name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },{timestamps: false}
    )
};