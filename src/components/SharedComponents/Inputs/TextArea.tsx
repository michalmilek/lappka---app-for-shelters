import { InputSize } from "utils/styles/types/stylesTypes";
import React from "react";
import {
  StyledTextarea,
  StyledTextAreaContainer,
  TextareaField,
} from "./Input.styled";
import Typography from "../Typography/Typography";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputSize?: InputSize;
  value?: string;
  icon?: JSX.Element;
  label?: string;
}

const Textarea = ({
  inputSize = "Medium",
  value,
  icon,
  label,
  ...rest
}: TextareaProps) => {
  return (
    <StyledTextAreaContainer>
      {label && (
        <Typography variant="UI Small/UI Text 13 Med">{label}</Typography>
      )}
      <StyledTextarea inputSize={inputSize}>
        <TextareaField
          inputSize={inputSize}
          value={value}
          {...rest}
        />
      </StyledTextarea>
    </StyledTextAreaContainer>
  );
};

export default Textarea;
