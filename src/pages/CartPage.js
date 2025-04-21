// src/pages/CartPage.js

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="container my-5">
      <h1 className="mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <div className="row">
          {cartItems.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">${item.price}</p>
                  <p className="card-text">Quantity: {item.quantity}</p>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-danger btn-block"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="mt-4">
          <Link to="/checkout" className="btn btn-success">
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
