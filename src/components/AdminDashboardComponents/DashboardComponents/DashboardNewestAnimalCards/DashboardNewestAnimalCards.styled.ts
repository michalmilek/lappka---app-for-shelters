import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const DashboardNewestAnimalCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${getColor("white")};
  grid-area: d;
  border-radius: 8px;
  height: 100%;
  width: 5fr;
  box-shadow: 0px 1px 2px 0px #1018280f;
  box-shadow: 0px 1px 3px 0px #1018281a;

  @media screen and (max-width: 1024px) {
    height: auto;
    width: 100%;
  }
`;

export const DashboardNewestAnimalCardsContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;

export const DashboardNewestAnimalCardsContainerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 18px;
  justify-content: space-evenly;
  padding: 16px;
  flex-wrap: wrap;
  height: 100%;
`;

export const DashboardNewestAnimalCardsEmptyCardsList = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  grid-column: 6/1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;