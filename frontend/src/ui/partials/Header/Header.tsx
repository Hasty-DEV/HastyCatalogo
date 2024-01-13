import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { HeaderContainer } from "./Header.styles";
import NavLinks from "../../components/Navlinks/Navlinks";


const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent" role="navigation">
            <Nav className="ml-auto topnav w-100 justify-content-between">
              <NavLinks />
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand as={Link} to="/" className="mr-auto">
            <span>Império Apple</span>
          </Navbar.Brand>
          <div>Icone Carrinho</div>
        </Container>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
