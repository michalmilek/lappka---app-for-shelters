import { getColor } from "../../../utils/styles/getStyle/getColor";
import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { ToggleContainer, ToggleInput, ToggleSlider } from "./styles";

interface CheckboxToggleProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  onToggleChange?: (checked: boolean) => void;
}



const ToggleButton = ({
  label,
  disabled = false,
  onToggleChange,
  ...rest
}: CheckboxToggleProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    if (onToggleChange) {
      onToggleChange(newChecked);
    }
  };

  return (
    <ToggleContainer disabled={disabled}>
      <ToggleInput
        type="checkbox"
        onChange={handleChange}
        disabled={disabled}
        {...rest}
      />
      <ToggleSlider />
      {label && <span>{label}</span>}
    </ToggleContainer>
  );
};

export default ToggleButton;
