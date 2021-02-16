
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('homes', (table) =>{
      table.increments('house_id').primary()
      table.string('title').notNullable()
      table.integer('guests').notNullable()
      table.text('address').notNullable()
      table.text('description')
      table.boolean('active').notNullable().defaultTo(true)
      table.timestamp('create_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('homes')
};
