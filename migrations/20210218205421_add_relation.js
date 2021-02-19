
exports.up = function(knex) {
  return knex.schema.table('homes', (table) => {
      //Aquí puedo manipular la tabla homes

      //Quiero hacer un rename de una columna
      table.renameColumn('description', 'detail')

      //Agregar una columna a mi table y que sea foranea.
      //references: Indicar a que tabla y que columna tiene que hacer referncia
      table.integer('fk_user').unsigned().references('users.id_user') 
  })
};

exports.down = function(knex) {
  
};


