const { createSpecialty, getAllSpecialties} = require('../controllers/specialtyControllers')

const handleCreateSpecialty = async (req, res) => {
    const { specialty_name } = req.body
    try {
        if (!specialty_name) {
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

const handleGetAllSpecialties = async (req, res) => {

    try {
        specialtiesList = await getAllSpecialties();
        if (specialtiesList.length === 0) {
            return res.status(404).json({ message: 'No hay especialidades en la base de datos' })
        } else {
            return res.status(200).json(specialtiesList)
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    handleCreateSpecialty,
    handleGetAllSpecialties,
}
