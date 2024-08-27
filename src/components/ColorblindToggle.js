import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 20px;
  display: block;

  &:hover {
    background-color: #0056b3;
  }
`;

const ColorblindToggle = ({ toggle }) => {
  return <ToggleButton onClick={toggle}>Toggle Colorblind Mode</ToggleButton>;
};

export default ColorblindToggle;