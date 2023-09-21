import React from "react";
import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export interface InfoCardInterface extends React.ComponentProps<"div"> {
  gridArea: string;
}

export const StyledDashboardInfoCard = styled.div<InfoCardInterface>`
  height: 100%;
  display: flex;
  background: ${getColor("white")};
  padding: 16px;
  justify-content: flex-start;
  gap: 12px;
  align-items: center;
  min-width: 20vw;
  width: 100%;
  border-radius: 8px;

  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;

  grid-area: ${(props) => props.gridArea};

  @media screen and (max-width: 1800px) {
    width: 100%;
    min-width: 15vw;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const StyledDashboardInfoCardIconContainer = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  flex-shrink: 0;
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
