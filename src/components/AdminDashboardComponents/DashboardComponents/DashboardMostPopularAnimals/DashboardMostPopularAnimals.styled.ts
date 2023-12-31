import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const DashboardMostPopularAnimalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${getColor("white")};
  border-radius: 8px;
  grid-area: e;
  height: 100%;
  width: 3fr;

  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;

  @media screen and (max-width: 1024px) {
    height: auto;
    width: 100%;
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
