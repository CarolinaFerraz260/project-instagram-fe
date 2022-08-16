import styled from "styled-components";

export const AlignAllCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  margin: 20px 8px;
  border: solid 1px #404040;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 16px;
  background-color: #303030;
`;

export const ContainerNameUser = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 4px;
`;

export const ButtonUser = styled.button`
  background: none;
  border: none;
`;

export const ImageUser = styled.img`
  max-width: 40px;
  min-width: 40px;
  max-height: 40px;
  min-height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const NameUser = styled.p`
  font-size: 18px;
  color: #74b3ce;
  padding-left: 8px;
`;

export const ImagePost = styled.img`
  max-width: 500px;
  min-width: 500px;
  min-height: 500px;
  max-height: 500px;
  border-top: solid 1px #404040;
  border-bottom: solid 1px #404040;
  object-fit: cover;
  display: flex;
  flex-wrap: wrap;
`;

export const ContainerLikes = styled.div`
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
  margin-bottom: 0;
  align-items: center;
`;

export const IconLike = styled.img`
  width: 24px;
  display: flex;
  align-items: center;
  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
  }
`;

export const NumberOfLikes = styled.p`
  color: #fff;
  font-size: 14px;
  margin: 0;
  font-weight: 700;
  margin-left: 8px;
`;

export const TextLikes = styled.p`
  color: #fff;
  font-size: 14px;
  margin-left: 4px;
  font-weight: 700;
`;

export const DescriptionPost = styled.p`
  color: #c9c9c9;
  font-size: 16px;
  margin-top: 0;
  margin-left: 20px;
  margin-bottom: 4px;
`;

export const TimePost = styled.p`
  color: #b0b0b0;
  font-size: 10px;
  margin-top: 0;
  text-transform: uppercase;
  display: flex;
  justify-content: right;
  margin-right: 20px;
`;
