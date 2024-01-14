import React from 'react'

const BookCard = ({title, genre, rating, author, year, review}) => {
  return (
    <div className='book-card'>
        <h4 className='book-title'>{title}</h4>
        <span className='book-genre'>{genre}</span>
        <span className='book-rating'>{rating}</span>
        <div className='book-details'>
            <span className='book-author'>{author}</span>
            <span className='book-year'>{year}</span>
            <p className='book-review'>{review}</p>
        </div>
    </div>
  )
}

export default BookCard