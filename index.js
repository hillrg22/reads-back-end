const express = require('express')
const app = express()
const port = process.env.PORT || 3002
const parser = require('body-parser')
const cors = require('cors')
const knex = require ('./db/connection')

app.use(cors())
app.use(parser.urlencoded({extended:false}))
app.use(parser.json())

const bookRoute = require('./Routes/bookRoute.js')
const authorRoute = require('./Routes/authorRoute.js')
const author_bookRoute = require('./Routes/author_bookRoute.js')


app.use('/books', bookRoute)
app.use('/authors', authorRoute)
app.use('/author_book', author_bookRoute)

app.get('/',(req,res,next)=>{
  res.send('got it 🏈')
})




app.listen(port, () =>{
  console.log(`Running on port ${port}`)
})
