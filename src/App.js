// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change here
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import MyLibraryPage from './pages/MyLibraryPage';
import './App.css';

const App = () => {
  const [library, setLibrary] = useState([]);

  return (
    <Router>
      <Routes> 
        <Route path="/" element={<HomePage library={library} setLibrary={setLibrary} />} />
        <Route path="/book/:id" element={<BookDetailsPage library={library} setLibrary={setLibrary} />} />
        <Route path="/my-library" element={<MyLibraryPage library={library} setLibrary={setLibrary} />} />
      </Routes>
    </Router>
  );
};

export default App;
