import React from "react";
import { RadioMarkIcon } from "../icons/icons";
import {
  RadioInput,
  RadioLabel,
  Radiomark,
  RadioWrapper,
} from "./Input.styled";

export interface RadioInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CustomRadio: React.FC<RadioInterface> = ({
  checked,
  label,
  id,
  value = "",
  ...rest
}) => {
  return (
    <RadioWrapper
      tabIndex={0}
      {...rest}>
      <Radiomark
        checked={checked}
        {...rest}>
        {checked && <RadioMarkIcon />}
        <RadioInput
          value={value}
          checked={checked}
          type="radio"
          id={id}
          {...rest}
        />
      </Radiomark>
      {label && <RadioLabel htmlFor={id}>{label}</RadioLabel>}
    </RadioWrapper>
  );
};

export default CustomRadio;
