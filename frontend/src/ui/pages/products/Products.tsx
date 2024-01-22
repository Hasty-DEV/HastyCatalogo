// src/pages/products/Products.tsx
import React, { useState, useEffect } from "react";
import { Container, Row} from "react-bootstrap";
import ProductItem from "../../components/ProductItem/ProductItem";



interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const Products: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);

  const ListDataProducts = async (): Promise<void> => {
    try {
      const res = await fetch(`${URL}/products`);
      const response: Product[] = await res.json();
      setData(response);
    } catch (error) {
      console.error("Erro ao buscar dados do produto:", error);
    }
  };

  useEffect(() => {
    ListDataProducts();
  }, []);

  return (
    <Container>
      <Row>
        {data.map((item) => (
          <ProductItem key={item.id} id={item.id} title={item.title} price={item.price} category={item.category} image={item.image} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
