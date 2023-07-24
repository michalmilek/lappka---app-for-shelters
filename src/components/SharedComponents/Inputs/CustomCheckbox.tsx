import React, { useState, useEffect } from "react";
import { CheckboxMarkIcon } from "../icons/icons";
import { Color } from "utils/styles/types/stylesTypes";
import Typography from "../Typography/Typography";
import { CheckboxWrapper, Checkmark } from "./Input.styled";

export interface CheckboxInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  color: Color;
  label?: string;
  handleState?: () => void;
}

const CustomCheckbox: React.FC<CheckboxInterface> = ({
  color,
  checked,
  label,
  name,
  handleState,
  ...rest
}) => {
  return (
    <CheckboxWrapper
      htmlFor={name}
      onClick={handleState}>
      <Checkmark
        color={color}
        checked={checked}
        name={name}
        {...rest}>
        {checked && <CheckboxMarkIcon />}
      </Checkmark>
      {label && <Typography variant="UI/UI Text 14 Reg">{label}</Typography>}
    </CheckboxWrapper>
  );
};

export default CustomCheckbox;
