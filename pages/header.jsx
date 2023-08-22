import React from 'react';
// import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='text-center'>
      <h1>Book Management App</h1>
      <hr />
      <div className="flex justify-center items-center">
        <div to="/" className="link" activeClassName="active" exact>
          Books List
        </div>
        <div to="/add" className="link" activeClassName="active">
          Add Book
        </div>
      </div>
    </header>
  );
};

export default Header;