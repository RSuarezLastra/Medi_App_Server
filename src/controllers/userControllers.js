const { User} = require('../db.js')

const createUser = async ({ birthday, name, phone, password, email }) => {

    const postUser = await User.create({
        birthday,
        name,
        email,
        phone,
        password
    });

    return postUser
}

const findUser = async (email) => {
    const userFound = await User.findOne({
        where: {email}
    })

    return userFound
}

const loginUser = async (email , password) => {
    const user = await findUser(email);
    if(!user){
        throw new Error('Usuario no registrado')
    }
    if(password !== user.password){
        return { success: false, message: "Correo electrónico o contraseña incorrecta." };
    }
    const { id, name} = user;
    return {success: true, email, id, name }

}


module.exports = {
    createUser,
    findUser,
    loginUser
}