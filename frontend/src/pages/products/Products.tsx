import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProductItem from "../../ui/components/ProductItem/ProductItem";
import {
  ButtonCloseSarch,
  ButtonInput,
  DivButton,
  IconSearch,
  InputSearch,
} from "../../ui/styles/Search/Search.style";
import { IoMdClose } from "react-icons/io";
import { Select } from "../../ui/styles/SearchCategory/SearchCategory.style";

interface Produto {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  category_id: string;
}

interface Categoria {
  id: string;
  name: string;
}

const Produtos: React.FC = () => {
  const [dados, setDados] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<
    string | undefined
  >();
  const [exibirPesquisa, setExibirPesquisa] = useState(false);
  const [valorInput, setValorInput] = useState<string>("");

  const buscarProdutosPorCategoria = async (categoria: string | undefined) => {
    try {
      const url = categoria
        ? `https://api.mercadolibre.com/sites/MLB/search?q=celular&category=${categoria}`
        : "https://api.mercadolibre.com/sites/MLB/search?q=celular";

      const resposta = await fetch(url);
      const dados: { results: Produto[] } = await resposta.json();
      setDados(dados.results);
      console.log(dados.results)
    } catch (erro) {
      console.error("Erro ao buscar produtos:", erro);
    }
  };

  const buscarCategorias = async () => {
    try {
      const resposta = await fetch(
        "https://api.mercadolibre.com/sites/MLB/categories"
      );
      const dados: Categoria[] = await resposta.json();
      setCategorias(dados);
    } catch (erro) {
      console.error("Erro ao buscar dados da API:", erro);
    }
  };
  useEffect(() => {
    buscarProdutosPorCategoria(categoriaSelecionada);
  }, [categoriaSelecionada]);

  useEffect(() => {
    buscarCategorias();
    buscarProdutosPorCategoria(categoriaSelecionada);
  }, [categoriaSelecionada]);

  const lidarComMudancaCategoria = (
    evento: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const categoriaSelecionada = evento.target.value;
    setCategoriaSelecionada(categoriaSelecionada);
    buscarProdutosPorCategoria(categoriaSelecionada);
  };

  const lidarComExibicaoPesquisa = () => {
    setExibirPesquisa(!exibirPesquisa);
  };

  const lidarComFecharPesquisa = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setExibirPesquisa(false);
  };

  const lidarComMudancaInput = (
    evento: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValorInput(evento.target.value);
  };

  useEffect(() => {
    const buscarProduto = async () => {
      try {
        const resposta = await fetch(
          `https://api.mercadolibre.com/sites/MLB/search?q=${valorInput}`
        );
        const dados = await resposta.json();
        const produtos = dados.results || [];
        setDados(produtos);
      } catch (erro) {
        console.error("Erro ao buscar dados da API:", erro);
      }
    };

    buscarProduto();
  }, [valorInput]);

  return (
    <Container fluid>
      <Container className="p-3 d-flex">
        <Select
          value={categoriaSelecionada}
          onChange={lidarComMudancaCategoria}
        >
          <option value="">Todas as categorias</option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.name}
            </option>
          ))}
        </Select>

        {exibirPesquisa ? (
          <DivButton className="position-fixed">
            <ButtonCloseSarch
              title="Fechar Pesquisa"
              onClick={lidarComFecharPesquisa}
            >
              <IoMdClose />
            </ButtonCloseSarch>
            <InputSearch
              placeholder="Pesquisar..."
              value={valorInput}
              onChange={lidarComMudancaInput}
            />
          </DivButton>
        ) : (
          <ButtonInput onClick={lidarComExibicaoPesquisa}>
            <IconSearch />
          </ButtonInput>
        )}
      </Container>

      <Row>
        {dados.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            thumbnail={item.thumbnail}
            category_id={item.category_id}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Produtos;
