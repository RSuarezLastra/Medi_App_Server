const { Router } = require("express");
const routerUser = Router();
const {handleSignUp, handleLogin} = require('../handlers/userHandlers')

routerUser.post('/signup', handleSignUp)
routerUser.post('/login', handleLogin)






module.exports = routerUser;