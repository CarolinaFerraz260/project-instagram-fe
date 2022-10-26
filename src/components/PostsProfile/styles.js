import styled from "styled-components";

export const AlignAllCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  margin-top: 20px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 40px 40px;
  grid-template-areas:
    ". . . "
    ". . . ";
`;

export const ContainerPost = styled.img`
  max-width: 250px;
  min-width: 250px;
  max-height: 250px;
  min-height: 250px;
  margin-left: 12px;
  object-fit: cover;
  display: flex;
  flex-wrap: wrap;
`;
