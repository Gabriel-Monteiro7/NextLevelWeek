import styled from "styled-components";
import { FiArrowLeft, FiCheckCircle } from "react-icons/all";
import { sm, md } from "../../styles/global";
import { Link } from "react-router-dom";
import {
  Form as FormRocket,
  Input as InputRocket,
  Select as SelectRocket,
} from "@rocketseat/unform";
import { fields, schema } from "./data";

export const Container = styled.div`
  min-height: 100vh;
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
  font-size: 30px;
  color: var(--title-color);
  width: 50%;
  @media (max-width: ${sm}px) {
    font-size: 20px;
    width: 100%;
  }
`;
export const Label = styled.h2`
  margin: 0px;
  color: var(--title-color);
  width: 50%;
  padding-bottom: 10px;
  @media (max-width: ${sm}px) {
    width: 100%;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  margin: 60px auto;
  width: 68%;
  border-radius: 8px;
  padding: 55px;
  @media (max-width: ${md}px) {
    width: 90%;
  }
  @media (max-width: ${sm}px) {
    padding: 20px;
  }
`;
export const GoBack = styled(Link)`
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
  }
`;
export const IconGoBack = styled(FiArrowLeft)`
  color: #2fb86e;
  font-size: 22px;
  margin-right: 15px;
  @media (max-width: ${sm}px) {
    font-size: 16px;
    margin-right: 5px;
  }
`;
export const Form = styled(FormRocket)`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
`;
export const Input = styled(InputRocket)`
  border: 0px;
  padding: 10px;
  border-radius: 6px;
  height: 45px;
  color: #636363;
  background: #f0f0f5;
  @media (max-width: ${sm}px) {
    height: 30px;
    font-size: 10px;
  }
`;
export const Select = styled(SelectRocket)`
  border: 0px;
  padding: 10px;
  border-radius: 6px;
  height: 45px;
  color: #636363;
  background: #f0f0f5;
  @media (max-width: ${sm}px) {
    height: 30px;
    font-size: 10px;
  }
`;
export const ContainerInput = styled.div<{ width: Number }>`
  width: ${(props: any) => props?.width}%;
  flex-direction: column;
  display: flex;
  margin: 15px 0px;
  label {
    color: #636363;
    margin-bottom: 5px;
    font-size: 14px;
  }
  span {
    font-size: 12px;
    color: #fe2e2e;
    margin-top: 5px;
    padding-left: 10px;
  }
  @media (max-width: ${sm}px) {
    label {
      font-size: 9px;
    }
    span {
      font-size: 9px;
    }
  }
`;
export const ButtonSubmit = styled.button`
  padding: 0;
  font-size: 14px;
  border-radius: 8px;
  width: 40%;
  font-weight: bold;
  height: 50px;
  background: var(--primary-color);
  color: white;
  float: right;
  margin: 20px 0px 20px auto;
  &:hover {
    background: #2fb86e;
  }
  @media (max-width: ${sm}px) {
    font-size: 10px;
    border-radius: 6px;
    width: 65%;
    height: 34px;
    margin: 20px 0px 20px auto;
  }
`;
export const ContainerMap = styled.div`
  width: 100%;
  height: 300px;
  .leaflet-container {
    height: 100%;
    width: 100%;
  }
  @media (max-width: ${sm}px) {
    height: 200px;
    .leaflet-control-zoom {
      height: 34px !important;
      .leaflet-control-zoom-in,
      .leaflet-control-zoom-out {
        width: 15px !important;
        height: 15px !important;
        line-height: 15px !important;
        font-size: 10px !important;
      }
    }
  }
`;
export const FlexBox = styled.div`
  margin: 60px 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  span {
    color: #636363;
    font-size: 14px;
  }
  @media (max-width: ${sm}px) {
    font-size: 12px;
    flex-wrap: wrap;
    margin: 30px 0px 10px;

    span {
      font-size: 10px;
    }
  }
`;
export const ListItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const CardItem = styled.li<{ selected: boolean }>`
  text-align: center;
  background: ${(props: any) => (props.selected ? "#E1FAEC" : "#efefefdb;")};
  border: 2px solid
    ${(props: any) => (props.selected ? "#34CB79" : "transparent")};
  width: 31%;
  align-items: center;
  padding: 40px 0px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  cursor: pointer;
  span {
    font-size: 18px;
    padding-top: 30px;
    font-weight: 500;
  }
  margin: 10px 0px;
  &:hover {
    background: #e1faec;
  }
  @media (max-width: ${sm}px) {
    height: 25vw;
    padding: 0px;
    img {
      height: 30px;
    }
    span {
      font-size: 10px;
      padding-top: 8px;
    }
  }
`;
export const Success = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1200;
  background: #0e0a14f2;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  span {
    color: #ffffff;
    display: block;
    font-size: 40px;
    font-weight: bold;
    margin-top: 20px;
  }
`;
export const IconSuccess = styled(FiCheckCircle)`
  color: #34cb79;
  font-size: 60px;
`;
