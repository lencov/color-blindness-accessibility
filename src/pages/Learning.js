import React from 'react';
import styled from 'styled-components';

const LearningContainer = styled.section`
  padding: 50px;
  text-align: left;
`;

const QuizButton = styled.button`
  margin: 20px 0;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const Learning = () => {
  return (
    <LearningContainer>
      <h2>Learn About Accessible Design</h2>
      <h3>Articles</h3>
      <p>Read articles on designing accessible websites for color-blind users.</p>
      <h3>Tutorials</h3>
      <p>Follow tutorials to implement best practices in your designs.</p>
      <h3>Quiz</h3>
      <QuizButton onClick={() => alert('Start Quiz!')}>Take the Accessibility Quiz</QuizButton>
    </LearningContainer>
  );
};

export default Learning;