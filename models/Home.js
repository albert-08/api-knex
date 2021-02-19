//Trae los datos a la base de datos

//Conectarme a la base de datos
const knex = require('../config')
const createModelKnex = require('../utils/createModelUtil')

const TABLE = 'homes'
const RETURNING_DATA = ['title', 'house_id', 'address', 'guests', 'detail', 'create_at', 'fk_user', 'active']
const TABLE_ID = 'house_id'

const HomeModel = createModelKnex(knex,TABLE,RETURNING_DATA,TABLE_ID)

HomeModel.findOneWithUser = (houseId) => {
    return knex
        .select(['homes.title', 'homes.address', 'users.id_user', 'users.email'])
        .from(TABLE)
        .join('users','users.id_user', '=', 'homes.fk_user')
        .where({house_id: houseId})
}

module.exports = HomeModel

