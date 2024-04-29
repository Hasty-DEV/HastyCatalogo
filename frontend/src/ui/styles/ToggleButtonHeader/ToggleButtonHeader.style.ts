import styled from "styled-components";

export const ToggleMenuWrapper = styled.div<{ showMenu: boolean }>`
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
  border-radius: 5px;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const Menu = styled.div<{ showMenu: boolean }>`
  left: 0;
  z-index: 2;
  height: 100vh;
  padding: 20px;
  width: 35vw;
  background: #fff;
  opacity: ${(props) => (props.showMenu ? 1 : 0)};
  visibility: ${(props) => (props.showMenu ? "visible" : "hidden")};
  transition: opacity 0.6s ease, visibility 0.6s ease;
`;

export const MenuContainer = styled.div`
  h3 {
    margin-top: 5%;
    color: #333;
  }
`;

export const CloseMenuButton = styled.button`
  padding: 5px;
  outline: none;
  border-radius: 5px;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const InfoDiv = styled.div`
  gap: 10px;

  svg {
    width: 30px;
    height: 30px;
  }

  a {
    color: #000;
    outline: none;
    flex: 1;
    overflow-wrap: break-word;
    word-break: break-all;
  }
`;

export const InfoWrapper = styled.div`
  gap: 30px;

`;

export const SocialMediaButtonContainer = styled.div`
  div {
    padding: 0px 10px 0px 10px;
  }
`;

export const SocialMediaButton = styled.button`
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
