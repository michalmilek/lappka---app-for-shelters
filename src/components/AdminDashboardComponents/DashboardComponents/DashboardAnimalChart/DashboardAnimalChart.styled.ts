import { ArrowUpIcon } from "components/SharedComponents/icons/icons";
import { ResponsiveContainer } from "recharts";
import { css, styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const StyledDashboardChartContainer = styled.div`
  border-radius: 8px;
  grid-area: b;
  background: ${getColor("white")};
  height: 100%;
  width: 6fr;
  box-shadow: 0px 1px 2px 0px #1018280f;
  z-index: 900;

  box-shadow: 0px 1px 3px 0px #1018281a;

  @media screen and (max-width: 1024px) {
    height: auto;
    width: 100%;
  }
`;

export const StyledDashboardChartTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  position: relative;
  border-bottom: 1px solid ${getColor("lightGray3")};
  margin-bottom: 10px;
`;

export const StyledDashboardChartDropdownContainer = styled.div`
  z-index: 5;
  position: absolute;
  top: 100%;
  right: 2%;
  padding: 8px 0;
  display: flex;
  border-radius: 6px;
  background: ${getColor("white")};
  border: 1px solid ${getColor("lightGray5")};
  width: 181px;

  box-shadow: 0px 12px 24px 0px #5b68713d;

  box-shadow: 0px 0px 1px 0px #1a202452;
  &.dropdown-entering {
    animation: fadeIn 0.3s forwards;
  }

  &.dropdown-exiting {
    animation: fadeOut 0.3s forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
    }
  }
`;

export const StyledDashboardChartDropdownContainerList = styled.ul`
  z-index: 6;
  list-style-type: none;
  width: 100%;
  padding: 4px 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  max-width: 6fr;
  max-height: 60vh !important;

  width: 100%;

  @media screen and (max-height: 1600px) {
    max-height: 55vh !important;
  }

  @media screen and (max-height: 1450px) {
    max-height: 50vh !important;
  }

  @media screen and (max-height: 1300px) {
    max-height: 45vh !important;
  }

  @media screen and (max-height: 1150px) {
    max-height: 30vh !important;
  }

  @media screen and (max-height: 950px) {
    max-height: 35vh !important;
  }

  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;

interface ArrowUpIconInterface extends React.SVGProps<SVGSVGElement> {
  isDropdownActive: boolean;
}

export const StyledArrowUpIcon = styled(ArrowUpIcon).withConfig({
  shouldForwardProp: (prop) => prop !== "isDropdownActive",
})<ArrowUpIconInterface>`
  transition: all 0.3s ease;

  ${({ isDropdownActive }) =>
    isDropdownActive &&
    css`
      transform: rotate(180deg);
    `}
`;
