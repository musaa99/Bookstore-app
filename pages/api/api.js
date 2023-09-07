import axios from 'axios';

const baseURL = 'your_api_endpoint_here'; // Replace with your actual API endpoint

const api = axios.create({
  baseURL,
});

export const fetchBooks = async () => {
  const response = await api.get('/books');
  return response.data;
};

export const addNewBook = async (bookData) => {
  const response = await api.post('/books', bookData);
  return response.data;
};

export const deleteBookById = async (bookId) => {
  await api.delete(`/books/${bookId}`);
};
