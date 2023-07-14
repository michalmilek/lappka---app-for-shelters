import { getColor } from "utils/styles/getStyle/getColor";
import { styled } from "styled-components";

export const StepBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StepItem = styled.div<{ active: boolean; complete: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  white-space: nowrap;

  &:not(:first-of-type)::before {
    content: "";
    position: absolute;
    width: 162px;
    height: 2px;
    right: 105%;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ active, complete }) =>
      active || complete
        ? `${getColor("primary500")}`
        : `${getColor("lightGray2")}`};

    @media screen and (max-width: 500px) {
      width: 140px;
    }
  }
`;

export const StepNumberContainer = styled.div<{
  active: boolean;
  complete: boolean;
}>`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: relative;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid ${({ active }) => (active ? "#43be8d" : "transparent")};
`;

export const StepNumberInner = styled.div<{
  active: boolean;
  complete: boolean;
}>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active, complete }) =>
    active || complete
      ? `${getColor("primary500")}`
      : `${getColor("lightGray2")}`};
`;
