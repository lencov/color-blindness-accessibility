import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useColorMode } from '../ColorModeContext';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
`;

const NavLinks = styled.nav`
  margin-top: 10px;

  a {
    color: #61dafb;
    margin: 0 15px;
    text-decoration: none;
  }
`;

const VisionToggle = styled.select`
  margin: 10px;
  padding: 5px;
`;

const Header = () => {
  const { mode, toggleMode, darkMode, toggleDarkMode } = useColorMode();

  return (
    <HeaderContainer>
      <h1>Accessible Design Guide</h1>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/demo">Demo</Link>
        <Link to="/best-practices">Best Practices</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/learning">Learning</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
      <div>
        <VisionToggle value={mode} onChange={(e) => toggleMode(e.target.value)}>
          <option value="normal">Normal Vision</option>
          <option value="deuteranopia">Deuteranopia</option>
          <option value="protanopia">Protanopia</option>
          <option value="tritanopia">Tritanopia</option>
        </VisionToggle>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;