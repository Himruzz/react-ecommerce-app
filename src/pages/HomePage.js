// src/pages/HomePage.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllProducts } from '../utils/api';
import ProductCard from '../components/ProductCard';
import '../styles/HomePage.css'; // Assuming you have a CSS file for styling

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Fetch products and set a few as featured products
    fetchAllProducts().then((products) => {
      // Randomly selecting 4 products as featured (you can change this logic)
      setFeaturedProducts(products.slice(0, 4));
    });
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to Our E-SHOP</h1>
        <p>Discover the best products at unbeatable prices!</p>
        <Link to="/products" className="btn-shop-now">Shop Now</Link>
      </div>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
