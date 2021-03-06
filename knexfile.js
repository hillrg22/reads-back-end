// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/reads'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL+'?ssl=true',
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
