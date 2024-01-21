// knexfile.js

module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'erikpatekoski',
        password: '102030',
        database: 'veiculos',
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './migrations',
      },
      seeds: {
        directory: './seeds',
      },
    },
  };
  