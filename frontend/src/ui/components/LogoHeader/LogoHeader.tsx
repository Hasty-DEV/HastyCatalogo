import Logo from "../../assets/Logo.svg"
const LogoHeader: React.FC = () => {
  return (
      <StyledLogo src={Logo} alt=""/>
  );
}

export default LogoHeader;

import styled from "styled-components";

export const StyledLogo = styled.img`
  max-width: 10vh;
  width: 100%; 
  height: auto;


`;