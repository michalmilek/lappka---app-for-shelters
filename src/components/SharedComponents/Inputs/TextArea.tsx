import { InputSize } from "utils/styles/types/stylesTypes";
import React from "react";
import { StyledTextarea, TextareaField } from "./Input.styled";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputSize?: InputSize;
  value?: string;
  icon?: JSX.Element;
  label?: JSX.Element;
  error?: JSX.Element;
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
