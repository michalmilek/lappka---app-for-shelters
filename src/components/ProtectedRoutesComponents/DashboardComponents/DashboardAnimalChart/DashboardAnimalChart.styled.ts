import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const StyledDashboardChartContainer = styled.div`
  border: 8px;
  grid-area: b;
  background: ${getColor("white")};
  min-width: 848px;
  max-height: 351px;
  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;

  @media screen and (max-width: 1440px) {
    width: 848px;
  }
`;

export const StyledDashboardChartTitleContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;
