import styled from "styled-components";

const HeroContainer = styled.div`
  padding: 120px 100px 160px 100px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 80px 50px 100px 50px;
  }

  @media (max-width: 480px) {
    padding: 100px 30px 80px 30px; /* Increased top padding for small screens */
  }
`;

const Title = styled.h1`
  font-size: 4.3rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  padding: 10px 120px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 80px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 10px 30px;
  }
`;

const Button = styled.button`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export default function HeroSection() {
  return (
    <div className="padding-container">
      <HeroContainer>
        <Title>Ignition_Lab is building the next generation of product solutions in the direct-to-consumer space.</Title>
        <Subtitle>We bring ideas from seed to ready-to-market products. Our expertise spans product design, user experience, software engineering, machine learning, and web3. </Subtitle>
        <Button>Contact Us</Button>
      </HeroContainer>
    </div>
  );
}
