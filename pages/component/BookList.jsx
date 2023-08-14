import React from 'react';

const BookList = ({ books, deleteBook }) => {
  return (
    <ul>
      {books.map((book, index) => (
          <div className='text-center' key={index}>
          <div>{book.name} by {book.author} ({book.year})</div>
          <button className='flex  text-center m-auto bg-[red] rounded-[50px] px-4' onClick={() => deleteBook(index)}>Delete</button>
        </div>
      ))}
    </ul>
  );
};

export default BookList;
