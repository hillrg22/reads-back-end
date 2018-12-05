
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author', function(table) {
    table.increments('id')
    table.string('bio', 1000)
    table.string('first_name')
    table.string('last_name')
    table.string('portrait_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author')

};
