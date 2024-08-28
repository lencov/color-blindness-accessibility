import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 50px;
  text-align: center;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  width: 300px;
  height: 100px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <Textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </ContactContainer>
  );
};

export default Contact;