import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const StyledDashboardChartContainer = styled.div`
  border-radius: 8px;
  grid-area: b;
  background: ${getColor("white")};
  min-width: 848px;
  max-height: 351px;
  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;

  @media screen and (max-width: 1439px) {
    max-width: auto;
    min-width: auto;
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    min-width: auto;
    width: 100%;
    max-width: auto;
  }
`;

export const StyledDashboardChartTitleContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  position: relative;
`;

export const StyledDashboardChartDropdownContainer = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  list-style-type: none;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 6px;
  background: ${getColor("white")};
  border: 1px solid ${getColor("lightGray5")};

  box-shadow: 0px 12px 24px 0px #5b68713d;

  box-shadow: 0px 0px 1px 0px #1a202452;
`;