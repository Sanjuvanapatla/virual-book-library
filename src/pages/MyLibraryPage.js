// src/pages/MyLibraryPage.js
import React from 'react';
import './MyLibraryPage.css';

const MyLibraryPage = ({ library, setLibrary }) => {
  const removeFromLibrary = (book) => {
    setLibrary(library.filter(item => item.id !== book.id));
  };

  return (
    <div className="my-library">
      <h2>My Library</h2>
      {library.length === 0 ? (
        <p>No books in your library.</p>
      ) : (
        <ul>
          {library.map(book => (
            <li key={book.id}>
              {book.title} by {book.author}
              <button onClick={() => removeFromLibrary(book)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyLibraryPage;
