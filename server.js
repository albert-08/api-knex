require('dotenv').config() // Carga todas las variables de entorno de su proyecto
const express = require('express')
const routes = require('./routes/index')
const {errors} = require('celebrate')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api/v1', routes)
app.use(errors())
app.listen(3000, () => {
    console.log('Server ON')
})