const { Router } = require("express");
const routerSpecialty = Router();
const { handleCreateSpecialty, handleGetAllSpecialties } = require('../handlers/specialtyHandlers')

routerSpecialty.post('/create' , handleCreateSpecialty )
routerSpecialty.get('/', handleGetAllSpecialties)

module.exports = routerSpecialty;