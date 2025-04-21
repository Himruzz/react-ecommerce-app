// src/components/Header.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">E-Shop</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Header;
