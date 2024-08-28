import React from 'react';
import styled from 'styled-components';
import { useColorBlind } from '../ColorBlindContext';

const DemoContainer = styled.section`
  padding: 50px;
  text-align: center;
`;

const ProductCard = styled.div`
  border: 1px solid ${(props) => (props.isColorBlindMode ? '#888' : '#ddd')};
  padding: 20px;
  margin: 10px;
  width: 200px;
  text-align: center;
  background-color: ${(props) => (props.isColorBlindMode ? '#f0f0f0' : '#fff')};
`;

const BadExample = styled.div`
  margin: 20px 0;
  color: ${(props) => (props.isColorBlindMode ? '#555' : '#f00')}; /* Bad color contrast */
`;

const GoodExample = styled.div`
  margin: 20px 0;
  color: ${(props) => (props.isColorBlindMode ? '#000' : '#007bff')}; /* Good color contrast */
`;

const Demo = () => {
  const { isColorBlindMode } = useColorBlind();

  return (
    <DemoContainer>
      <h2>Interactive Demo</h2>
      <p>See how color blindness affects the way users view your designs.</p>
      <ProductCard isColorBlindMode={isColorBlindMode}>
        <img src="https://via.placeholder.com/150" alt="Product" />
        <h3>Product Name</h3>
        <p>$19.99</p>
      </ProductCard>
      <BadExample isColorBlindMode={isColorBlindMode}>
        This is a bad example of color contrast.
      </BadExample>
      <GoodExample isColorBlindMode={isColorBlindMode}>
        This is a good example of color contrast.
      </GoodExample>
    </DemoContainer>
  );
};

export default Demo;