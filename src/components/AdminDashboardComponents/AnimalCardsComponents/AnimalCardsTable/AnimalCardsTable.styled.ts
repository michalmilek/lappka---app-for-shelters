import { css, styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

interface SexInterface {
  sex: "samiec" | "samiczka";
}

interface DotInterface {
  value: "Tak" | "Nie";
}

interface PaginationButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const StyledSexContainer = styled.div<SexInterface>`
  background: ${({ sex }) =>
    sex === "samiec" ? getColor("midGray3") : getColor("primary500")};
  padding: 0 8px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ sex }) => (sex === "samiec" ? "66px" : "81px")};
  height: 24px;

  @media screen and (max-width: 400px) {
    width: ${({ sex }) => (sex === "samiec" ? "55px" : "70px")};
  }
`;

export const DotFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  @media screen and (max-width: 400px) {
    gap: 4px;
  }
`;

export const Dot = styled.div<DotInterface>`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: ${({ value }) =>
    value === "Tak" ? getColor("success") : getColor("red500")};

  @media screen and (max-width: 400px) {
    height: 6px;
    width: 6px;
  }
`;

export const ActionHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TableComponentContainer = styled.div`
  grid-area: b;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: ${getColor("white")};
`;

export const TableComponentHeaderContainer = styled.div`
  width: 100%;
  padding: 12px 16px;

  @media screen and (max-width: 1300px) {
    padding: 12px 4px;
  }
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-bottom: 1px solid ${getColor("lightGray4")};
`;

export const StyledTableHeader = styled.thead`
  width: 100%;
`;

export const StyledTableTH = styled.th`
  padding: 12px 16px;
  text-align: left;
  border-top: 1px solid ${getColor("lightGray3")};
  border-bottom: 1px solid ${getColor("lightGray3")};

  @media screen and (max-width: 1300px) {
    padding: 12px 4px;
  }
`;

export const StyledTableTHTextContainer = styled.div`
  padding-right: 30px;

  @media screen and (max-width: 1300px) {
    padding-right: 0px;
  }
`;

export const StyledTableTR = styled.tr`
  gap: 12px;
  background: ${getColor("white")};
  &:nth-of-type(2n) {
    background: ${getColor("lightGray5")};
  }
`;

export const StyledTableTD = styled.td`
  padding: 12px 16px;
  gap: 12px;

  @media screen and (max-width: 1300px) {
    padding: 12px 4px;
  }
`;

interface DropdownDetailsInterface {
  displayDetails?: boolean;
}

export const StyledDropdownContainer = styled.ul`
  z-index: 20;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 171px;
  height: 90px;
  background: ${getColor("white")};
  border: 1px solid ${getColor("lightGray5")};
  padding: 8px 0;
  border-radius: 6px;
  gap: 2px;
  position: absolute;
  top: 50%;
  right: 50%;

  box-shadow: 0px 12px 24px 0px #5b68713d;

  box-shadow: 0px 0px 1px 0px #1a202452;
`;

export const StyledDropdownOption = styled.li<DropdownDetailsInterface>`
  width: 100%;
  padding: 4px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${getColor("lightGray3")};
  }
`;

export const StyledTableFooterContainer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 10px 16px;
  box-shadow: 0px 1px 0px 0px #e5e9eb inset;
  @media screen and (max-width: 1300px) {
    padding: 10px 4px;
  }
`;

export const StyledTableFooterButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
`;

export const StyledTableNumberButton = styled.button<PaginationButtonInterface>`
  background: ${({ active }) =>
    active ? getColor("lightGray3") : getColor("white")};
  padding: 4px 6px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${getColor("darkGray2")};
  transition: all 0.3s ease-in-out;
  border: none;
  cursor: pointer;
`;

export const StyledTableArrowButton = styled.button`
  height: 24px;
  width: 24px;
  background: ${getColor("white")};
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  & path {
    stroke: ${getColor("midGray5")};
    fill: ${getColor("midGray5")};
    ${({ disabled }) =>
      disabled &&
      css`
        opacity: 0.5;
      `}
  }
`;

export const StyledTableInputContainer = styled.div`
  width: 30%;
`;


export const AnimalCardsStyledPageSizeSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;