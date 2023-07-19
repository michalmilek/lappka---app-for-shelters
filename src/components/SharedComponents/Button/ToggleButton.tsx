import React, { ChangeEvent } from "react";
import Typography from "../Typography/Typography";
import {
  ToggleButtonContainer,
  ToggleContainer,
  ToggleInput,
  ToggleSlider,
} from "./Button.styled";

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
    <ToggleButtonContainer disabled={disabled}>
      <ToggleContainer disabled={disabled}>
        <ToggleInput
          type="checkbox"
          onChange={handleChange}
          disabled={disabled}
          {...rest}
        />
        <ToggleSlider />
      </ToggleContainer>
      {label && (
        <Typography
          tag="label"
          variant="UI/UI Text 14 Med"
          color={disabled ? "lightGray4" : "darkGray2"}>
          {label}
        </Typography>
      )}
    </ToggleButtonContainer>
  );
};

export default ToggleButton;
