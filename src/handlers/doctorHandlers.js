const {findDoctor, createDoctor} = require('../controllers/doctorControllers')

const handleCreateDoctor = async (req, res) => {
    const {name , email, education, password, phone, birthday, userType} = req.body;
    try {
        if(!name || !email || !password || !phone || !birthday ){
            return res.status(401).send('Debe ingresar todos los datos para completar el registro')
        }

        const doctorFound = await findDoctor(email);
        if(doctorFound){
            return res.status(400).send('El doctor ya existe en la base de datos')
        }

        const postDoctor = await createDoctor({
            birthday,
            name,
            email,
            education,
            userType,
            phone,
            password
        });
        return res.status(200).json(postDoctor);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    handleCreateDoctor
}