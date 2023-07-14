import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const StyledDashboardInfoCard = styled.li`
  width: 25%;
  height: 82px;
  display: flex;
  background: ${getColor("white")};
  padding: 16px;
  justify-content: flex-start;
  gap: 12px;
  align-items: center;
  border-bottom: 8px;

  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;
`;

export const StyledDashboardInfoCardIconContainer = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${getColor("primary050")};

  & path {
    background: ${getColor("primary050")};
    stroke: ${getColor("primary500")};
  }
`;

export const StyledDashboardInfoCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4px;
`;