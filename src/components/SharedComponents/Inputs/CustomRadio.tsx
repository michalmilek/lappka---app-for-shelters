import React from "react";
import Typography from "../Typography/Typography";
import { styled } from "styled-components";
import { RadioMarkIcon } from "../icons/icons";
import { getColor } from "utils/styles/getStyle/getColor";

interface RadioInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  handleRadioChange?: (value: string) => void;
}

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 4px 0;
  gap: 8px;
  cursor: pointer;
  width: 100%;
  z-index: 10;
`;

export const Radiomark = styled.div<RadioInterface>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${getColor("midGray5")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  transition: all 0.3s ease-in-out;
`;

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
