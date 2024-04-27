import Logo from "../../assets/Logo.svg"
import { StyledLogo } from "../../styles/LogoHeader/LogoHeader.style";

const LogoHeader = () => {
  return (
      <StyledLogo src={Logo} alt="" className="w-100 img-fluid"/>
  );
}

export default LogoHeader;