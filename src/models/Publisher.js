const { Model } = require('objection')

class Publisher extends Model {
  static get tableName(){
    return 'publishers'
  }
  static get relationMappings(){
    const Book = require('./Books.js')

    return {
      books: {
        relation: Model.HasManyRelation,
        modelClass: Book,
        join : {
          from : 'publishers.id',
          to : 'books.publisher_id'
        }
      }
    }
  }
}

module.exports = Publisher
