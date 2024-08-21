import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 40px; /* Add inner padding */
  margin-top: 20px;
`;

const SmallTitle = styled.h3`
  color: #59ff00;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const BigTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.4rem;
`;

export default function AboutUsSection() {
  return (
    <div className="padding-container section-padding" data-aos="fade-up">
      <Container>
        <SmallTitle>About us</SmallTitle>
        <BigTitle>A true creator company at heart.</BigTitle>
        <Text>Ignition_Lab consists of a portfolio of product solutions tackling niche problems in simple but impactful ways.</Text>
      </Container>
    </div>
  );
}
