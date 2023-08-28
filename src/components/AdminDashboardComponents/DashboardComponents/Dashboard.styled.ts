import { styled } from "styled-components";

export const StyledDashboardMain = styled.main`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
`;

export const StyledDashboardMainContent = styled.article`
  box-sizing: border-box;
  display: grid;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  padding: 24px 24px 25px;
  grid-template-areas:
    "el1 el1 el2 el2 el3 el3 el4 el4"
    "b b b b b b c c"
    "b b b b b b c c"
    "b b b b b b c c"
    "d d d d d e e e"
    "d d d d d e e e";

  gap: 16px;

  align-content: space-between;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
