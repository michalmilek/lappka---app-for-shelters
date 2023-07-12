import { getColor } from "utils/styles/getStyle/getColor";
import React from "react";
import styled from "styled-components";
import { CheckboxMarkIcon } from "../icons/icons";
import { Color } from "@utils/styles/types/stylesTypes";
import Typography from "../Typography/Typography";

interface CheckboxInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  color: Color;
  label?: string;
}

// Stylizowany komponent dla checkboxa

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Checkmark = styled.span<CheckboxInterface>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: ${(props) =>
    props.checked ? "" : `1px solid ${getColor("midGray1")}`};
  background-color: ${(props) =>
    props.checked ? getColor(props.color) : getColor("white")};
`;

// Główny komponent Checkbox
const CustomCheckbox: React.FC<CheckboxInterface> = ({
  color,
  checked,
  label,
  name,
  ...rest
}) => {
  return (
    <CheckboxWrapper htmlFor={name}>
      <Checkmark
        color={color}
        checked={checked}
        name={name}
        {...rest}>
        {checked && <CheckboxMarkIcon />}
      </Checkmark>
      {label && <Typography variant="UI/UI Text 14 Reg">{label}</Typography>}
    </CheckboxWrapper>
  );
};

export default CustomCheckbox;
