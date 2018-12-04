
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', function (table) {
    table.increments('id')
    table.string('name')
    table.string('genre')
    table.string('description')
    table.string('cover_URL')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book')
};
