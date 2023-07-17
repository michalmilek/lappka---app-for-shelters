import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const DashboardVoluntaryContainer = styled.div`
  background: ${getColor("white")};
  display: flex;
  flex-direction: column;
  grid-area: c;
  border-radius: 6px;
  width: 272px;
  height: 351px;

  box-shadow: 0px 2px 4px 0px #5b687114;
`;

export const DashboardVoluntaryTitleContainer = styled.div`
  padding: 12px 16px;
`;

export const DashboardVoluntaryItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
`;
