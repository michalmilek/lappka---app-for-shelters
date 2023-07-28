import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const StyledDashboardEmployeesMainContent = styled.article`
  display: flex;
  padding: 40px 24px;
  width: 100%;

  gap: 0;
`;

export const EmployeesTableComponentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${getColor("white")};
  height: auto;
`;
