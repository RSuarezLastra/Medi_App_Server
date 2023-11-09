const createSpecialty = require('../controllers/specialtyControllers')

const handleCreateSpecialty = async (req, res) => {
    const {specialty_name} = req.body
    try {
        if(!specialty_name){
            return res.status(401).send('Debe ingresar el nombre de una especialidad')
        }
        const createSucces = await createSpecialty(specialty_name);
        if(createSucces){
            return res.status(200).send('Especialidad creada')
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = handleCreateSpecialty;
