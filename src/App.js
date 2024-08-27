import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ColorblindToggle from './components/ColorblindToggle';

const AppContainer = styled.div`
  filter: ${(props) => (props.colorblindMode ? "url(#deuteranopia)" : "none")};
`;

function App() {
  const [colorblindMode, setColorblindMode] = useState(false);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg">
        <filter id="deuteranopia">
          <feColorMatrix
            type="matrix"
            values="0.625, 0.375, 0, 0, 0
                    0.7, 0.3, 0, 0, 0
                    0, 0.3, 0.7, 0, 0
                    0, 0, 0, 1, 0"
          />
        </filter>
      </svg>
      <AppContainer colorblindMode={colorblindMode}>
        <Header />
        <ColorblindToggle toggle={() => setColorblindMode(!colorblindMode)} />
        <ProductList />
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;