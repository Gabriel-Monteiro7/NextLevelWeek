import styled, { css } from "styled-components";
import { FiUpload } from "react-icons/all";
import { sm, md } from "../../styles/global";

const flex = css`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const Container = styled.div`
  ${flex}
  height: 300px;
  outline: none;
  width: 608px;
  background: #e1faec;
  margin-top: 50px;
  border-radius: 8px;
  &:hover {
    background: #d6ffe8;
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 8px;
  }
  cursor: pointer;
  @media (max-width: ${sm}px) {
    height: 140px;
  }
`;

export const Contente = styled.div`
  ${flex}
  border-radius: 8px;
  height: 82%;
  box-sizing: border-box;
  width: 90%;
  border: 1px dashed #34cb79;

  p {
    color: #322153;
    font-size: 16px;
  }
  div {
    ${flex};
    flex-direction: column;
  }
  @media (max-width: ${sm}px) {
    p {
      font-size: 14px;
    }
  }
`;
export const Icon = styled(FiUpload)`
  color: #34cb79;
  font-size: 25px;
  margin-bottom: 20px;
  @media (max-width: ${sm}px) {
    font-size: 20px;
  }
`;
