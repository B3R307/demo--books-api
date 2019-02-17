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


.post('/books',(req, res)=>{
  console.log(req.body)
  Book.query()
  .insert(req.body)
  .then((newDbRecord)=>{

  })
})

.put('/book/:id', (req, res,)=>{
  Book.query()
  .patchAndFetcById(req.params._id, req.body);
  then((editedDbRecord)=>{
    res.status(200).json(editedDbRecord)
  })
})

.delete('/books/:_id', (req, res)=>{
  Book.query()
  .deleteById(req.params._id)
  .then((recordsDeleteNum)=>{
    res.status(200).json(recordsDeleteNum)

    })
})


module.exports = apiRouter
