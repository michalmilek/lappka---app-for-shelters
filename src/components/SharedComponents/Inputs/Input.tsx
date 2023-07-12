import { getBorderRadius } from "../../../utils/styles/getStyle/getBorderRadius";
import { getColor } from "../../../utils/styles/getStyle/getColor";
import { InputSize } from "@utils/styles/types/stylesTypes";
import React, { CSSProperties } from "react";
import styled, { css } from "styled-components";
import Typography from "../Typography/Typography";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize;
  value?: string;
  icon?: JSX.Element;
  label?: string;
  error?: string | null;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  gap: 4px;
`;

const StyledInput = styled.div<InputProps>`
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

const InputField = styled.input<InputProps>`
  z-index: 5;
  background-color: ${getColor("white")};
  border-radius: ${getBorderRadius("6px")};
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

const IconContainer = styled.div<InputProps>`
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

const Input = ({
  inputSize = "Medium",
  value,
  icon,
  label,
  error,
  ...rest
}: InputProps) => {
  return (
    <StyledDiv>
      {label && (
        <Typography
          tag="span"
          variant="UI Small/UI Text 13 Med"
          color="darkGray2">
          {label}
        </Typography>
      )}
      <StyledInput
        inputSize={inputSize}
        {...rest}>
        <InputField
          inputSize={inputSize}
          value={value}
          error={error}
          {...rest}
        />
        {icon && <IconContainer inputSize={inputSize}>{icon}</IconContainer>}
      </StyledInput>
      {error && (
        <Typography
          tag="span"
          color="error"
          variant="UI Small/UI Text 12 Reg">
          {error}
        </Typography>
      )}
    </StyledDiv>
  );
};

export default Input;
