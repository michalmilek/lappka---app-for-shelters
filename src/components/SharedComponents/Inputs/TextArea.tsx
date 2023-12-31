import { InputSize } from "utils/styles/types/stylesTypes";
import React from "react";
import Typography from "../Typography/Typography";
import {
  StyledTextarea,
  StyledTextAreaContainer,
  TextareaField,
} from "./TextArea.styled";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputSize?: InputSize;
  value?: string;
  icon?: JSX.Element;
  label?: string;
  error?: string | null;
}

const Textarea = ({
  inputSize = "Medium",
  value,
  icon,
  label,
  error,
  ...rest
}: TextareaProps) => {
  return (
    <StyledTextAreaContainer>
      {label && (
        <Typography variant="UI Small/UI Text 13 Med">{label}</Typography>
      )}
      <StyledTextarea inputSize={inputSize}>
        <TextareaField
          error={error}
          inputSize={inputSize}
          value={value}
          {...rest}
        />
      </StyledTextarea>
      <Typography
        tag="span"
        color="error"
        variant="UI Small/UI Text 13 Reg">
        {error}
      </Typography>
    </StyledTextAreaContainer>
  );
};

export default Textarea;
