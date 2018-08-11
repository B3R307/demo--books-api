const express = require('express')
const knex = require('knex')
const { Model } = require('objection')

const knexFileConfig = require('./knexfile.js')

const apiRouter = require('./src/routers/apiRouter.js')

const app = express()
const PORT = 3000

const appDb = knex(knexFileConfig.development)
Model.knex(appDb)
app.locals.db = appDb

// appDb
// .select('*')
// .from('publishers')
// .then((recordsFromDb)=>{
//   console.log(recordsFromDb)
// })
app.use('/api', apiRouter)



app.use((req, res)=>{
  res.send('<h3> books books bookso-No Data </h3>')
})

app.listen(PORT, ()=>{
  console.log(`App listening on localhost:${PORT}`);
})
