import styled from "styled-components";
import { Search } from "@styled-icons/material-rounded/Search";

export const ButtonInput = styled.button`
  display: flex;
  width: 41.91px;
  height: 40px;
  padding: 11.3px 12.72px 12.7px 12.71px;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  background: rgba(0, 0, 0, 0.01);
  margin-left: 100%;
`;

export const IconSearch = styled(Search)``;

export const DivButton = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #6d6d6d;
  opacity: 0.5;
  transition: transform 0.5s ease;
`;

export const InputSearch = styled.input`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px 24px;

  width: 25%;
  height: 8%;
  border-radius: 30px;
  font-size: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  border: none;
  color: #000;
`;

export const ButtonCloseSarch = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  outline: none;
  padding: 10px;
  cursor: pointer;
  display: flex;
  transition: transform 0.5s ease;

  svg {
    width: 40px;
    height: 40px;
  }

  &:active {
    transform: translateY(-10px);
  }
`;


