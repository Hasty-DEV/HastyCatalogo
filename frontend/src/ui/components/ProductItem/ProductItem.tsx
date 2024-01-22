// ProductItem.tsx
import React from "react";
import { Col } from "react-bootstrap";
import { DivProducts, ImgPrduct, CategoriaProduct, TextTitle, ButtunProducts } from "./index.styles";

interface ProductItemProps {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, title, price, category, image }) => (
  <Col key={id} xs={12} sm={6} md={3}>
    <DivProducts>
      <ImgPrduct src={image} alt={title} />
      <div className="d-flex p-4">
        <CategoriaProduct>{category}</CategoriaProduct>
        <p>{price}</p>
      </div>
      <TextTitle>{title}</TextTitle>
      <ButtunProducts>Comprar</ButtunProducts>
    </DivProducts>
  </Col>
);

export default ProductItem;
