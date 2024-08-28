import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useColorBlind } from '../ColorBlindContext'; // Import the context hook

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

const VisionToggle = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Header = () => {
  const { isColorBlindMode, toggleColorBlindMode } = useColorBlind();

  return (
    <HeaderContainer>
      <h1>Accessible Design Guide</h1>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/demo">Demo</Link>
        <Link to="/best-practices">Best Practices</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
      <VisionToggle onClick={toggleColorBlindMode}>
        {isColorBlindMode ? "Switch to Normal Vision" : "Switch to Colorblind Vision"}
      </VisionToggle>
    </HeaderContainer>
  );
};

export default Header;