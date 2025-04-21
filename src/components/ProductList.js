import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { fetchAllProducts } from '../utils/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts().then(data => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
