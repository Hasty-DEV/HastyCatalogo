// src/pages/products/Products.tsx
import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import ProductItem from "../../ui/components/ProductItem/ProductItem";
import { URL } from "../../api/config";

import SearchCategory from "../../ui/components/SearchCategory/SearchCategory";
import Search from "../../ui/components/Search/Search";


interface Produto {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  category_id: string;
}

const Produtos: React.FC = () => {
  const [dados, setDados] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);

  const listarProdutos = async (): Promise<void> => {
    try {
      const resposta = await fetch(`${URL}/search?q=celular`);
      const { results }: { results: Produto[] } = await resposta.json();
      setDados(results);
    } catch (erro) {
      console.error("Erro ao buscar dados do produto:", erro);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    listarProdutos();
  }, []);

  return (

   

    <Container>
      <div className="m-4 ">
      <SearchCategory />
       <Search />
      </div>
       
      {carregando ? (
        <Row className="justify-content-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Carregando...</span>
          </Spinner>
        </Row>
      ) : (
        <Row>
          {dados.map((item) => (
            <ProductItem key={item.id} id={item.id} title={item.title} price={item.price} thumbnail={item.thumbnail} category_id={item.category_id} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Produtos;

