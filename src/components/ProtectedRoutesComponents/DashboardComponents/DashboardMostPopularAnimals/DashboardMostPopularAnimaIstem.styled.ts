import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const DashboardMostPopularAnimalsItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 6px 13px 10px 12px;

  &:hover {
    background: ${getColor("lightGray1")};
  }
`;

export const DashboardMostPopularAnimalsItemContainerAnimalInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`;

export const DashboardMostPopularAnimalsItemImage = styled.img`
  border-radius: 50%;
  height: 32px;
  width: 32px;
`;

export const DashboardMostPopularAnimalsItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DashboardMostPopularAnimalsItemInfoContainerStyledViews = styled.div`
  display: flex;
  align-items: center;
  color: #6b7280;
  white-space: nowrap;
  gap: 4px;

  > svg {
    height: 24px;
    width: 24px;

    & path {
      stroke: ${getColor("midGray4")};
    }
  }
`;
