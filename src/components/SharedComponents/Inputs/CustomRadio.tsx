import React from "react";
import Typography from "../Typography/Typography";
import { styled } from "styled-components";
import { RadioMarkIcon } from "../icons/icons";
import { getColor } from "utils/styles/getStyle/getColor";
import { Radiomark, RadioWrapper } from "./Input.styled";

export interface RadioInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  handleRadioChange?: (value: string) => void;
}



const CustomRadio: React.FC<RadioInterface> = ({
  checked,
  label,
  handleRadioChange,
  value,
  ...rest
}) => {
  return (
    <RadioWrapper
      onClick={() => {
        if (typeof value === "string" && handleRadioChange)
          handleRadioChange(value);
      }}>
      <Radiomark
        checked={checked}
        {...rest}>
        {checked && <RadioMarkIcon />}
      </Radiomark>
      <input
        readOnly
        checked={checked}
        onClick={() => {
          if (typeof value === "string" && handleRadioChange)
            handleRadioChange(value);
        }}
        type="radio"
        {...rest}
        hidden
      />
      {label && (
        <Typography
          tag="label"
          color="darkGray2"
          variant="UI/UI Text 14 Reg">
          {label}
        </Typography>
      )}
    </RadioWrapper>
  );
};

export default CustomRadio;
