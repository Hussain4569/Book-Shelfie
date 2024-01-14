import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const AddBook = ({handleClick}) => {
  return (
    <div className='add-book-container'>
      <FontAwesomeIcon icon={faTimes} className='close-icon' onClick={handleClick} />
      <h3>Add Book</h3>
      <form>
        <input type='text' placeholder='Book Title' />
        <input type='text' placeholder='Author' />
        <input type='text' placeholder='Genre' />
        <input type='text' placeholder='Year' />
        <input type='number' placeholder='Rating' />
        <textarea placeholder='Review' />
        <button type='submit' className='btn'>Add Book</button>
      </form>
    </div>
  )
}

export default AddBook