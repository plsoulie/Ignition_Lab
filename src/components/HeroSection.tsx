import styled from "styled-components";

const HeroContainer = styled.div`
  padding: 120px 100px 160px 100px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4.3rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  padding: 10px 120px;
`;

const Button = styled.button`
  font-size: 1rem;
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
