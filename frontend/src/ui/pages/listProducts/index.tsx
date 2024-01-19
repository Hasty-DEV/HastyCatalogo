import { Col, Container, Row } from "react-bootstrap";
import { URL } from "../../../api/config"; 

import {useEffect, useState} from "react"
import { ButtunProducts, CategoriaProduct, DivProducts, ImgPrduct, TextTitle } from "./index.styles";



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


  useEffect(()=>{
    ListDataProducts();
  },[]);

  return (
    <Container>
    <Row>
      {data.map((item) => (
        <Col key={item.id} xs={12} sm={6} md={3} >

          <DivProducts >
            <ImgPrduct src={item.image} alt={item.title} />
            <div className="d-flex p-4" >
                {/* criar logica de categoria */}
                <CategoriaProduct>teste</CategoriaProduct>
            <p>{item.price}</p>
            </div>
            <TextTitle>{item.title}</TextTitle>
            <ButtunProducts>Comprar</ButtunProducts>
            
          </DivProducts>
        </Col>
      ))}
    </Row>
  </Container>
  );
};

export default Products;
