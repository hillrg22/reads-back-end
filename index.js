const express = require('express')
const app = express()
const port = 3002
const parser = require('body-parser')
const cors = require('cors')
const knex = require ('./db/connection')

app.use(parser.urlencoded({extended:false}))
app.use(parser.json())





app.get('/',(req,res,next)=>{
  res.send('got it 🏈')
})


app.get('/books',(req,res,next)=> {
  knex('book')
    .then(books => {
      res.json({books: books})
    })
})

app.listen(port, () =>{
  console.log(`Running on port ${port}`)
})
