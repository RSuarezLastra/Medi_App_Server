const {createUser, findUser, loginUser} = require('../controllers/userControllers')

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

const handleLogin = async (req, res) => {
    const {email, password} = req.body;
    try {
        const login = await loginUser(email, password);
        if(login.success){
            return res.status(200).json(login)
        }
        return res.status(401).json(login.message);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    handleSignUp,
    handleLogin
}