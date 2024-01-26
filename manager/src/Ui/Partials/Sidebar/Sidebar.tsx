import * as S from "../../Styles/Sidebar/Sidebar.styles";
import useAuth from "../../../Data/Hooks/useAuth";
import { FiHome, FiExternalLink } from "react-icons/fi";
import Button from "../../../Ui/Components/Button/Button";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Sidebar: React.FC = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <S.SidebarContainer>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="d-flex flex-column w-100 h-100"
      >
        <div className="d-flex flex-column">
          <Navbar.Brand
            as={Link}
            to="/home"
            className="d-flex align-items-center justify-content-start"
          >
            <FiHome /> <span className="d-none d-md-inline px-2">Home</span>
          </Navbar.Brand>
          <Navbar.Brand
            as={Link}
            to="/outra-rota"
            className="d-flex align-items-center justify-content-start"
          >
            <FiExternalLink />
            <span className="d-none d-md-inline px-2">Outra Rota</span>
          </Navbar.Brand>
          <Nav className="mr-auto" activeKey={location.pathname}></Nav>
        </div>
        <div>
          <Button
            Text="Sair"
            onClick={() => [signout(), navigate("/")]}
          />
        </div>
      </Navbar>
    </S.SidebarContainer>
  );
};

export default Sidebar;
