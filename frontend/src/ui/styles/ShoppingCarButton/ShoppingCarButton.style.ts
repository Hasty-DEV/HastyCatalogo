import styled from "styled-components";


export const ButtonShoppingCar = styled.button`
  outline: none;
  padding: 10px;
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ShoppingCar = styled.div<{ showCar: boolean }>`
  right: 0;
  z-index: 2;
  background-color: white;
  height: 100vh;
  padding: 20px;
  width: 40vw;
  opacity: ${({ showCar }) => (showCar ? 1 : 0)};
  visibility: ${({ showCar }) => (showCar ? "visible" : "hidden")};
  transition: opacity 0.6s ease, visibility 0.6s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow-y: auto;
`;

export const ShoppingCarContainer = styled.div`
  h3 {
    margin-top: 5%;
    color: #333;
  }
`;

export const ButtonAndTitleContainer = styled.div``;
