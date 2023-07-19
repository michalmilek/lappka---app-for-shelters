import { InputSize } from "utils/styles/types/stylesTypes";
import React from "react";
import Typography from "../Typography/Typography";
import {
  IconContainer,
  InputField,
  StyledDiv,
  StyledInput,
} from "./Input.styled";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize;
  icon?: JSX.Element;
  label?: string;
  error?: string | null;
}

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
