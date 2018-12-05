const express = require('express')
const router = express.Router()
const knex = require('../db/connection.js')


router.get('/', (req,res,next) =>{
  knex('author')
    .then(authors =>{
      res.json({authors:authors})
    })
})





module.exports = router
