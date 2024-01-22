// src/pages/SearchCategory/Search.tsx
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Select } from "./search.styles";
import ProductItem from "../../components/ProductItem/ProductItem";


interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const Search: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const data: string[] = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  const fetchProductsByCategory = async (category: string | undefined) => {
    try {
      let url = "https://fakestoreapi.com/products";
      if (category) {
        url = `https://fakestoreapi.com/products/category/${category}`;
      }

      const response = await fetch(url);
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    fetchProductsByCategory(selectedCategory);
  };

  useEffect(() => {
    fetchProductsByCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <Container>
      <Row>
        <Select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Todas as categorias</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </Row>
      <Row>
        {products.map((item) => (
          <ProductItem key={item.id} id={item.id} title={item.title} price={item.price} category={item.category} image={item.image} />
        ))}
      </Row>
    </Container>
  );
};

export default Search;
