import React from 'react';
import styled from 'styled-components';

const ResourcesContainer = styled.section`
  padding: 50px;
  text-align: center;
`;

const ResourceLink = styled.a`
  display: block;
  margin: 10px 0;
  color: #007bff;
  text-decoration: none;

  &:hover {
    color: #0056b3;
  }
`;

const Resources = () => {
  return (
    <ResourcesContainer>
      <h2>Accessibility Resources</h2>
      <ResourceLink href="https://webaim.org/resources/contrastchecker/" target="_blank">
        WebAIM Contrast Checker
      </ResourceLink>
      <ResourceLink href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">
        WCAG Guidelines
      </ResourceLink>
      <ResourceLink href="https://www.toptal.com/designers/colorfilter" target="_blank">
        Color Blindness Simulator
      </ResourceLink>
    </ResourcesContainer>
  );
};

export default Resources;