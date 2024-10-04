// src/pages/BookDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import books from '../data';  // Import from data.js
import './BookDetailsPage.css';

const BookDetailsPage = ({ library, setLibrary }) => {
  const { id } = useParams();
  const book = books.find(book => book.id === parseInt(id));

  const addToLibrary = () => {
    if (!library.includes(book)) {
      setLibrary([...library, book]);
    }
  };

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Publication Year:</strong> {book.publication_year}</p>
      <button onClick={addToLibrary}>Add to My Library</button>
    </div>
  );
};

export default BookDetailsPage;
