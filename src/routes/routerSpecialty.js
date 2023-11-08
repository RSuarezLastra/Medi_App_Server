const { Router } = require("express");
const routerSpecialty = Router();
const handleCreateSpecialty = require('../handlers/specialtyHandlers')

routerSpecialty.post('/create' , handleCreateSpecialty )

module.exports = routerSpecialty;