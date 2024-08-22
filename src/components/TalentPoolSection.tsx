import styled from "styled-components";
import talentImage from "../assets/talent-image.jpg"; // Import the talent section image

const Container = styled.div`
  display: flex;
  background-color: #1c1c1c;
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
    color: #59ff00;
  }

  p {
    margin-bottom: 40px; /* Add margin below each paragraph */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    img {
      max-width: 100%; /* Image takes full width on smaller screens */
      border-radius: 20px 20px 0 0; /* Rounded corners on the top */
      height: auto; /* Allow the image to scale with content */
    }

    div {
      padding: 40px 20px; /* Adjust padding for smaller screens */
      border-radius: 0 0 20px 20px; /* Rounded corners on the bottom */
    }

    h2 {
      font-size: 1.8rem; /* Slightly smaller title */
      margin-bottom: 30px;
    }

    p {
      font-size: 1rem;
      margin-bottom: 30px;
    }

    button {
      font-size: 1rem; /* Adjust button size */
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.5rem; /* Even smaller title for very small screens */
      margin-bottom: 20px;
    }

    p {
      font-size: 0.9rem;
      margin-bottom: 20px;
    }

    div {
      padding: 30px 15px; /* Less padding on very small screens */
    }

    button {
      font-size: 0.9rem; /* Smaller button size */
    }
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
