import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import { IsOn } from "./DashboardVoluntaryItem";

export const DashboardVoluntaryItemContainer = styled.div`
  padding: 6px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DashboardVoluntaryItemStatusContainer = styled.div`
  padding-left: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const IsOnIndicator = styled.span<IsOn>`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: ${({ $isOn }) =>
    $isOn ? getColor("success") : getColor("lightGray1")};
  transition: all 0.3s ease-in-out;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.8);
    }
    70% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;
