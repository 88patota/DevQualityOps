// migrations/20220123123456_create_veiculos_table.js

exports.up = function (knex) {
    return knex.schema.createTable('veiculos', function (table) {
      table.increments('id').primary();
      table.string('marca');
      table.string('modelo');
      table.integer('ano_fabricacao');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('veiculos');
  };
  