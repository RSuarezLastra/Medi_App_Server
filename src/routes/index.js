const { Router } = require('express');
const router = Router();

const routerUser = require('./routerUser')
const routerDoctor = require('./routerDoctor')

router.use("/user", routerUser)
router.use("/doctor", routerDoctor)

module.exports = router;