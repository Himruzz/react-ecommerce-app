// src/pages/ProductListPage.js

import React, { useEffect, useState } from 'react';
import { fetchAllProducts } from '../utils/api';
import ProductCard from '../components/ProductCard';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Our Products</h1>
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
