//Tiena como objetivo hacer una abstracción de mis funciones
//que solicitan la info a la base de datos.

const { query } = require("express")
const { returning } = require("../config")

const createModelKnex = (knex, table,returningData, tableId) => {
    const create = (body) => {
        //Crear un registro en la tabla HOMES
        return knex
            .insert(body)
            .returning(returningData)
            .into(table)
    }
    
    const findAll = () => {
        //Obtiene todos los registrod de la tabla HOMES
        return knex
            .select(returningData)
            .from(table)
    }
    
    const find = (query) => {
        return knex.select(returningData)
                    .from(table)
                    .where(query)
    }

    const findOne = (id) => {
        return knex
            .select(returningData)
            .from(table)
            .where({[tableId]: id})
    }
    
    const update = (id, bodyToUpdate) => {
        return knex
            .update(bodyToUpdate)
            .from(table)
            .where({[tableId]: id})
            .returning(returningData)
    }
    
    const destroy = (id) => {
        return knex
            .del()
            .from(table)
            .where({[tableId]: id})
    }
    
    const del = (id) => {
        return knex
            .update({active: false})
            .from(table)
            .where({[tableId]:id})
    }

    return{
        create,
        findAll,
        findOne,
        update,
        destroy,
        del,
        find
    }
}

module.exports = createModelKnex
