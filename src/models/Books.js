const { Model } = require('objection')

class Book extends Model {
  static get tableName(){
    return 'books'
  }

  static get relationMappings(){
    const Publisher = require('./Publisher.js')

    return {
      publisher : {
        relation : Model.BelongsToOneRelation,
        modelClass : Publisher,
        join : {
        from : 'books.publisher_id',
        to : 'publishers.id'
        }
      }
    }
  }
}

module.exports = Book
