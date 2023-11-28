const { Router } = require("express");
const routerDoctor = Router();
const { handleCreateDoctor, handleGetDoctors, handleGetDoctorById } = require('../handlers/doctorHandlers')


routerDoctor.post('/create', handleCreateDoctor)
routerDoctor.get('/', handleGetDoctors)
routerDoctor.get('/:id', handleGetDoctorById)



module.exports = routerDoctor;


