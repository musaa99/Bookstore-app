import React from 'react';
// import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='text-center'>
      <div className="row">
        <h1>Book Store app</h1>
      </div>
      <div className="flex justify-center gap-[10px]" >
        <div className="">
          <button className="bg-[blue] rounded px-2">Load Book</button>
        </div>
        <div className="">
          <button className="bg-[blue] rounded px-2">Add Book</button>
        </div>
      </div>
    </header>
  );
};

export default Header;