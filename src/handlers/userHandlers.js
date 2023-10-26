const {createUser, findUser} = require('../controllers/userControllers')

const handleSignUp = async (req, res) => {
    const {name , email , password, phone , birthday} = req.body;
    try {
        if(!name || !email || !password || !phone || !birthday ){
            return res.status(401).send('Debe ingresar todos los datos para completar el registro')
        }

        const userFound = await findUser(email);
        if(userFound){
            return res.status(400).send('El usuario ya existe')
        }

        const postUser = await createUser({
            birthday,
            name,
            email,
            phone,
            password
        });
        return res.status(200).json(postUser);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    handleSignUp
}