import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const DashboardMostPopularAnimalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${getColor("white")};
  border-radius: 8px;
  grid-area: e;
  min-width: 368px;
  height: 360px;

  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;

  @media screen and (max-width: 1440px) {
    width: 100%;
  }

  @media screen and (max-width: 1350px) {
    min-width: auto;
    height: auto;
  }

  @media screen and (max-width: 1024px) {
    min-width: auto;
    height: auto;
  }
`;

export const DashboardMostPopularAnimalsHeadingContainer = styled.header`
  padding: 12px 16px;
`;

export const DashboardMostPopularAnimalsContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
`;
