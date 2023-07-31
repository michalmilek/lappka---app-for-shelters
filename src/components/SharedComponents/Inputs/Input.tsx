import { Color, InputSize } from "utils/styles/types/stylesTypes";
import React from "react";
import Typography from "../Typography/Typography";
import {
  IconContainer,
  InputField,
  StyledDiv,
  StyledInput,
} from "./Input.styled";
import { EyeIcon, EyeOffIcon } from "../icons/icons";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize;
  icon?: JSX.Element;
  label?: string;
  error?: string | null;
  backgroundColor?: Color;
}

const Input = ({
  inputSize = "Medium",
  value,
  icon,
  label,
  error,
  name,
  type,
  ...rest
}: InputProps) => {
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);

  const isPassword = type === "password";

  const handleTogglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

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
          name={name}
          inputSize={inputSize}
          value={value}
          error={error}
          type={isPassword ? (!passwordVisibility ? "password" : "text") : type}
          {...rest}
        />
        {isPassword && (
          <IconContainer
            inputSize={inputSize}
            onClick={handleTogglePasswordVisibility}>
            {passwordVisibility ? <EyeOffIcon /> : <EyeIcon />}
          </IconContainer>
        )}

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
