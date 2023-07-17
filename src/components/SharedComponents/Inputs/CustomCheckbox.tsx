import React, { useState, useEffect } from "react";
import { CheckboxMarkIcon } from "../icons/icons";
import { Color } from "utils/styles/types/stylesTypes";
import Typography from "../Typography/Typography";
import { CheckboxWrapper, Checkmark } from "./Input.styled";

export interface CheckboxInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  color: Color;
  label?: string;
}

const CustomCheckbox: React.FC<CheckboxInterface> = ({
  color,
  checked,
  label,
  name,
  ...rest
}) => {
  const [isChecked, setChecked] = useState<boolean>(true);

  const handleCheck = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("rememberMe", isChecked.toString());
  }, [isChecked]);

  return (
    <CheckboxWrapper
      htmlFor={name}
      onClick={handleCheck}>
      <Checkmark
        color={color}
        checked={isChecked}
        name={name}
        {...rest}>
        {isChecked && <CheckboxMarkIcon />}
      </Checkmark>
      {label && <Typography variant="UI/UI Text 14 Reg">{label}</Typography>}
    </CheckboxWrapper>
  );
};

export default CustomCheckbox;
