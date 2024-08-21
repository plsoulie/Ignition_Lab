import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const SectionWrapper = styled.div`
  padding: 0px 120px 0px 120px; /* Same padding as other sections */
`;

const SectionContainer = styled.div`
  padding: 60px 100px 60px 100px;
  background-color: #111; /* Match the background color of other sections */
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #fff; /* White color for text */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 15px;
  margin-bottom: 20px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: #222;
  color: #fff;

  &:focus {
    outline: none;
    border-color: orange; /* Highlighted border color on focus */
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 600px;
  padding: 15px;
  margin-bottom: 20px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: #222;
  color: #fff;
  resize: none;
  height: 150px;

  &:focus {
    outline: none;
    border-color: orange; /* Highlighted border color on focus */
  }
`;

const SubmitButton = styled.button`
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: orange;
  color: #000;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default function ContactFormSection() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm("service_kas3s7l", "template_fs22g8p", e.currentTarget, "fgLINNcEKhJza8P8GWyb4").then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message, please try again.");
      }
    );

    e.currentTarget.reset(); // Reset the form fields
  };

  return (
    <SectionWrapper>
      <SectionContainer>
        <Title>Contact Us</Title>
        <Form onSubmit={sendEmail}>
          <Input type="text" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <TextArea name="message" placeholder="Your Message" required />
          <SubmitButton type="submit">Send</SubmitButton>
        </Form>
      </SectionContainer>
    </SectionWrapper>
  );
}
