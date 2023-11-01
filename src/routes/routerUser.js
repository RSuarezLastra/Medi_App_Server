const { Router } = require("express");
const routerUser = Router();
const {handleSignUp} = require('../handlers/userHandlers')

routerUser.post('/signup', handleSignUp)





module.exports = routerUser;