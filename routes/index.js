const express = require('express')

const router = express.router()

const homeRoutes = require('./homeRoutes')

router.use(homeRoutes)

module.exports = router