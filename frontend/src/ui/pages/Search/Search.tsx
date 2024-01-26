import {
  ButtonCloseSarch,
  ButtonInput,
  
  DivButton,
  IconSearch,
  InputSearch,
} from "./Search.Styles";

import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Container, Row } from "react-bootstrap";
 
interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  category_id: string;
}
const Search: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [valueInput, setvalueInput] = useState<string>(``);
  const [product, setProduct] = useState<Product[]>([]);

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleCloseShowSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setShowSearch(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setvalueInput(event.target.value);
  };

  useEffect(() => {
    const searchProduct = async () => {
      try {
        const response = await fetch(
          `https://api.mercadolibre.com/sites/MLB/search?q=${valueInput}`
        );
        const data = await response.json();

        const products = data.results || [];
        setProduct(products);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    searchProduct();
  }, [valueInput]);

  return (
   <Container>
    
        {showSearch ? (
          <DivButton>
            <ButtonCloseSarch
              title="Fechar Carrinho"
              onClick={handleCloseShowSearch}
            >
              <IoMdClose />
            </ButtonCloseSarch>
            <InputSearch
              placeholder="Pesquise..."
              value={valueInput}
              onChange={handleInputChange}
            />
          </DivButton>
        ) : (
          <ButtonInput onClick={handleShowSearch}>
            <IconSearch />
          </ButtonInput>
        )}
      

      
      <Row>
        {product.map((item) => (
          <ProductItem key={item.id} id={item.id} title={item.title} price={item.price} thumbnail={item.thumbnail} category_id={item.category_id} />
        ))}
      </Row>
    
      
      </Container>
  );
};

export default Search;
