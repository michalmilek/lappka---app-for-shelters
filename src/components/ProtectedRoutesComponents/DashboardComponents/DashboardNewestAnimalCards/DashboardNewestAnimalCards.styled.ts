import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const DashboardNewestAnimalCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${getColor("white")};
  grid-area: d;
  border-radius: 8px;
  height: 360px;
  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;
`;

export const DashboardNewestAnimalCardsContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;

export const DashboardNewestAnimalCardsContainerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  justify-content: center;
  padding: 16px;
`;
