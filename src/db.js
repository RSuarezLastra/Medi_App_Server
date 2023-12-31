require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const pg = require("pg")
const path = require('path');
const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
    logging: false,
    native: false,
    dialectModule: pg,
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Doctor, Specialty } = sequelize.models;

Doctor.belongsToMany(Specialty, {
    through: 'doctor_specialty',
    timestamps: false
});
Specialty.belongsToMany(Doctor, {
    through: 'doctor_specialty',
    timestamps: false
});


module.exports = {
    ...sequelize.models,
    conn: sequelize,
};