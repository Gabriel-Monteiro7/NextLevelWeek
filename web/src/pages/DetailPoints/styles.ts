import styled from "styled-components";
import { FiArrowLeft } from "react-icons/all";
import { sm } from "../../styles/global";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 100vh;
`;
export const Label = styled.h2`
  margin: 0px;
  color: var(--title-color);
  width: 50%;
  padding-bottom: 10px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 48px 0 0;
  width: 100%;
  padding: 0px 12vw;
  flex-wrap: wrap;

  p {
    margin-top: 70px;
    color: #636363;
    margin-bottom: 5px;
    font-size: 16px;
    width: 100%;
    span {
      font-weight: bold;
    }
  }
  @media (max-width: ${sm}px) {
    img {
      margin-bottom: 20px;
      height: 50px;
    }
    flex-direction: column;
    margin: 30px 0;
    p {
      text-align: center;
    }
  }
`;
export const Main = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 120px;
  background: white;
  border-radius: 8px;
  padding: 55px;
  padding: 0px 12vw;
  flex-wrap: wrap;
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
      font-size: 16px;
    }
  }
`;
export const IconGoBack = styled(FiArrowLeft)`
  color: #2fb86e;
  font-size: 22px;
  margin-right: 15px;
  @media (max-width: ${sm}px) {
    font-size: 18px;
    margin-right: 5px;
  }
`;
export const NoPoints = styled.span`
  align-items: center;
  font-size: 30px;
  color: #989898;
  display: flex;
  height: 60vh;
  margin: auto;
  justify-content: center;
  @media (max-width: ${sm}px) {
    font-size: 17px;
  }
`;
