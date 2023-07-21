import { styled } from "styled-components";

export const StyledDashboardVoluntaryMainContent = styled.article`
  margin-left: 256px;
  display: grid;
  width: calc(100% - 256px);
  gap: 16px;
  height: 100%;
  grid-template-areas: "a a a . .";
  gap: 0;

  @media screen and (max-width: 1024px) {
    grid-template-areas: "a";
  }
`;

export const StyledDashboardVoluntaryMainContentFormsContainer = styled.div`
  grid-area: a;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 32px 33px;
`;
