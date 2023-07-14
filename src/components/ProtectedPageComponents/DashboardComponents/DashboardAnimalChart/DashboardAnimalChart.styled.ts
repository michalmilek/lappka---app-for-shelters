import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const StyledDashboardChartContainer = styled.div`
  border: 8px;
  grid-area: b;
  background: ${getColor("white")};
  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;
`;

export const StyledDashboardChartTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;
