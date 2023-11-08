const { Router } = require('express');
const router = Router();

const routerUser = require('./routerUser')
const routerDoctor = require('./routerDoctor')
const routerSpecialty = require('./routerSpecialty')

router.use("/user", routerUser)
router.use("/doctor", routerDoctor)
router.use("/specialty", routerSpecialty)

module.exports = router;