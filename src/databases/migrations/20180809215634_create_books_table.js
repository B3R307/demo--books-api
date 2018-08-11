
module.exports.up = function(knex, Promise) {
  return knex
  .schema
  .createTable('books', (booksTable)=>{
    booksTable.increments()
    booksTable.string('title')
    booksTable.text('blurb')
    booksTable.integer('copyright')



    return booksTable

  })
};

module.exports.down = function(knex, Promise) {
  return knex
  .schema
  .dropTableIfExists('books')


};
