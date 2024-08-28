import React from 'react';
import styled from 'styled-components';

const BestPracticesContainer = styled.section`
  padding: 50px;
  text-align: left;
`;

const ChecklistButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const BestPractices = () => {
  return (
    <BestPracticesContainer>
      <h2>Accessibility Best Practices</h2>
      <p>Follow these best practices to ensure your design is accessible to color-blind users:</p>
      <ul>
        <li>Use sufficient color contrast (minimum 4.5:1 ratio).</li>
        <li>Do not convey information by color alone.</li>
        <li>Avoid problematic color combinations like red-green.</li>
        <li>Offer color blindness modes where possible.</li>
      </ul>
      <ChecklistButton onClick={() => alert('Download Checklist!')}>
        Download Accessibility Checklist
      </ChecklistButton>
    </BestPracticesContainer>
  );
};

export default BestPractices;