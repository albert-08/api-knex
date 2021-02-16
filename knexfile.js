// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host:	'ziggy.db.elephantsql.com',
      database: 'mquwbhka',
      user:     'mquwbhka',
      password: 'DlVs-Vg-AcOZYHG5Yq9-fmT6NmxOJuMe'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host:	'ziggy.db.elephantsql.com',
      database: 'mquwbhka',
      user:     'mquwbhka',
      password: 'DlVs-Vg-AcOZYHG5Yq9-fmT6NmxOJuMe'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
