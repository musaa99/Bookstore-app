"use client"; // This is a client component
import React, { useState } from 'react';
import BookForm from './component/BookForm';
import BookList from './component/BookList';


const BookstoreApp = () => {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div className=''>
      <h1 className=''>Bookstores App</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} deleteBook={deleteBook} />
    </div>
  );
};

export default BookstoreApp;
