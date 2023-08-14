import React from 'react';

const BookList = ({ books, deleteBook }) => {
  return (
    <ul>
      {books.map((book, index) => (
          <div className='booklist' key={index}>
          <div>{book.name} by {book.author} ({book.year})</div>
          <button onClick={() => deleteBook(index)}>Delete</button>
        </div>
      ))}
    </ul>
  );
};

export default BookList;
