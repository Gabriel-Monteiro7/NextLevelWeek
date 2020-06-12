import styled from "styled-components";
import { sm, md } from "../../styles/global";

export const Container = styled.div`
  width: 30%;
  margin: -85px 25px 110px 0px;
  display: flex;
  flex-direction: column;
  height: 410px;
  @media (max-width: ${md}px) {
    width: 45%;
  }
  @media (max-width: ${sm}px) {
    width: 95%;
    margin: -85px auto 90px auto;
  }
`;

export const TitleCard = styled.h2`
  height: 40px;
  margin: 20px 0px;
  font-size: 28px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  @media (max-width: ${sm}px) {
    margin: 15px 0px;
    font-size: 22px;
  }
`;
export const ItemsLabel = styled.label`
  margin-right: 5px;
  color: #34cb79;
  font-size: 20px;
  @media (max-width: ${sm}px) {
    font-size: 16px;
  }
`;
export const AddressCard = styled.p`
  color: #6c6c80;
  font-size: 16px;
  line-height: 26px;
  @media (max-width: ${sm}px) {
    font-size: 14px;
  }
`;
export const Image = styled.div<{ image: string }>`
  background-image: ${(props) => `url('${props.image}')`};
  width: 100%;
  height: 200px;
  border-radius: 8px 8px 0px 0px;
  background-size: cover;
`;
export const ContainerItems = styled.div`
  height: 70px;
  @media (max-width: ${sm}px) {
    height: 40px;
  }
`;
export const ContainerAddress = styled.div`
  height: 103px;
`;
