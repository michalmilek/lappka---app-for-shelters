//TEXTAREA
//TEXTAREA
//TEXTAREA

import { css, styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import { typographyVariants } from "utils/styles/getStyle/getFontStyle";
import { TextareaProps } from "./TextArea";

export const StyledTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledTextarea = styled.div<TextareaProps>`
  position: relative;
`;

export const TextareaField = styled.textarea<TextareaProps>`
  ${typographyVariants["UI/UI Text 14 Reg"]}
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
    resize: none;
  }
`;
