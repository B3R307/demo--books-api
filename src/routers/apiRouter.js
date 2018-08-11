const Router = require('express').Router
const Publisher = require('../models/Publisher.js')
const Book = require('../models/Books.js')
const apiRouter  = Router()


apiRouter.get('/', (req, res)=>{
  res.json({
    '/api/books' : 'Show books',
    '/api/publishers' : 'Show publishes'
  })
})

apiRouter.get('/publishers', (req, res)=>{

  Publisher.query()
  .eager('books')
  .then((recordsFromDb)=>{
    res.status(200).json(recordsFromDb)
  })
  
})

apiRouter.get('/books',(req, res)=>{
  Book.query()
  .eager('publisher')
  .then((booksRecords)=>{
    res.status(200).json(booksRecords)
  })
})



module.exports = apiRouter
