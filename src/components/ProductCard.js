import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  width: 200px;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductName = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 1em;
  color: #555;
`;

const AddToCartButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
      <AddToCartButton>Add to Cart</AddToCartButton>
    </Card>
  );
};

export default ProductCard;