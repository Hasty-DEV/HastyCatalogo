import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { RiMapPinLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { TbClockHour4 } from "react-icons/tb";
import {
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export interface socialMediaLinksProps {
  instagramLink: string;
  facebookLink: string;
  whatsappLink: string;
  twitterLink: string;
  youtubeLink: string;
}

export interface ToggleButtonHeaderProps {
  catalogName: string;
  Address: string;
  AddressLink: string;
  Email: string;
  EmailLink: string;
  OpeningHours: string;
  Phone: string;
  PhoneLink: string;
  socialMediaLinks: socialMediaLinksProps[];
}
const ToggleButtonHeader: React.FC<ToggleButtonHeaderProps> = ({
  catalogName,
  Address,
  AddressLink,
  Email,
  EmailLink,
  OpeningHours,
  Phone,
  PhoneLink,
  socialMediaLinks,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleOnClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <ToggleMenuWrapper showMenu={showMenu}>
        <OpenMenuButton title="" onClick={handleOnClick}>
          <HiMenu />
        </OpenMenuButton>
      </ToggleMenuWrapper>

      
      {showMenu ? (
        <Menu showMenu={showMenu}>
          <MenuContainer>
            <div className="d-flex justify-content-between">
              <h3>{catalogName}</h3>
              <CloseMenuButton title="" onClick={handleOnClick}>
                <IoMdClose />
              </CloseMenuButton>
            </div>
            <InfoWrapper className="mt-4">
              <InfoDiv className="d-flex">
                <RiMapPinLine />
                <a href={AddressLink}>{Address}</a>
              </InfoDiv>
              <InfoDiv className="d-flex">
                <MdEmail />
                <a href={EmailLink}>{Email}</a>
              </InfoDiv>
              <InfoDiv className="d-flex">
                <TbClockHour4 />
                <a>{OpeningHours}</a>
              </InfoDiv>
              <InfoDiv className="d-flex">
                <FaPhoneAlt />
                <a href={PhoneLink}>{Phone}</a>
              </InfoDiv>
            </InfoWrapper>
            <hr />
            <SocialMediaButtonContainer className="d-flex">
              {socialMediaLinks.map((link, index) => (
                <div key={index}>
                  <a href={link.instagramLink} title="Instagram">
                    <SocialMediaButton>
                      <FaInstagram />
                    </SocialMediaButton>
                  </a>
                  <a href={link.facebookLink} title="Facebook">
                    <SocialMediaButton>
                      <FaFacebook />
                    </SocialMediaButton>
                  </a>
                  <a href={link.whatsappLink} title="WhatsApp">
                    <SocialMediaButton>
                      <FaWhatsapp />
                    </SocialMediaButton>
                  </a>
                  <a href={link.twitterLink} title="Twitter">
                    <SocialMediaButton>
                      <FaTwitter />
                    </SocialMediaButton>
                  </a>
                  <a href={link.youtubeLink} title="YouTube">
                    <SocialMediaButton>
                      <FaYoutube />
                    </SocialMediaButton>
                  </a>
                </div>
              ))}
            </SocialMediaButtonContainer>
          </MenuContainer>
        </Menu>
      ) : null}
    </>
  );
};

export default ToggleButtonHeader;

import styled from "styled-components";

const ToggleMenuWrapper = styled.div<{ showMenu: boolean }>`
  position: relative;
  width: 10%;
  ::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
    visibility: ${(props) => (props.showMenu ? "visible" : "hidden")};
    opacity: ${(props) => (props.showMenu ? 1 : 0)};
    transition: opacity 0.6s ease, visibility 0.6s ease;
  }
`;

export const OpenMenuButton = styled.button`
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: transparent;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const Menu = styled.div<{ showMenu: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: white;
  height: 100vh;
  padding: 20px;
  width: 35vw;
  opacity: ${(props) => (props.showMenu ? 1 : 0)};
  visibility: ${(props) => (props.showMenu ? "visible" : "hidden")};
  transition: opacity 0.6s ease, visibility 0.6s ease;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  h3 {
    margin-top: 5%;
    font-weight: bold;
    color: #333;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const CloseMenuButton = styled.button`
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: transparent;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const InfoDiv = styled.div`
  align-items: center;
  gap: 10px;
  height: 100%;
  width: 100%;

  svg {
    width: 30px;
    height: 30px;
  }

  a {
    color: #000;
    outline: none;
    text-decoration: none;
    flex: 1;
    overflow-wrap: break-word;
    word-break: break-all;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

`;

export const SocialMediaButtonContainer = styled.div`
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px 0px 10px;
  }
`;

export const SocialMediaButton = styled.button`
    border: none;
    background: transparent;
    outline: none;
    border: 1px solid #000;
    border-radius: 50%;
    padding: 10px;
    transition: all .5s;

    &:hover {
        background: #ddd;
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;
