const express = require('express')
const app = express()
const port = 3002
const parser = require('body-parser')
const cors = require('cors')

app.use(parser.urlencoded({extended:false}))
app.use(parser.json())

const books = require('./books.js')
const test = require('./test.js')




app.get('/',(req,res,next)=>{
  res.send('got it 🏈')
})


app.get('/books',(req,res,next)=> {
  res.json({books})
})

app.listen(port, () =>{
  console.log(`Running on port ${port}`)
})
