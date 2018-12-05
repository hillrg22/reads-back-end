const express = require('express')
const router = express.Router()
const knex = require('../db/connection.js')
const reformatBooks = require('../db/reformatBooks.js')



router.get('/', (req,res,next) =>{
  knex('book')
    .select(
      'book.id AS book_id',
      'author.id AS author_id',
      'book.title',
      'book.description AS book_description',
      'book.cover_url',
      'author.first_name',
      'author.last_name',
      'author.bio AS author_bio',
      'author.portrait_url as author_portrait_url'
    )
    .innerJoin('author_book', 'book.id', 'author_book.book_id')
    .innerJoin('author', 'author_book.author_id', 'author.id')
    .then(books =>{
      res.json({books:reformatBooks(books)})
    })
  })









module.exports = router
