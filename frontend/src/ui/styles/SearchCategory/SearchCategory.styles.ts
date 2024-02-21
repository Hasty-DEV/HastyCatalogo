import styled from "styled-components";

export const Select = styled.select`
  display: flex;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.01);
  border-color: rgba(0, 0, 0, 0.09);
  height: 2.507em;
  color: currentColor;
  width: 100%;
  margin-right: 5%;
  background: #fff;
  padding-left: 10px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;
