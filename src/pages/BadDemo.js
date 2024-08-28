import React from 'react';
import styled from 'styled-components';
import { useColorMode } from '../ColorModeContext';

const DemoContainer = styled.section`
  padding: 30px;
  text-align: center;
  background-color: ${({ darkMode }) => (darkMode ? '#2e2e2e' : '#ccc')};
  color: ${({ darkMode }) => (darkMode ? '#b3b3b3' : '#7a7a7a')};
`;

const ProductCard = styled.div`
  border: 1px solid #7a7a7a;
  padding: 20px;
  margin: 10px;
  width: 200px;
  text-align: center;
  background-color: ${({ darkMode }) => (darkMode ? '#2e2e2e' : '#ccc')};
  color: ${({ darkMode }) => (darkMode ? '#b3b3b3' : '#7a7a7a')};
`;

const Button = styled.button`
  background-color: #7a7a7a; // Low contrast color
  color: #7a7a7a; // Text blends with the button and background
  padding: 10px 20px;
  margin: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
`;

const BadDemo = () => {
  const { darkMode } = useColorMode();

  return (
    <DemoContainer darkMode={darkMode}>
      <h2>Inaccessible Online Store - Bad Design Practices</h2>
      
      {/* Multiple Products with Bad Contrast */}
      <ProductCard darkMode={darkMode}>
        <img src="https://via.placeholder.com/150" alt="Product 1" />
        <h3>Product 1</h3>
        <p>$19.99</p>
        <Button>Add to Cart</Button>
      </ProductCard>
      <ProductCard darkMode={darkMode}>
        <img src="https://via.placeholder.com/150" alt="Product 2" />
        <h3>Product 2</h3>
        <p>$29.99</p>
        <Button>Add to Cart</Button>
      </ProductCard>
      
      {/* Cart and Checkout Buttons with Blending Colors */}
      <Button>View Cart</Button>
      <Button>Checkout</Button>
    </DemoContainer>
  );
};

export default BadDemo;