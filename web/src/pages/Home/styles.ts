import styled from "styled-components";
import { FiLogIn, FiSearch } from "react-icons/all";
import background from "../../assets/home-background.svg";
import { sm, md, lg, xl } from "../../styles/global";
import { Link } from "react-router-dom";
import { Form as FormRocket, Input as InputRocket } from "@rocketseat/unform";
export const Container = styled.div`
  min-height: 100vh;
  /* background-position-x: right; */

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${background}) no-repeat 200px bottom;
    background-size: 100vw 75vh;
    width: 100%;
    height: 100%;
    z-index: -1;
    @media (max-width: ${sm}px) {
      top: 20px;
      background-position: center;
      background-size: cover;
      opacity: 0.2;
    }
  }
`;
export const Contente = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: ${sm}px) {
    padding: 0 15px;
  }
`;
export const Title = styled.h1`
  margin: 0px;
  font-size: 50px;
  color: var(--title-color);
  padding-top: 100px;
  @media (max-width: ${sm}px) {
    font-size: 30px;
    padding-top: 30px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 48px 0 0;
  width: 100%;

  @media (max-width: ${sm}px) {
    img {
      margin-bottom: 20px;
      height: 30px;
    }
    flex-direction: column;
    margin: 30px 0;
  }
`;
export const Main = styled.div`
  flex: 1;
  width: 51%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 24px;
    margin-top: 24px;
    line-height: 38px;
    color: var(--text-color);
    width: 86%;
  }
  @media (max-width: ${md}px) {
    width: 80%;
  }
  @media (max-width: ${sm}px) {
    align-items: center;
    width: 100%;
    text-align: center;
    p {
      font-size: 15px;
      width: 100%;
    }
  }
`;
export const NewPoint = styled(Link)`
  align-items: center;
  padding: 10px;
  color: #322153;
  display: flex;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: ${sm}px) {
    strong {
      font-size: 10px;
    }
    bottom: 0;
    position: absolute;
  }
`;
export const IconNewPoint = styled(FiLogIn)`
  color: #2fb86e;
  font-size: 22px;
  margin-right: 15px;
  @media (max-width: ${sm}px) {
    font-size: 16px;
    margin-right: 5px;
  }
`;
export const SearchPoint = styled.button`
  padding: 0;
  border-radius: 8px;
  width: 321px;
  height: 60px;
  background: var(--primary-color);
  color: white;
  margin: 20px 0px;
  align-items: center;
  display: flex;
  &:hover {
    opacity: 0.8;
  }
  &:hover {
    background: #2fb86e;
  }
  @media (max-width: ${sm}px) {
    width: 85%;
    height: 40px;
    position: relative;
  }
`;
export const IconSearchPoint = styled(FiSearch)`
  color: white;
  width: 60px;
  padding: 0px 18px;
  height: 100%;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 8px 0px 0px 8px;
  margin-right: 35px;
  @media (max-width: ${sm}px) {
    width: 40px;
    padding: 0px 11px;
    margin-right: 10px;
  }
`;
export const SearchPoints = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  background: #0e0a14f2;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const ContainerOut = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1001;
  position: absolute;
  cursor: pointer;
`;
export const ContainerSearchPoints = styled.div`
  width: 30%;
  margin: auto;
  z-index: 1002;
  span {
    color: #ffffff;
    display: block;
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  position: relative;
  @media (max-width: ${md}px) {
    width: 45%;
  }
  @media (max-width: ${sm}px) {
    width: 85%;
    span {
      font-size: 28px;
    }
  }
`;
export const Form = styled(FormRocket)``;
export const Input = styled(InputRocket)`
  border: 0px;
  padding: 14px 10px;
  border-radius: 6px;
  height: 50px;
  color: #636363;
  background: #f0f0f5;
  margin: 5px 0px;
  width: 100%;
`;
export const ButtonSubmit = styled.button`
  padding: 0;
  font-size: 15px;
  border-radius: 6px;
  width: 100%;
  font-weight: bold;
  height: 50px;
  background: var(--primary-color);
  color: white;
  margin: 4px 0px 20px auto;
  &:hover {
    background: #2fb86e;
  }
`;
export const ContainerInput = styled.div`
  flex-direction: column;
  display: flex;
  span {
    font-size: 12px;
    color: #fe2e2e;
    margin-top: 5px;
    padding-left: 10px;
  }
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
  max-height: 170px;
`;
export const Item = styled.div`
  border: 0px;
  padding: 14px 10px;
  border-radius: 0px 0px 6px 6px;
  height: 50px;
  color: #a0a0b2;
  background: #f0f0f5;
  font-size: 14px;
  border-top: 1px solid #a0a0b242;
  margin: -9px 0px 5px;
  text-align: start;
  width: 100%;
  cursor: pointer;
  &:hover {
    background: #eae9e9;
  }
  span {
    color: #6c6c80;
    padding: 0;
    display: inline-block;
    margin: 0;
    font-size: 14px;
  }
`;
