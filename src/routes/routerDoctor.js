const { Router } = require("express");
const routerDoctor = Router();
const { handleCreateDoctor } = require('../handlers/doctorHandlers')


routerDoctor.post('/create', handleCreateDoctor)



module.exports = routerDoctor;


