import React, { ChangeEvent } from "react";
import { ToggleContainer, ToggleInput, ToggleSlider } from "./Button.styled";

interface CheckboxToggleProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onToggleChange?: (checked: boolean) => void;
}

const ToggleButton = ({
  label,
  disabled,
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
