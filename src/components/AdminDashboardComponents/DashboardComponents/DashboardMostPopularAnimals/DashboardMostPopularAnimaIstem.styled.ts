import styled, { keyframes } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const DashboardMostPopularAnimalsItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 6px 13px 10px 12px;
  width: 100%;

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

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

export const SkeletonMostPopularImg = styled.div`
  border-radius: 50%;
  height: 32px;
  width: 32px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`;

export const DashboardMostPopularAnimalsItemError = styled.div`
  border-radius: 50%;
  height: 32px;
  width: 32px;
  background-color: #ff6666;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
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
