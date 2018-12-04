
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', function (table) {
    table.increments('id')
    table.string('title')
    table.string('genre')
    table.string('description', 5000)
    table.string('cover_URL')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book')
};
