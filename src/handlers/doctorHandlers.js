const { findDoctor, createDoctor, getAllDoctors } = require('../controllers/doctorControllers')

const handleCreateDoctor = async (req, res) => {
    const { name, email, education, password, phone, birthday, userType, specialty } = req.body;
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
        res.status(500).json({ error: error.message });
    }
}

const handleGetDoctors = async (req, res) => {

    const { name } = req.query;

    try {

        if (name) {
            const doctorFound = await findDoctor(name);
            if (doctorFound.length === 0) {
                return res.status(404).json({ message: `No se encontro el doctor ${name}`})
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

module.exports = {
    handleCreateDoctor,
    handleGetDoctors
}