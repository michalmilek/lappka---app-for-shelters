import { getBorderRadius } from "../../../utils/styles/getStyle/getBorderRadius";
import { getColor } from "../../../utils/styles/getStyle/getColor";
import { InputSize } from "utils/styles/types/stylesTypes";
import React, { ChangeEvent } from "react";
import styled, { css } from "styled-components";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputSize?: InputSize;
  value?: string;
  icon?: JSX.Element;
  label?: JSX.Element;
  error?: JSX.Element;
}

const StyledTextarea = styled.div<TextareaProps>`
  position: relative;
`;

const TextareaField = styled.textarea<TextareaProps>`
  background-color: ${getColor("white")};
  border-radius: ${getBorderRadius("6px")};
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

const Textarea = ({
  inputSize = "Medium",
  value,
  icon,
  label,
  error,
  ...rest
}: TextareaProps) => {
  return (
    <>
      {label && label}
      <StyledTextarea inputSize={inputSize}>
        <TextareaField
          inputSize={inputSize}
          value={value}
          {...rest}
        />
      </StyledTextarea>
      {error && { error }}
    </>
  );
};

export default Textarea;
