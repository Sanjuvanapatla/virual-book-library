// src/pages/HomePage.js
import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import books from '../data';  // Import from data.js
import './HomePage.css';

const HomePage = ({ library, setLibrary }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <h1>Virtual Book Library</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="book-list">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} library={library} setLibrary={setLibrary} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
