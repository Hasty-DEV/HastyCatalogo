import styled from "styled-components";

export const ImgPrduct = styled.img`
  width: 70%;
  height: 70%;
  flex-shrink: 0;
  margin: 10%;
  transition: transform 0.3s ease; 
  
  &:hover {
    transform: scale(1.1); 
  }
`;
export const DivProducts = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20%;
  background: #fff;
  border-radius: 10px;
  cursor: pointer; 
  transition: box-shadow 0.3s ease, transform 0.3s ease; 
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  &:hover {
    
    transform: scale(1.1); 
  }

  &:active {
    transform: scale(0.98); 
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); 
  }
`;
export const TextTitle = styled.p`
  color: #555;
  font-family: Lato;
  font-size: 14.4px;
  font-style: normal;
  font-weight: 400;
  word-wrap: break-word;
  margin: 20px;
  &:hover {
    opacity: 0.8;
  }
`;

export const CategoriaProduct = styled.h1`
  display: flex;
  width: 50%;
  height: 13px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  font-family: Lato;
  font-size: 10.8px;
  font-style: normal;
  font-weight: 400;
  line-height: 12.96px;
  letter-spacing: 0.54px;
  text-transform: uppercase;
  &:hover {
    opacity: 0.8;
  }
`;

export const ButtunProducts = styled.button`
  display: flex;
  width: 101.66px;
  height: 29.64px;
  padding: 8px 20.194px 8.64px 20.56px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 90px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: #F60303;
  margin: 30px 0 30px 15px;
  transition: background-color 0.3s ease; 

  &:hover {
    opacity: 0.8;
    transform: scale(1.1); 
  }
`;
