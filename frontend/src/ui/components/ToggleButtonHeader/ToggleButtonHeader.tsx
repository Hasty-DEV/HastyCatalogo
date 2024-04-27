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
import { CloseMenuButton, InfoDiv, InfoWrapper, Menu, MenuContainer, OpenMenuButton, SocialMediaButton, SocialMediaButtonContainer, ToggleMenuWrapper } from "../../styles/ToggleButtonHeader/ToggleButtonHeader.style";
import { ToggleButtonHeaderProps } from "../../../data/@types/ToggleButtonHeader/ToggleButtonHeader.type";

const ToggleButtonHeader = ({
  catalogName,
  Address,
  AddressLink,
  Email,
  EmailLink,
  OpeningHours,
  Phone,
  PhoneLink,
  socialMediaLinks,
}: ToggleButtonHeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleOnClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <ToggleMenuWrapper showMenu={showMenu}>
        <OpenMenuButton title="" onClick={handleOnClick} className="border-0 bg-transparent">
          <HiMenu />
        </OpenMenuButton>
      </ToggleMenuWrapper>
      {showMenu && (
        <Menu showMenu={showMenu} className="position-absolute top-0 ">
          <MenuContainer className="d-flex flex-column h-100 w-100">
            <div className="d-flex justify-content-between">
              <h3 className="fw-bold text-center text-uppercase">{catalogName}</h3>
              <CloseMenuButton title="" onClick={handleOnClick} className="border-0 bg-transparent">
                <IoMdClose />
              </CloseMenuButton>
            </div>
            <InfoWrapper className="mt-4 d-flex flex-column">
              <InfoDiv className="d-flex align-items-center h-100 w-100">
                <RiMapPinLine />
                <a href={AddressLink} className="text-decoration-none">{Address}</a>
              </InfoDiv>
              <InfoDiv className="d-flex align-items-center h-100 w-100">
                <MdEmail />
                <a href={EmailLink} className="text-decoration-none">{Email}</a>
              </InfoDiv>
              <InfoDiv className="d-flex align-items-center h-100 w-100">
                <TbClockHour4 />
                <a className="text-decoration-none">{OpeningHours}</a>
              </InfoDiv>
              <InfoDiv className="d-flex align-items-center h-100 w-100">
                <FaPhoneAlt />
                <a href={PhoneLink} className="text-decoration-none">{Phone}</a>
              </InfoDiv>
            </InfoWrapper>
            <hr />
            <SocialMediaButtonContainer className="d-flex">
              {socialMediaLinks.map((link, index) => (
                <div key={index} className="w-100 d-flex justify-content-between ">
                  <a href={link.instagramLink} title="Instagram">
                    <SocialMediaButton className="border-0 bg-transparent">
                      <FaInstagram />
                    </SocialMediaButton>
                  </a>
                  <a href={link.facebookLink} title="Facebook">
                    <SocialMediaButton className="border-0 bg-transparent">
                      <FaFacebook />
                    </SocialMediaButton>
                  </a>
                  <a href={link.whatsappLink} title="WhatsApp">
                    <SocialMediaButton className="border-0 bg-transparent">
                      <FaWhatsapp />
                    </SocialMediaButton>
                  </a>
                  <a href={link.twitterLink} title="Twitter">
                    <SocialMediaButton className="border-0 bg-transparent">
                      <FaTwitter />
                    </SocialMediaButton>
                  </a>
                  <a href={link.youtubeLink} title="YouTube">
                    <SocialMediaButton className="border-0 bg-transparent">
                      <FaYoutube />
                    </SocialMediaButton>
                  </a>
                </div>
              ))}
            </SocialMediaButtonContainer>
          </MenuContainer>
        </Menu>
      )}
    </>
  );
};

export default ToggleButtonHeader;

