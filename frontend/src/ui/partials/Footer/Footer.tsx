import { Container, Row, Col } from "react-bootstrap";
import {
  FooterStyled,
} from "../../styles/Footer/Footer.styles";
import LogoLight from "../../assets/LogoLight.svg";
import SocialLinks from "../../assets/SocialLinks.svg";

const Footer = () => {
  return (
    <FooterStyled>
      <Container fluid>
        <hr />
        <Row>
          <Col
            xs={12}
            sm={4}
            className="d-flex align-items-center justify-content-center"
          >
            <p>
              <img
                src={SocialLinks}
                alt="Logo HastyDEV modo Light"
                width={135}
                height={35}
                className="mt-0"
              />
            </p>
          </Col>
          <Col
            xs={12}
            sm={4}
            className="d-flex align-items-center justify-content-center"
          >
            <p>
              Um Produto da
              <img
                src={LogoLight}
                alt="Logo HastyDEV modo Light"
                width={73}
                height={19}
              />
            </p>
          </Col>
          <Col
            xs={12}
            sm={4}
            className="d-flex align-items-center justify-content-center"
          >
            <p>© 2024 HastyDEV. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </FooterStyled>
  );
};
export default Footer;
