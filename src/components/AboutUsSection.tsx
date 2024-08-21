import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Container = styled.div`
  text-align: center;
  padding: 40px; /* Add inner padding */
`;

const SmallTitle = styled.h3`
  color: orange;
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
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once or every time you scroll
    });
  }, []);

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
