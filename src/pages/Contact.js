import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 50px;
  text-align: center;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, feel free to reach out.</p>
      <a href="mailto:info@accessibledesign.com">info@accessibledesign.com</a>
    </ContactContainer>
  );
};

export default Contact;