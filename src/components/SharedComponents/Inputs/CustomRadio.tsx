import React, { useState, useEffect } from "react";
import { Color } from "utils/styles/types/stylesTypes";
import Typography from "../Typography/Typography";
import { styled } from "styled-components";
import { RadioMarkIcon } from "../icons/icons";
import { getColor } from "utils/styles/getStyle/getColor";

interface RadioInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  color: Color;
  label?: string;
}

interface RadiomarkProps {
  color: Color;
  checked: boolean;
}

export const RadioWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
`;

export const Radiomark = styled.div<RadiomarkProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${getColor("darkGray4")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  transition: all 0.3s ease-in-out;

  ${({ checked, color }) =>
    checked &&
    `
      border: 2px solid ${getColor(color)};
    `}
`;

const CustomRadio: React.FC<RadioInterface> = ({
  color,
  checked = false,
  label,
  ...rest
}) => {
  const [isChecked, setChecked] = useState<boolean>(checked);

  const handleCheck = () => {
    setChecked(true);
  };

  return (
    <RadioWrapper onClick={handleCheck}>
      <Radiomark
        color={color}
        checked={isChecked}
        {...rest}>
        {isChecked && <RadioMarkIcon />}
      </Radiomark>
      {label && (
        <Typography
          color="darkGray2"
          variant="UI/UI Text 14 Reg">
          {label}
        </Typography>
      )}
    </RadioWrapper>
  );
};

export default CustomRadio;
