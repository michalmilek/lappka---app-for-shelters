import { styled } from "styled-components";

export const StyledDashboardMainContent = styled.article`
  display: grid;
  width: 100%;
  height: 100%;
  padding: 24px 24px 25px;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "a a a a a a a a"
    "b b b b b b c c"
    "b b b b b b c c"
    "b b b b b b c c"
    "d d d d d e e e"
    "d d d d d e e e";

  border: 1px solid #000;
  gap: 16px;
`;

export const StyledDashboardInfoCardsContainer = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  grid-area: a;
`;
