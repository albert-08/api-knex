const express = require('express')

const router = express.Router()

const homeRoutes = require('./homeRoutes')
const useRoutes = require('./userRoutes')

router.use(homeRoutes, useRoutes)

module.exports = router