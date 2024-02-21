import React from "react";

import {
  ProductItemContainer,
  DivProducts,
  ImgPrduct,
  CategoriaProduct,
  TextTitle,
  ButtunProducts,
} from "./index.styles";

interface ProductItemProps {
  id: string;
  title: string;
  price: number;
  category_id: string;
  thumbnail: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  id,
  title,
  price,
  category_id,
  thumbnail,
}) => (
  <ProductItemContainer key={id} xs={12} sm={6} md={3} xl={2}>
    <div className="d-flex align-items-center justify-content-center h-100 w-100">
      <DivProducts>
        <ImgPrduct src={thumbnail} alt={title} className="mx-auto d-block" />
        <div className="d-flex p-4 d-flex align-items-center justify-content-center">
          <CategoriaProduct>{category_id}</CategoriaProduct>
          <p className="price">R$ {price}</p>
        </div>
        <TextTitle>{title}</TextTitle>
        <ButtunProducts>Comprar</ButtunProducts>
      </DivProducts>
    </div>
  </ProductItemContainer>
);

export default ProductItem;