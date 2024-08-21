import styled from "styled-components";

const Container = styled.div`
  background-color: #1c1c1c;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 40px; /* Add inner padding */
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

export default function LocationsSection() {
  return (
    <div className="padding-container section-padding">
      <Container>
        <SmallTitle>Meet us in</SmallTitle>
        <BigTitle>San Francisco and Paris.</BigTitle>
        <Text>We're always open to hear about new ideas for project, don't hesitate to reach out!</Text>
      </Container>
    </div>
  );
}
