const { Specialty } = require('../db.js');

const createSpecialty = async ( name) => {
    const created = await Specialty.create({specialty_name: name})
    
    return created
}

const getAllSpecialties = async () => {
 
    const specialties = await Specialty.findAll();

    return specialties;
}

module.exports = {
    createSpecialty,
    getAllSpecialties,
}