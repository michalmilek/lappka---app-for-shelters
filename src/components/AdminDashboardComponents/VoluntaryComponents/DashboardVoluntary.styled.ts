import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const StyledDashboardVoluntaryMainContent = styled.article`
  display: flex;
  padding: 32px 40px 76px;
  width: 100%;
`;

export const StyledDashboardVoluntaryMainContentFormsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 60%;
  background: ${getColor("white")};
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;
`;

export const StyledDashboardVoluntaryContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledDashboardFooter = styled.footer`
  padding: 16px 24px;
  display: flex;
  width: 100%;
  justify-content: flex-end;

  box-shadow: 0px 1px 0px 0px #eef0f2 inset;
`;