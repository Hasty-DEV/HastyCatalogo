import { socialMediaLinksProps } from "../SocialMediaLinks/SocialMediaLinks.type";

export type ToggleButtonHeaderProps = {
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