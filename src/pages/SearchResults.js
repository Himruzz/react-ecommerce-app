// src/pages/SearchResults.js

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchAllProducts } from '../utils/api';
import ProductCard from '../components/ProductCard';
import '../styles/ProductListPage.css';

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    // Fetch all products and filter based on search query
    fetchAllProducts().then((data) => {
      const filteredProducts = data.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setProducts(filteredProducts);
    });
  }, [query]);

  return (
    <div className="product-list-page">
      <h1>Search Results for "{query}"</h1>
      {products.length > 0 ? (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;
