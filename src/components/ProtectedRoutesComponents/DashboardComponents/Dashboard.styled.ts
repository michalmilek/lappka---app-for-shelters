import { styled } from "styled-components";

export const StyledDashboardMain = styled.main`
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  overflow: hidden;
`;

export const StyledDashboardMainContent = styled.article`
  display: grid;
  width: 100%;
  padding: 24px 24px 25px;
  grid-template-areas:
    "a a a a a a a a"
    "b b b b b b c c"
    "b b b b b b c c"
    "b b b b b b c c"
    "d d d d d e e e"
    "d d d d d e e e";

  gap: 16px;
  align-items: flex-start;
  align-content: space-between;
  justify-content: space-between;
`;
