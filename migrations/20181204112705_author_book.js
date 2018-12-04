
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author_book', function (table){
    table.increments()
    table.integer('book_id').references('book.id').unsigned().onDelete('cascade')
    table.integer('author_id').references('author.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {

};
