import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px; /* Add padding on the sides */
  background-color: #000;
  color: #fff;
  box-sizing: border-box; /* Ensure padding doesn't affect the width */
  margin-top: 40px; /* Add margin to create space above the footer */
`;

const FooterText = styled.div`
  font-size: 1rem;
`;

const TextLink = styled.a`
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>@Ignition_Lab</FooterText>
      <TextLink href="mailto:plsoulie@icloud.com">Email</TextLink>
    </FooterContainer>
  );
}
