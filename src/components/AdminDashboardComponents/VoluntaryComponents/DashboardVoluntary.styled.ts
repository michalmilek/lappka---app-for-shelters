import { styled } from "styled-components";

export const StyledDashboardVoluntaryMainContent = styled.article`
  display: grid;
  width: 100%;
  gap: 16px;
  height: 100%;
  grid-template-areas: "a a a . .";
  gap: 0;
`;

export const StyledDashboardVoluntaryMainContentFormsContainer = styled.div`
  grid-area: a;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 32px 33px;
`;