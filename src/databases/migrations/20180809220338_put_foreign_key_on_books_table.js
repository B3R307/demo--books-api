
exports.up = function(knex, Promise) {
  return knex.schema.table('books', (booksTable)=>{
    booksTable.integer('publisher_id')
    .unsigned()
    .references('id')
    .inTable('publishers')

      return booksTable
  })
};

exports.down = function(knex, Promise) {
 return knex.schema.table('books',(booksTable)=>{
   booksTable.dropForeign('publisher_id')
   booksTable.dropColumn('publisher_id')

   return booksTable
 })
};
