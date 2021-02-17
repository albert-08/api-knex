//Trae los datos a la base de datos

//Conectarme a la base de datos
const knex = require('../config')

const create = (bodyHome) => {
    //Crear un registro en la tabla HOMES
    return knex
        .insert(bodyHome)
        .returning(['title', 'house_id', 'address', 'guests', 'description', 'create_at'])
        .into('homes')
}

const findAll = () => {
    //Obtiene todos los registrod de la tabla HOMES
    return knex
        .select(['title', 'house_id', 'address', 'guests', 'description', 'create_at'])
        .from('homes')
}

const findOne = (houseId) => {
    return knex
        .select(['title', 'house_id', 'address', 'guests', 'description', 'create_at'])
        .from('homes')
        .where({house_id: houseId})
}

module.exports = {
    create,
    findAll,
    findOne
}