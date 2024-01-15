import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const ShoppingCarButton: React.FC = () => {
  const [showCar, setShowCar] = useState(false);

  const handleOnClick = () => {
    setShowCar(!showCar);
  }

  return (
    <>
      <ButtonShoppingCar title="Carrinho" onClick={handleOnClick}>
        <FaShoppingCart />
      </ButtonShoppingCar>
      {showCar ? (
        <ShoppingCar showCar={showCar}>
          <ShoppingCarContainer>
            <ButtonShoppingCar title="Carrinho" onClick={handleOnClick}>
              <IoMdClose />
            </ButtonShoppingCar>
            <h3>Carrinho</h3>
          </ShoppingCarContainer>
        </ShoppingCar>
      ) : null}
    </>
  );
};

export default ShoppingCarButton;

import styled from "styled-components";

export const ButtonShoppingCar = styled.button`
  border: none;
  outline: none;
  background: transparent;
  padding: 10px;
  width: 10%;
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ShoppingCar = styled.div<{ showCar: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  background-color: white;
  height: 100vh;
  padding: 20px;
  width: 35vw;
  opacity: ${(props) => (props.showCar ? 1 : 0)};
  visibility: ${(props) => (props.showCar ? "visible" : "hidden")};
  transition: opacity 0.6s ease, visibility 0.6s ease;
`;

export const ShoppingCarContainer = styled.div`
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