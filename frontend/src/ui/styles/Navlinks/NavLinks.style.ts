import { Nav } from "react-bootstrap";
import styled from "styled-components";

export const StyledNavLink = styled(Nav.Link)`
  transition: 0.5s all;
`;

export const StyledNavLinksContainer = styled.div`
  margin-left: 100px;

  @media (max-width: 991px) {
    margin-left: 0;
    flex-direction: column;

    .nav-item {
      text-align: center;
      border-bottom: 1px solid ;

      &:hover {
        border-bottom: 1px solid;
      }
    }
  }
`;
