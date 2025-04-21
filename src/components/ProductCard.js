// src/components/ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text text-muted">{product.category}</p>
          <p className="card-text">${product.price}</p>
        </div>
        <div className="card-footer">
          <Link to={`/product/${product.id}`} className="btn btn-primary btn-block">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
