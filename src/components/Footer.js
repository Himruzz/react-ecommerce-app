import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // Assuming you have a separate CSS file for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1: About */}
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><Link to="/about-us">Company Info</Link></li>
            <li><Link to="/about-us">Careers</Link></li>
            <li><Link to="/about-us">Press Releases</Link></li>
            <li><Link to="/about-us">Blog</Link></li>
          </ul>
        </div>
        
        {/* Column 2: Customer Service */}
        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/contact-us">Order Status</Link></li>
            <li><Link to="/contact-us">Returns</Link></li>
            <li><Link to="/contact-us">FAQs</Link></li>
          </ul>
        </div>
        
        {/* Column 3: Follow Us */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-media">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        
          </ul>
        </div>
        
        {/* Column 4: Payment Methods */}
        <div className="footer-column">
          <h3>Payment Methods</h3>
          <p>We accept:</p>
          <ul className="payment-methods">
            <li>Visa</li>
            <li>MasterCard</li>
            <li>PayPal</li>
            <li>Stripe</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} E-SHOP. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
