
module.exports.up = function(knex, Promise) {
  return knex
  .schema
  .createTable('publishers', (publishersTable)=>{
    publishersTable.increments()
    publishersTable.string('name')

    return publishersTable

  })
};

module.exports.down = function(knex, Promise) {
  return knex
  .schema
  .dropTableIfExists('publishers')


};
