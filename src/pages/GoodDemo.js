import React from 'react';
import styled from 'styled-components';
import { useColorMode } from '../ColorModeContext';

const DemoContainer = styled.section`
  padding: 30px;
  text-align: center;
  background-color: ${({ darkMode }) => (darkMode ? '#333' : '#fff')};
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
`;

/* Example of good and bad buttons */
const Button = styled.button`
  background-color: ${({ isBad }) => (isBad ? '#d9534f' : '#5cb85c')}; // Bad: red/green contrast; Good: high contrast
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
  padding: 10px 20px;
  margin: 10px;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  border-radius: ${({ isBad }) => (isBad ? '0' : '5px')}; // Adds shape difference
`;

/* Input fields with good and bad feedback */
const InputField = styled.input`
  padding: 10px;
  margin: 20px;
  border: 2px solid ${({ isBad }) => (isBad ? '#f00' : '#5cb85c')}; // Bad: red outline; Good: high contrast + icon
  background-color: ${({ darkMode }) => (darkMode ? '#333' : '#fff')};
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
  width: 250px;
`;

/* Styled links for navigation */
const StyledLink = styled.button`
  background: none;
  color: ${({ isBad }) => (isBad ? '#d9534f' : '#007bff')}; // Bad: red link; Good: accessible color
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  text-decoration: ${({ isBad }) => (isBad ? 'none' : 'underline')};

  &:hover {
    color: ${({ isBad }) => (isBad ? '#b52b27' : '#0056b3')};
  }
`;

/* Main Demo component */
const Demo = () => {
  const { mode, darkMode } = useColorMode();
  const isBadExample = mode !== 'normal'; // Toggle bad example when not in normal mode

  return (
    <DemoContainer darkMode={darkMode}>
      <h2>Accessibility Demo for Online Store</h2>
      {/* Buttons */}
      <Button isBad={isBadExample} darkMode={darkMode}>
        {isBadExample ? 'Low Contrast Button' : 'High Contrast Button'}
      </Button>
      {/* Input Field Examples */}
      <InputField
        isBad={isBadExample}
        darkMode={darkMode}
        placeholder={isBadExample ? 'Hard to Read Input' : 'Easy to Read Input'}
      />
      {/* Navigation Example */}
      <div>
        <StyledLink onClick={() => alert('Navigating to Home')} isBad={isBadExample}>
          Home
        </StyledLink>
        <StyledLink onClick={() => alert('Navigating to Products')} isBad={isBadExample}>
          Products
        </StyledLink>
        <StyledLink onClick={() => alert('Navigating to Contact')} isBad={isBadExample}>
          Contact
        </StyledLink>
      </div>
      {/* Example of Data Visualization */}
      <h3>Sales Chart Example</h3>
      {/* Implement accessible data visualization here */}
    </DemoContainer>
  );
};

export default Demo;