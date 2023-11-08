const { Specialty } = require('../db.js');

const createSpecialty = async ( name) => {
    const created = await Specialty.create({specialty_name: name})
    
    return created
}

module.exports = createSpecialty