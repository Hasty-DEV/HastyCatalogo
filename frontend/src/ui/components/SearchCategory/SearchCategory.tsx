import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Select } from "../../styles/SearchCategory/SearchCategory.style";
import ProductItem from "../ProductItem/ProductItem";
import { ProductType } from "../../../data/@types/Product/Product.type";
import { Category } from "../../../data/@types/Category/Category.type";

const SearchCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.mercadolibre.com/sites/MLB/categories");
        const data: Category[] = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  const fetchProductsByCategory = async (category: string | undefined) => {
    try {
      let url = "https://api.mercadolibre.com/sites/MLB/search?q=";
      if (category) {
        url = `https://api.mercadolibre.com/sites/MLB/search?q=celular&category=${category}`;
      }

      const response = await fetch(url);
      const data: { results: ProductType[] } = await response.json();
      setProducts(data.results);
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
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </Row> 
      <Row>
        {products.map((item) => (
          <ProductItem key={item.id} id={item.id} title={item.title} price={item.price} thumbnail={item.thumbnail} category_id={item.category_id} />
        ))}
      </Row>
    </Container>
  );
};

export default SearchCategory;
