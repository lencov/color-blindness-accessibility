import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import Demo from './pages/Demo';
import BestPractices from './pages/BestPractices';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import { ColorBlindProvider, useColorBlind } from './ColorBlindContext';
import styled from 'styled-components';

const AppContainer = styled.div`
  filter: ${(props) => (props.colorblindMode ? "url(#deuteranopia)" : "none")};
`;

function AppContent() {
  const { isColorBlindMode } = useColorBlind();

  return (
    <Router>
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
      <AppContainer colorblindMode={isColorBlindMode}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/best-practices" element={<BestPractices />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

function App() {
  return (
    <ColorBlindProvider>
      <AppContent />
    </ColorBlindProvider>
  );
}

export default App;