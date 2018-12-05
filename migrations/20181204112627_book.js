
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', function (table) {
    table.increments('id')
    table.string('title')
    table.string('genre')
    table.string('description', 1000)
    table.string('cover_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book')
};
