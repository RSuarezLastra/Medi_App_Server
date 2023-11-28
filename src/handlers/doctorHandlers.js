const { findDoctor, createDoctor, getAllDoctors, getDoctorById } = require('../controllers/doctorControllers')

const handleCreateDoctor = async (req, res) => {
    const { name, email, education, password, phone, birthday, userType, specialty } = req.body;
    console.log(req.body);
    try {
        if (!name || !email || !password || !phone || !birthday || !specialty) {
            return res.status(401).send('Debe ingresar todos los datos para completar el registro')
        }

        const doctorFound = await findDoctor(email);
        if (doctorFound) {
            return res.status(400).send('El doctor ya existe en la base de datos')
        }

        const postDoctor = await createDoctor({
            birthday,
            name,
            email,
            education,
            userType,
            phone,
            password,
            specialty
        });
        return res.status(200).json(postDoctor);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

const handleGetDoctors = async (req, res) => {

    const { name } = req.query;

    try {

        if (name) {
            const doctorFound = await findDoctor(name);
            if (doctorFound.length === 0) {
                return res.status(404).json({ message: `No se encontro el doctor ${name}` })
            } else {
                return res.status(200).json(doctorFound);
            }
        } else {
            doctorsList = await getAllDoctors();
            return res.status(200).json(doctorsList)
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }

}

const handleGetDoctorById = async (req, res) => {

    const { id } = req.params;
    try {
        if (!id) {
            throw new Error('No se ha encontrado el doctor')
        } else {
            const doctor = await getDoctorById(id);
            if (doctor) {
                return res.status(200).json(doctor)
            } else {
                return res.status(404).send({ message: 'No se encontro el doctor en la base de datos' })
            }
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    handleCreateDoctor,
    handleGetDoctors,
    handleGetDoctorById
}