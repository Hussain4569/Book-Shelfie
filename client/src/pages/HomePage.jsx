import React, {useState} from 'react'
import Button from '../components/Button'
import BookCard from '../components/BookCard'
import AddBook from '../components/AddBook';

import { booksAtom } from '../utils/atom';
import { useAtom } from 'jotai';

const HomePage = ({setOnAuth}) => {

  setOnAuth(false);
  const [showAddBook, setShowAddBook] = useState(false);
  const [books, setBooks] = useAtom(booksAtom);

  function handleClick() {
    setShowAddBook(!showAddBook);
  }
  
  return (
    <div className='home-page'>
      <div className='book-card-container' style={{"opacity": showAddBook ? 0.5 : 1}}>
        <Button text='' fab={true} handleClick={handleClick} />
        {books.map(book => 
          <BookCard title={book.title} genre={book.genre} rating={book.rating} 
            author={book.author} year={book.year} review={book.reveiw} />
        )}
      </div>
      {showAddBook && <AddBook handleClick={handleClick} />}
    </div>
  )
}

export default HomePage