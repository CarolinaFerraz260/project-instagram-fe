import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 219px;
  text-align: center;
`;

export const TitleWelcome = styled.p`
  font-size: 60px;
`;

export const ContainerHeader = styled.nav`
  margin: 0px 20px;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #404040;
`;

export const LinkHome = styled(Link)`
  padding: 8px 20px;
  margin: 8px;
  color: #d1d1d1;
  text-decoration: none;
  font-size: 28px;

  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 20px;
`;

export const ButtonLogin = styled.button`
  margin-right: 20px;
  font-size: 18px;
  background: #d1d1d1;
  border-radius: 16px;
  padding: 4px 40px;

  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.1);
  }
`;

export const ButtonRegister = styled.button`
  margin-right: 30px;
  font-size: 18px;
  background: none;
  color: #d1d1d1;
  border: none;

  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.1);
  }
`;

export const LinksHeader = styled.a`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
