import React from 'react';
import styled from 'styled-components';

const BestPracticesContainer = styled.section`
  padding: 50px;
  text-align: center;
`;

const BestPractices = () => {
  return (
    <BestPracticesContainer>
      <h2>Best Practices for Accessible Design</h2>
      <ul>
        <li>Use sufficient color contrast.</li>
        <li>Don’t rely on color alone to convey meaning.</li>
        <li>Avoid problematic color combinations like red-green.</li>
        <li>Provide color blindness modes when possible.</li>
      </ul>
    </BestPracticesContainer>
  );
};

export default BestPractices;