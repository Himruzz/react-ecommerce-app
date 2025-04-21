import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../utils/api';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProductById(id).then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Product Image Section */}
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ objectFit: 'contain', height: '400px', width: '100%' }}
          />
        </div>

        {/* Product Details Section */}
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p className="text-muted">{product.category}</p>
          <h2 className="text-success">${product.price}</h2>
          <p>{product.description}</p>

          {/* Add to Cart Button */}
          <button
            className="btn btn-primary btn-lg mt-3"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
