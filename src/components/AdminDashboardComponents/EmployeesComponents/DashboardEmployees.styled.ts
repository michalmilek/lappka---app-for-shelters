import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const StyledDashboardEmployeesMainContent = styled.article`
  display: flex;
  padding: 40px 24px;
  width: 100%;
  background: ${getColor("lightGray5")};
  gap: 0;
`;

export const EmployeesTableComponentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${getColor("white")};
  height: auto;
  border-radius: 6px;
  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;
`;

export const EmployeesTableFooter = styled.footer`
  border-radius: 6px;
  padding: 10px 16px;
  box-shadow: 0px 1px 0px 0px #e5e9eb inset;
`;