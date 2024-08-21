import styled from "styled-components";
import talentImage from "../assets/talent-image.jpg"; // Import the talent section image

const Container = styled.div`
  display: flex;
  background-color: #111;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  align-items: center;
  padding: 0; /* Remove padding to integrate the image fully */

  img {
    border-radius: 20px 0 0 20px; /* Rounded corners on the left side */
    max-width: 50%; /* Ensure the image takes up half of the container */
    height: 100%;
    object-fit: cover; /* Ensure the image covers its container */
  }

  div {
    flex: 1;
    padding-left: 60px; /* Add padding to the left side of the text */
    padding-right: 60px; /* Add padding to the right side of the text */
    border-radius: 0 20px 20px 0; /* Rounded corners on the right side */
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 40px; /* Add margin below the title */
  }
  p {
    margin-bottom: 40px; /* Add margin below each paragraph */
  }
`;

export default function TalentPoolSection() {
  return (
    <div className="padding-container section-padding">
      <Container>
        <img src={talentImage} alt="Talent Network" />
        <div>
          <h2>Join our talent network</h2>
          <p>
            At Ignition Lab, we collaborate with a carefully selected portfolio of talents. Our team includes specialists in product design, user experience, software engineering, machine learning,
            and web3. Join us and contribute to creating innovative products for companies around the globe.
          </p>
          <button>Apply</button>
        </div>
      </Container>
    </div>
  );
}
