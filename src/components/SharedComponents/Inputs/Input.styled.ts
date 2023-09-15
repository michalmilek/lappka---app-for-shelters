//DEFAUlt iNPUT
//DEFAUlt iNPUT
//DEFAUlt iNPUT

import { css, styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import { typographyVariants } from "utils/styles/getStyle/getFontStyle";
import { CheckboxInterface } from "./CustomCheckbox";
import { RadioInterface } from "./CustomRadio";
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
  position: relative;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? getColor(backgroundColor) : getColor("white")};
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

  &:focus-visible {
    outline: 1px solid ${getColor("focus")};
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

      &:read-only {
    border: none !important;
    padding-right: 0 !important;
  }
`;

export const IconContainer = styled.div<InputProps>`
  cursor: pointer;
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

export const StyledTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledTextarea = styled.div<TextareaProps>`
  position: relative;
`;

export const TextareaField = styled.textarea<TextareaProps>`
  position: relative;
  font-family: "Inter", sans-serif;
  background-color: ${getColor("white")};
  border-radius: 6px;
  color: ${getColor("darkGray2")};
  padding: 8px 12px;
  transition: all 300ms ease-in-out;
  outline: none;
  height: 80px;
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

  &:focus-visible {
    outline: 1px solid ${getColor("focus")};
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

        &:read-only {
    border: none !important;
  }
`;

//RADIO INPUT
//RADIO INPUT
//RADIO INPUT

export const RadioWrapper = styled.div<RadioInterface>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 4px 0;
  gap: 8px;
  width: 100%;
  z-index: 10;

  &:focus-visible {
    outline: 1px solid ${getColor("focus")};
  }
`;

export const Radiomark = styled.div<RadioInterface>`
  position: relative;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${getColor("midGray5")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  transition: all 0.3s ease-in-out;
`;

export const RadioInput = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;

  z-index: 100;
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  ${typographyVariants["UI/UI Text 14 Reg"]};
  color: ${getColor("darkGray2")};
  cursor: pointer;
`;