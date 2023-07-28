import React from "react";
import Typography from "../Typography/Typography";
import { styled } from "styled-components";
import { RadioMarkIcon } from "../icons/icons";
import { getColor } from "utils/styles/getStyle/getColor";
import { RadioInput, Radiomark, RadioWrapper } from "./Input.styled";

export interface RadioInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  $label?: string;
}

const CustomRadio: React.FC<RadioInterface> = ({
  checked,
  $label,
  value = "",
  ...rest
}) => {
  return (
    <RadioWrapper {...rest}>
      <Radiomark
        checked={checked}
        {...rest}>
        {checked && <RadioMarkIcon />}
        <RadioInput
          value={value}
          checked={checked}
          type="radio"
          {...rest}
        />
      </Radiomark>
      {$label && (
        <Typography
          tag="label"
          $color="darkGray2"
          $variant="UI/UI Text 14 Reg">
          {$label}
        </Typography>
      )}
    </RadioWrapper>
  );
};

export default CustomRadio;
