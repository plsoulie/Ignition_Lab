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
    border-radius: 0px 20px 20px 0px; /* Rounded corners only on the left side */
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
