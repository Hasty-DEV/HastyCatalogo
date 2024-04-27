import { Link } from "react-router-dom";
import { StyledNavLink, StyledNavLinksContainer } from "../../styles/Navlinks/NavLinks.style";
import { Nav } from "react-bootstrap";

const NavLinks = () => {
  return (
    <StyledNavLinksContainer className="d-flex align-items-center gap-4">
      <Nav.Item>
        <StyledNavLink as={Link} to="/" className="text-decoration-none">
          Home
        </StyledNavLink>
      </Nav.Item>
      <Nav.Item>
        <StyledNavLink as={Link} to="/about" className="text-decoration-none">
          Sobre Nós
        </StyledNavLink>
      </Nav.Item>
      <Nav.Item>
        <StyledNavLink as={Link} to="/contact" className="text-decoration-none">
          Contate-nos
        </StyledNavLink>
      </Nav.Item>
      <Nav.Item>
        <StyledNavLink as={Link} to="/project" className="text-decoration-none">
          O Projeto
        </StyledNavLink>
      </Nav.Item>
    </StyledNavLinksContainer>
  );
};

export default NavLinks;
