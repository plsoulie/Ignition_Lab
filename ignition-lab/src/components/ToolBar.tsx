import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/ignitionlab_black_2.png"; // Import your new logo image

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px; /* Add padding on the sides */
  background-color: #000;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box; /* Ensure padding doesn't affect the width */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 53.33px; /* Reduce the logo height by 1/3 */
  margin-right: 15px; /* Space between logo and company name */
`;

const CompanyName = styled.div`
  font-size: 1.5rem;
  font-weight: normal; /* Make the company name not bold */
  color: #fff;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Toolbar() {
  return (
    <ToolbarContainer>
      <LogoContainer>
        <Logo src={logo} alt="Ignition Lab Logo" />
        <CompanyName>Ignition_Lab</CompanyName>
      </LogoContainer>
      {/*       <NavLinks>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/community">Community</NavLink>
      </NavLinks> */}
    </ToolbarContainer>
  );
}
