const express = require('express')
const router = express.Router()
const knex = require('../db/connection.js')
const reformatBooks = require('../db/reformatBooks.js')

// reformatBooks = (books) => {
//
//   const reformatted = []
//   const booksById = {}
//
//   books.forEach(book => {
//     const currentBookId = book.book_id
//
//
//     if (booksById[currentBookId]) {
//       booksById[book.book_id].authors.push({
//         author_id: book.author_id,
//         first_name: book.first_name,
//         last_name: book.last_name
//       })
//     } else {
//       booksById[currentBookId] = {
//         book_id: book.book_id,
//         book_title: book.title,
//         book_genre: book.genre,
//         book_description: book.book_description,
//         book_cover_url: book.cover_url,
//
//         authors: [{
//           author_id: book.author_id,
//           first_name: book.first_name,
//           last_name: book.last_name,
//           bio: book.author_bio,
//           portrait_url: book.author_portrait_url,
//
//         }]
//       }
//       reformatted.push(booksById[currentBookId])
//     }
//   })
//   return reformatted
// }




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
