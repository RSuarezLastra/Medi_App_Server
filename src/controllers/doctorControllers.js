const { Doctor, Specialty } = require('../db.js')
const { Op } = require('sequelize');


const createDoctor = async ({ name, email, education, password, phone, birthday, userType, specialty }) => {

    const postDoctor = await Doctor.create({
        birthday,
        name,
        email,
        education,
        phone,
        password,
        userType,
    });

    const specialties = await Specialty.findAll({
        where: {
            specialty_name: specialty,
        }
    });
   
    await postDoctor.addSpecialties(specialties);

    const doctorWithSpecialties = await Doctor.findOne({
        include: [{ model: Specialty, attributes: ["specialty_name", "id"], through: { attributes: [] } }],
        where: { id: postDoctor.id },
    });

    return doctorWithSpecialties;
}

const getAllDoctors = async () => {

        const doctors = await Doctor.findAll({
            include: [{ model: Specialty, attributes: ["specialty_name", "id"], through: { attributes: [] } }]
        });
        
        return doctors;
};

const findDoctor = async (email, name) => {
    const doctorFound = await Doctor.findOne({
        where: {
            [Op.or]: [
                { email },
                // { name },  esta madre hace problema al crear doctor 
            ],
        },
    });

    return doctorFound;
};


module.exports = {
    createDoctor,
    findDoctor,
    getAllDoctors,
}