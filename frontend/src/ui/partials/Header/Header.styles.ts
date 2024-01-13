import styled from "styled-components";

export const HeaderContainer = styled.header``;

export const ButtonsHeader = styled.div`
  hr {
    display: none;
  }

  @media (max-width: 991px) {
    flex-direction: column;
    hr {
      display: block;
    }
  }
`;
