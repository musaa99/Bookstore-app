"use client"; // This is a client component
import React, { useState } from 'react';


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
  <div className='w-full  m-auto max-w-md'>

    <form className= "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Booksss Name:
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Author:
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Year:
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" value={year} onChange={(e) => setYear(e.target.value)} />
        </label>
        <button className='flex  text-center m-auto bg-[blue] rounded-[50px] px-4 ' type="submit">Add Book</button>
      </form>
  </div>

      
  );
};

export default BookForm;
