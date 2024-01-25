import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 20vw;
  background-color: #333;
  color: #fff;
  height: 100vh;
`;

export const SidebarLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #00bcd4;
  }

  &.active {
    font-weight: bold;
    color: #00bcd4;
  }
`;
