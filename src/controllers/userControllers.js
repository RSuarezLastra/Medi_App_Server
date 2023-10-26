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

module.exports = {
    createUser,
    findUser
}