import React from "react";
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
  disabled?: boolean;
  fieldName?: string;
  handleChange: () => void;
}

const ToggleButton = ({
  label,
  disabled,
  fieldName,
  checked,
  handleChange,
  ...rest
}: CheckboxToggleProps) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (
      event.key === "Enter" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight"
    ) {
      handleChange();
    }
  };

  return (
    <ToggleButtonContainer disabled={disabled}>
      <ToggleContainer
        tabIndex={0}
        onKeyDown={handleKeyDown}
        disabled={disabled}>
        <ToggleInput
          tabIndex={-1}
          type="checkbox"
          onChange={handleChange}
          disabled={disabled}
          checked={checked}
          {...rest}
        />
        <ToggleSlider />
      </ToggleContainer>
      {label && (
        <Typography
          tag="label"
          variant="UI/UI Text 14 Med"
          color={checked ? "darkGray2" : "midGray4"}>
          {label}
        </Typography>
      )}
    </ToggleButtonContainer>
  );
};

export default ToggleButton;
