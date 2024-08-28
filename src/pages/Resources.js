import React from 'react';
import styled from 'styled-components';

const ResourcesContainer = styled.section`
  padding: 50px;
  text-align: center;
`;

const Resources = () => {
  return (
    <ResourcesContainer>
      <h2>Resources</h2>
      <p>Links to helpful tools and articles:</p>
      <ul>
        <li><a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">Contrast Checker</a></li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer">WCAG Guidelines</a></li>
        <li><a href="https://www.toptal.com/designers/colorfilter" target="_blank" rel="noopener noreferrer">Color Blindness Simulator</a></li>
      </ul>
    </ResourcesContainer>
  );
};

export default Resources;