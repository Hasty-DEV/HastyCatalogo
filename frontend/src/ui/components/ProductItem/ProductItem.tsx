import React from "react";
import { Col } from "react-bootstrap";
import { DivProducts, ImgPrduct, CategoriaProduct, TextTitle, ButtunProducts } from "./index.styles";

interface ProductItemProps {
  id: string;
  title: string;
  price: number;
  category_id: string;
  thumbnail: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, title, price, category_id, thumbnail }) => (
  <Col key={id} xs={12} sm={6} md={3}>
    <DivProducts>
      <ImgPrduct src={thumbnail} alt={title} />
      <div className="d-flex p-4">
        <CategoriaProduct>{category_id}</CategoriaProduct>
        <p>{price}</p>
      </div>
      <TextTitle>{title}</TextTitle>
      <ButtunProducts>Comprar</ButtunProducts>
    </DivProducts>
  </Col>
);

export default ProductItem;
