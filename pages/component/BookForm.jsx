"use client"; // This is a client component
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';


const BookForm = ({ addBook }) => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && author && year) {
      const newBook = { name, author, year };
      addBook(newBook);
      setName('');
      setAuthor('');
      setYear('');
    }
  };

  return (

    <form  onSubmit={handleSubmit}>
      <label className='text-[red]'>
        Booksss Name:
        <input  className=""
         type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <label>
        Year:
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
      </label>
      <button  type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
