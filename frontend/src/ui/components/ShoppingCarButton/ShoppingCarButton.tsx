import { useState } from "react";
import { Col } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { ProductType } from "../../../data/@types/Product/Product.type";
import { ButtonShoppingCar, ShoppingCar, ShoppingCarContainer, ButtonAndTitleContainer } from "../../styles/ShoppingCarButton/ShoppingCarButton.style";

const ShoppingCarButton = ({ id, thumbnail, title, price, amount }: ProductType) => {
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
      <ButtonShoppingCar title="Carrinho" onClick={handleOnClick} className="bg-transparent border-0 pointer-event">
        <FaShoppingCart />
      </ButtonShoppingCar>
      {showCar && (
        <ShoppingCar showCar={showCar} className="position-fixed top-0 ">
          <ShoppingCarContainer className="d-flex align-items-center justify-content-center flex-column">
            <ButtonAndTitleContainer className="d-flex justify-content-around w-100">
              <ButtonShoppingCar
                title="Fechar Carrinho"
                onClick={(e) => handleCloseButtonClick(e)}
              >
                <IoMdClose />
              </ButtonShoppingCar>
              <div className="d-flex align-items-start justify-content-center">
                <h3 className="fw-bold text-center text-uppercase ">Carrinho</h3>
              </div>
              <div></div>
              <div></div>

            </ButtonAndTitleContainer>
            <hr className="w-50" />
            <Col key={id}>
              <div>
                <div>
                  <ButtonShoppingCar
                    title="Fechar Carrinho"
                    onClick={(e) => handleCloseButtonClick(e)}
                  >
                    <IoMdClose />
                  </ButtonShoppingCar>
                </div>
                <img src={thumbnail} alt={title} />
                <h4>{title}</h4>
                <h4>{amount}</h4>
                <h4>{price}</h4>
              </div>
            </Col>
          </ShoppingCarContainer>
        </ShoppingCar>
      )}
    </>
  );
};

export default ShoppingCarButton;