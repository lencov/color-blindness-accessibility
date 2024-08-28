import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.section`
  padding: 50px;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h2>Welcome to the Accessible Design Guide</h2>
      <p>Learn how to create designs that are inclusive for everyone, including those with color blindness.</p>
    </HomeContainer>
  );
};

export default Home;