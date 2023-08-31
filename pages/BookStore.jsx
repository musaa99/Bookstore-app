"use client"; // This is a client component
import React, { useState } from 'react';
import { AddBook } from './component/addBook';
import BookForm from './component/BookForm';
import BookList from './component/BookList';
import Header from './header';


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
      {/* <Header/> */}
      <AddBook/>
      {/* <BookForm addBook={addBook} /> */}
      {/* <BookList books={books} deleteBook={deleteBook} /> */}
    </div>
  );
};

export default BookstoreApp;
