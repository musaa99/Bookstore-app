import React from 'react';
import 'tailwindcss/tailwind.css';

const Book = ({ name, author, year }) => {
    const [books, setBooks] = useState([
        { name: 'Book 1', author: 'Author 1', year: '2021' },
        { name: 'Book 2', author: 'Author 2', year: '2022' },
        { name: 'Book 3', author: 'Author 3', year: '2023' },
      ]);
  return (
    <div className="">
      <h3 className=''>{name}</h3>
      <p>Author: {author}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default Book;
