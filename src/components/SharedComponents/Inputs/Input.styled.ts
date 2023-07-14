//DEFAUlt iNPUT
//DEFAUlt iNPUT
//DEFAUlt iNPUT

import { css, styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import { CheckboxInterface } from "./CustomCheckbox";
import { InputProps } from "./Input";
import { TextareaProps } from "./TextArea";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  gap: 4px;
`;

export const StyledInput = styled.div<InputProps>`
  z-index: 5;
  position: relative;
  width: 100%;

  ${(props) =>
    props.inputSize === "XLarge" &&
    css`
      height: 48px;
    `}

  ${(props) =>
    props.inputSize === "Large" &&
    css`
      height: 40px;
    `}

  ${(props) =>
    props.inputSize === "Medium" &&
    css`
      height: 32px;
    `}
`;

export const InputField = styled.input<InputProps>`
  z-index: 5;
  background-color: ${getColor("white")};
  border-radius: 6px;
  color: ${getColor("darkGray2")};
  padding-right: 2%;
  transition: all 300ms ease-in-out;
  outline: none;
  height: 100%;
  width: 100%;

  ${(props) =>
    props.error
      ? css`
          border: 1px solid ${getColor("error")};
        `
      : css`
          border: 1px solid ${getColor("lightGray1")};
        `}

  &::placeholder {
    color: ${getColor("midGray4")};
  }

  &:focus {
    border: 1px solid ${getColor("focus")};
  }

  &:disabled {
    opacity: 0.5;
  }

  ${(props) =>
    props.inputSize === "XLarge" &&
    css`
      padding: 12px 26px 12px 16px;
    `}

  ${(props) =>
    props.inputSize === "Large" &&
    css`
      padding: 8px 26px 8px 16px;
    `}

  ${(props) =>
    props.inputSize === "Medium" &&
    css`
      padding: 4px 26px 4px 16px;
    `}
`;

export const IconContainer = styled.div<InputProps>`
  cursor: pointer;
  z-index: 2;
  position: absolute;
  top: 50%;
  right: ${(props) => {
    if (props.inputSize === "XLarge") return "12px";
    if (props.inputSize === "Large") return "8px";
    if (props.inputSize === "Medium") return "4px";
    return "0";
  }};
  transform: translateY(-50%);
`;

//CHECKBOX
//CHECKBOX
//CHECKBOX

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Checkmark = styled.span<CheckboxInterface>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: ${(props) =>
    props.checked ? "" : `1px solid ${getColor("midGray1")}`};
  background-color: ${(props) =>
    props.checked ? getColor(props.color) : getColor("white")};
`;

//TEXTAREA
//TEXTAREA
//TEXTAREA

export const StyledTextarea = styled.div<TextareaProps>`
  position: relative;
`;

export const TextareaField = styled.textarea<TextareaProps>`
  background-color: ${getColor("white")};
  border-radius: 6px;
  border: 1px solid ${getColor("lightGray1")};
  color: ${getColor("darkGray2")};
  padding: 8px 12px;
  transition: all 300ms ease-in-out;
  outline: none;
  height: 100%;
  width: 100%;

  &::placeholder {
    color: ${getColor("midGray4")};
  }

  &:focus {
    border: 1px solid ${getColor("focus")};
  }

  &:disabled {
    opacity: 0.5;
  }

  ${(props) =>
    props.inputSize === "XLarge" &&
    css`
      padding: 12px 16px;
    `}

  ${(props) =>
    props.inputSize === "Large" &&
    css`
      padding: 8px 12px;
    `}

  ${(props) =>
    props.inputSize === "Medium" &&
    css`
      padding: 4px 8px;
    `}
`;
