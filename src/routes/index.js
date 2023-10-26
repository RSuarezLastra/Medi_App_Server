const { Router } = require('express');
const router = Router();
const routerUser = require('./routerUser')

router.use("/user", routerUser )

module.exports = router;