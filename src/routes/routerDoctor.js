const { Router } = require("express");
const routerDoctor = Router();
const { handleCreateDoctor, handleGetDoctors } = require('../handlers/doctorHandlers')


routerDoctor.post('/create', handleCreateDoctor)
routerDoctor.get('/', handleGetDoctors)



module.exports = routerDoctor;


