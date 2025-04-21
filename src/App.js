import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ProductDetail from './pages/ProductDetail';
import SearchResults from './pages/SearchResults'; // Import SearchResults component
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/search" element={<SearchResults />} /> {/* Search Results route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
