import { styled } from "styled-components";

export const StyledDashboardMain = styled.main`
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  max-height: 100%;

  @media screen and (max-width: 1024px) {
    overflow-y: scroll;
  }
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

  @media screen and (max-width: 1350px) {
    padding: 12px;

    grid-template-areas:
      "a a a a a"
      "b b b b c"
      "b b b b c"
      "b b b b c"
      "b b b b c"
      "d d e e"
      "d d e e";
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
