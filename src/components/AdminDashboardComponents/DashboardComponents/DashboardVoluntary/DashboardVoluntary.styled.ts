import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const DashboardVoluntaryContainer = styled.div`
  background: ${getColor("white")};
  display: flex;
  flex-direction: column;
  grid-area: c;
  border-radius: 6px;
  min-width: 272px;
  height: 100%;

  box-shadow: 0px 2px 4px 0px #5b687114;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

export const DashboardVoluntaryTitleContainer = styled.div`
  padding: 12px 16px;
`;

export const DashboardVoluntaryItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;
