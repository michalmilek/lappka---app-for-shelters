import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const TableComponentContainer = styled.div`
  grid-area: b;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: ${getColor("white")};
`;

export const EmployeesTableComponentHeaderContainer = styled.div`
  width: 100%;
  padding: 12px 16px;
`;

export const EmployeesTableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-bottom: 1px solid ${getColor("lightGray4")};
`;

export const EmployeesStyledTableHeader = styled.thead`
  width: 100%;
`;

export const EmployeesStyledTableTH = styled.th`
  cursor: pointer;
  padding: 12px 16px;
  text-align: left;
  border-top: 1px solid ${getColor("lightGray3")};
  border-bottom: 1px solid ${getColor("lightGray3")};

  &:focus-visible {
    outline: 1px solid ${getColor("focus")};
  }
`;

export const EmployeesStyledTableTHTextContainer = styled.div`
  padding-right: 30px;

  @media screen and (max-width: 1300px) {
    padding-right: 0px;
  }
`;

export const EmployeesStyledTableTR = styled.tr`
  cursor: pointer !important;
  gap: 12px;
  background: ${getColor("white")};
  transition: all 0.3s ease-in-out;
  &:nth-of-type(2n) {
    background: ${getColor("lightGray5")};
  }

  &:hover {
    background: ${getColor("lightGray2")};
  }
`;

export const EmployeesStyledTableTD = styled.td`
  padding: 12px 16px;
  gap: 12px;
`;
