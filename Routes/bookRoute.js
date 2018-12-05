const express = require('express')
const router = express.Router()
const knex = require('../db/connection.js')


router.get('/',(req,res,next)=> {
  knex('book')
    .then(books => {
      res.json({books: books})
    })
})



module.exports = router
