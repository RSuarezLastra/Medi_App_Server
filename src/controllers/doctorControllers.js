const { Doctor } = require('../db.js')

const createDoctor = async ({ name , email , education, password, phone, birthday, userType }) => {

    const postDoctor = await Doctor.create({
        birthday,
        name,
        email,
        education,
        phone,
        password,
        userType,
    });

    return postDoctor
}

const findDoctor = async (email) => {
    const doctorFound = await Doctor.findOne({
        where: {email}
    })

    return doctorFound
}

module.exports = {
    createDoctor,
    findDoctor,
}