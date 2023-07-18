import styled from "styled-components";

export const StyledDashboardAnimalCardsMain = styled.main`
  height: 100vh;
  width: calc(100vw - 256px);
  margin-left: 256px;
  max-width: 100%;
  max-height: 100%;

  @media screen and (max-width: 1024px) {
    overflow-y: scroll;
  }
`;

export const StyledDashboardAnimalCardsMainContent = styled.article`
  display: grid;
  width: 100%;
  height: calc(100% - 56px);
  padding: 24px 24px 25px;
  grid-template-areas:
    "a a a"
    "b b b"
    "b b b"
    "b b b"
    "b b b"
    "b b b"
    "b b b";

  gap: 16px;
  align-items: flex-start;
  align-content: space-between;
  justify-content: space-between;

  @media screen and (max-width: 1350px) {
    padding: 12px;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
