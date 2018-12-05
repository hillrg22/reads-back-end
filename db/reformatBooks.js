function reformatBooks(books) {


  const reformatted = []
  const booksById = {}

  books.forEach(book => {
    const currentBookId = book.book_id


    if (booksById[currentBookId]) {
      booksById[book.book_id].authors.push({
        author_id: book.author_id,
        first_name: book.first_name,
        last_name: book.last_name,
        bio: book.author_bio,
        portrait_url: book.author_portrait_url
      })
    } else {
      booksById[currentBookId] = {
        book_id: book.book_id,
        book_title: book.title,
        book_genre: book.genre,
        book_description: book.book_description,
        book_cover_url: book.cover_url,

        authors: [{
          author_id: book.author_id,
          first_name: book.first_name,
          last_name: book.last_name,
          bio: book.author_bio,
          portrait_url: book.author_portrait_url,

        }]
      }
      reformatted.push(booksById[currentBookId])
    }
  })
  return reformatted
}


module.exports = reformatBooks
