import styled from "styled-components";

export const AllAlignCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 40px;
`;

export const Container = styled.div`
  border-radius: 16px;
  background-color: #303030;
  margin: 40px 0px;
  padding: 20px 100px;
  min-width: 40%;
`;

export const TitleCreate = styled.p`
  color: #8d8d8d;
  font-size: 40px;
  text-align: center;
  margin-bottom: 8px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const ContainerInfoUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 20px;
  margin-bottom: 20px;
`;

export const ImageProfileUser = styled.img`
  border-radius: 50%;
  max-width: 80px;
  min-width: 80px;
  max-height: 80px;
  min-width: 80px;
  object-fit: cover;
`;

export const UserName = styled.p`
  font-size: 20px;
  color: #74b3ce;
  margin-left: 8px;
`;

export const ContainerFormCreate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
`;

export const InputCreate = styled.textarea`
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.2));
  border: none;
  margin-bottom: 10px;
  outline: none;
  box-sizing: border-box;
  font-size: 18px;
  padding: 8px 16px;
  color: #8d8d8d;
  background: #363636;
  border-radius: 16px;
  resize: none;

  &::placeholder {
    color: #8d8d8d;
    justify-content: center;
  }
`;

export const InputDescription = styled.textarea`
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.2));
  border: none;
  margin-bottom: 10px;
  outline: none;
  box-sizing: border-box;
  font-size: 18px;
  padding: 8px 16px;
  color: #8d8d8d;
  background: #363636;
  border-radius: 16px;
  resize: none;
  min-height: 160px;

  &::placeholder {
    color: #8d8d8d;
    justify-content: center;
  }
`;

export const ContainerButtonPost = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;

export const ButtonPost = styled.button`
  color: #fff;
  margin-top: 8px;
  padding: 8px 34px;
  background: #74b3ce;
  border-radius: 16px;
  font-size: 16px;
  border: none;

  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.1);
    font-weight: 700;
  }
`;
