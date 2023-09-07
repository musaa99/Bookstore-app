import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteBook, fetchBooks } from '../slices/booksSlice';
import { deleteBookById } from '../services/api';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const booksData = await fetchBooks();
        dispatch(fetchBooks(booksData));
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    getBooks();
  }, [dispatch]);

  const handleDeleteBook = async (bookId) => {
    try {
      await deleteBookById(bookId);
      dispatch(deleteBook(bookId));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}{' '}
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
