import { number } from "prop-types";
import { css, keyframes, styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import { SelectPropsWithoutGeneric } from "./Select";

interface zIndexProps {
  zIndex?: number;
}

export const slideDownAnimationIn = keyframes`
  from {
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
  }
  to {
    transform: scaleY(1);
    transform-origin: top;
    opacity: 1;
  }
`;

export const slideDownAnimationOut = keyframes`
  from {
    transform: scaleY(1);
    transform-origin: top;
    opacity: 1;
  }
  to {
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    pointer-events: none;
  }
`;

export const SelectContainerWithLabels = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SelectContainer = styled.div<zIndexProps>`
  position: relative;
  background: ${getColor("white")};
  z-index: inherit;
  width: 100%;
`;

export const SelectDiv = styled.div<SelectPropsWithoutGeneric>`
  cursor: pointer;
  position: relative;
  z-index: inherit;
  background: ${getColor("white")};
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    props.error
      ? css`
          border: 1px solid ${getColor("error")};
        `
      : css`
          border: 1px solid ${getColor("lightGray1")};
        `}
  flex-wrap: nowrap;
  white-space: nowrap;
  border-radius: 6px;
  width: 100%;
  padding: 8px 8px 8px 12px;
  outline: none;
  position: relative;
  height: 40px;
  cursor: pointer;
`;

export const OptionList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  background: ${getColor("white")};
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  width: 100%;
  padding: 4px 0;

  &.slide-in {
    animation: ${slideDownAnimationIn} 0.3s forwards;
  }

  &.slide-out {
    animation: ${slideDownAnimationOut} 0.3s forwards;
  }
  z-index: 1500;
`;

export const OptionItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 20px;
  cursor: pointer;
  z-index: 1500;

  &:hover {
    background-color: #f3f3f3;
  }
`;
