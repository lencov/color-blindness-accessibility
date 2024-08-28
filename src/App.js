import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ColorModeProvider, useColorMode } from './ColorModeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Demo from './pages/Demo';
import BestPractices from './pages/BestPractices';
import Resources from './pages/Resources';
import Learning from './pages/Learning';
import Contact from './pages/Contact';
import styled from 'styled-components';

const AppContainer = styled.div`
  filter: ${(props) => props.filter};
  background-color: ${(props) => (props.darkMode ? '#333' : '#fff')};
  color: ${(props) => (props.darkMode ? '#fff' : '#000')};
`;

function AppContent() {
  const { darkMode, getColorFilter } = useColorMode();

  return (
    <Router>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <filter id="deuteranopia">
          <feColorMatrix type="matrix"
            values="0.625, 0.375, 0, 0, 0
                    0.7, 0.3, 0, 0, 0
                    0, 0.3, 0.7, 0, 0
                    0, 0, 0, 1, 0" />
        </filter>
        <filter id="protanopia">
          <feColorMatrix type="matrix"
            values="0.56667, 0.43333, 0, 0, 0
                    0.55833, 0.44167, 0, 0, 0
                    0, 0.24167, 0.75833, 0, 0
                    0, 0, 0, 1, 0" />
        </filter>
        <filter id="tritanopia">
          <feColorMatrix type="matrix"
            values="0.95, 0.05, 0, 0, 0
                    0, 0.43333, 0.56667, 0, 0
                    0, 0.475, 0.525, 0, 0
                    0, 0, 0, 1, 0" />
        </filter>
      </svg>
      <AppContainer filter={getColorFilter()} darkMode={darkMode}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/best-practices" element={<BestPractices />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

function App() {
  return (
    <ColorModeProvider>
      <AppContent />
    </ColorModeProvider>
  );
}

export default App;