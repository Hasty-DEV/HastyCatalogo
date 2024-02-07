import { useState } from "react";
import { Col } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


interface Produto {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  category_id: string;
  amount: number;
}
const ShoppingCarButton: React.FC<Produto>= ({ id,thumbnail, title, price,amount }) => {
  const [showCar, setShowCar] = useState(false);

  const handleOnClick = () => {
    setShowCar(!showCar);
  };

  const handleCloseButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowCar(false);
  };

  return (
    <>
      <ButtonShoppingCar title="Carrinho" onClick={handleOnClick}>
        <FaShoppingCart />
      </ButtonShoppingCar>
      {showCar ? (
        <ShoppingCar showCar={showCar}>
          <ShoppingCarContainer className="d-flex align-items-center justify-content-center flex-column">
            <ButtonAndTitleContainer className="d-flex">
              <ButtonShoppingCar
                title="Fechar Carrinho"
                onClick={(e) => handleCloseButtonClick(e)}
              >
                <IoMdClose />
              </ButtonShoppingCar>
              <div className="d-flex align-items-start justify-content-center">
                <h3>Carrinho</h3>
              </div>
              <div></div>
              <div></div>
              
            </ButtonAndTitleContainer>
            <hr />

            <Col key={id}>
            <div>
              <div>
              <ButtonShoppingCar
                title="Fechar Carrinho"
                //criar outra função
                onClick={(e) => handleCloseButtonClick(e)}
              >
                <IoMdClose />
              </ButtonShoppingCar>
              </div>
              <img src={thumbnail} alt={title}  />
              <h1>{title}</h1>
              <h1>{amount}</h1>
              <h1>{price}</h1>

            </div>
            </Col>
            

          </ShoppingCarContainer>
        </ShoppingCar>
      ) : null}
    </>
  );
};

export default ShoppingCarButton;

import styled from "styled-components";

export const ButtonShoppingCar = styled.button`
  background: transparent;
  border: none;
  outline: none;
  padding: 10px;
  cursor: pointer;

  div {
    display: inline-block;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ShoppingCar = styled.div<{ showCar: boolean }>`
  position: fixed;
  top: 0;
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

  hr {
    width: 50%;
  }
`;

export const ShoppingCarContainer = styled.div`
  display: flex;

  h3 {
    margin-top: 5%;
    font-weight: bold;
    color: #333;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const ButtonAndTitleContainer = styled.div`
  justify-content: space-around;
  width: 100%;
`;
