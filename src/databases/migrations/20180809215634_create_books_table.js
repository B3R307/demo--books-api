
module.exports.up = function(knex, Promise) {
  return knex
  .schema
  .createTable('books', (booksTable)=>{
    booksTable.increments()
    booksTable.string('title').notNullable()
    booksTable.text('blurb')
    booksTable.integer('copyright')

    // booksTable.timestamps(true,true)

    return booksTable

  })
};

module.exports.down = function(knex, Promise) {
  return knex
  .schema
  .dropTableIfExists('books')


};
