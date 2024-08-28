import React from 'react';
import styled from 'styled-components';
import { useColorMode } from '../ColorModeContext';

const DemoContainer = styled.section`
  padding: 50px;
  text-align: center;
  background-color: ${({ darkMode }) => (darkMode ? '#333' : '#fff')};
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
`;

const ProductCard = styled.div`
  border: 1px solid ${({ isBad }) => (isBad ? '#d9534f' : '#5cb85c')};
  padding: 20px;
  margin: 10px;
  width: 200px;
  text-align: center;
  background-color: ${({ darkMode }) => (darkMode ? '#444' : '#fff')};
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
`;

const Button = styled.button`
  background-color: ${({ isBad }) => (isBad ? '#d9534f' : '#5cb85c')};
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
  padding: 10px 20px;
  margin: 10px;
  border: none;
  cursor: pointer;
`;

const Demo = () => {
  const { mode, darkMode } = useColorMode();
  const isBadExample = mode !== 'normal';

  return (
    <DemoContainer darkMode={darkMode}>
      <h2>Interactive Demo</h2>
      <ProductCard isBad={isBadExample} darkMode={darkMode}>
        <img src="https://via.placeholder.com/150" alt="Product" />
        <h3>Product Name</h3>
        <p>$19.99</p>
      </ProductCard>
      <Button isBad={isBadExample} darkMode={darkMode}>
        {isBadExample ? 'Inaccessible Button' : 'Accessible Button'}
      </Button>
    </DemoContainer>
  );
};

export default Demo;