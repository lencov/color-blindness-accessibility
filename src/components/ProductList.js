import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard.js';

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 29.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;