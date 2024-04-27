import LogoHeader from "../../components/LogoHeader/LogoHeader";
import ShoppingCarButton from "../../components/ShoppingCarButton/ShoppingCarButton";
import ToggleButtonHeader from "../../components/ToggleButtonHeader/ToggleButtonHeader";
import { HeaderContainer } from "../../styles/Header/Header.styles";

const socialMediaLinks = [
  {
    instagramLink: "",
    facebookLink: "",
    whatsappLink: "",
    twitterLink: "",
    youtubeLink: ""
  },
];

const Header = () => {
  return (
    <HeaderContainer className="d-flex justify-content-between align-items-center">
      <ToggleButtonHeader
        catalogName="Império Apple"
        Address="Apenas On-line"
        AddressLink=""
        Email="atendimento@imperioapple.com.br"
        EmailLink={`mailto:atendimento@imperioapple.com.br`}
        OpeningHours="Atendemos 24 horas por dia"
        Phone="11 94711-4814"
        PhoneLink={`tel:+5511947114814`}
        socialMediaLinks={socialMediaLinks}
      />
      <LogoHeader />
      <ShoppingCarButton id={""} title={""} price={0} thumbnail={""} category_id={""} amount={0}/>
    </HeaderContainer>
  );
};

export default Header;
