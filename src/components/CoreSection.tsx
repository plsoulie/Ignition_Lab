import styled from "styled-components";
import coreImage from "../assets/core-image.jpg"; // Import the core section image

const Container = styled.div`
  display: flex;
  background-color: #1c1c1c;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  align-items: center;
  padding: 0; /* Remove padding to integrate the image fully */

  img {
    border-radius: 0px 20px 20px 0px; /* Rounded corners on the right side */
    max-width: 50%; /* Ensure the image takes up half of the container */
    height: 100%;
    object-fit: cover; /* Ensure the image covers its container */
  }

  div {
    flex: 1;
    padding-left: 80px; /* Add padding to the left side of the text */
    padding-right: 80px; /* Add padding to the right side of the text */
    border-radius: 0 20px 20px 0; /* Rounded corners only on the right side */
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 40px; /* Add margin below the title */
    color: #59ff00;
  }

  p {
    margin-bottom: 0px; /* Add margin below each paragraph */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    img {
      max-width: 100%; /* Image takes full width on smaller screens */
      border-radius: 0px 0px 20px 20px; /* Rounded corners on the top */
      height: auto; /* Allow the image to scale with content */
    }

    div {
      padding: 40px 20px; /* Adjust padding for smaller screens */
      border-radius: 20px 20px 0px 0px; /* Rounded corners on the bottom */
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

export default function CoreSection() {
  return (
    <div className="padding-container section-padding">
      <Container>
        <div>
          <h2>Our Expertise</h2>
          <p>
            Our core strength lies in our multidisciplinary expertise. Our mission is to help companies who lack the means to develop new products by providing the technical skills and guidance needed
            to ensure safe and successful delivery.
          </p>
        </div>
        <img src={coreImage} alt="Our Expertise" />
      </Container>
    </div>
  );
}
