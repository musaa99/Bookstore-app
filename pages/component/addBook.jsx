import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { addNewBook } from '../api/api';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = async () => {
    if (!title) return;

    try {
      const newBook = await addNewBook({ title });
      dispatch(addBook(newBook));
      setTitle('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default AddBookForm;
