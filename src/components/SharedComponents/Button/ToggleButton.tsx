import { FormikType } from "pages/DashboardPages/VoluntaryPage";
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
  $label?: string;
  disabled?: boolean;
  $fieldName?: string;
  formik: FormikType;
  $handleChange: () => void;
}

const ToggleButton = ({
  $label,
  disabled,
  $fieldName,
  formik,
  checked,
  $handleChange,
  ...rest
}: CheckboxToggleProps) => {
  return (
    <ToggleButtonContainer disabled={disabled}>
      <ToggleContainer disabled={disabled}>
        <ToggleInput
          type="checkbox"
          onChange={$handleChange}
          disabled={disabled}
          checked={checked}
          {...rest}
        />
        <ToggleSlider />
      </ToggleContainer>
      {$label && (
        <Typography
          tag="label"
          $variant="UI/UI Text 14 Med"
          $color={checked ? "darkGray2" : "midGray4"}>
          {$label}
        </Typography>
      )}
    </ToggleButtonContainer>
  );
};

export default ToggleButton;
