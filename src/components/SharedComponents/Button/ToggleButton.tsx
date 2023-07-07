import { getColor } from "../../../utils/styles/getStyle/getColor";
import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface CheckboxToggleProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  onToggleChange?: (checked: boolean) => void;
}

const ToggleContainer = styled.label<{ disabled?: boolean }>`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 20px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  outline: none;

  &:checked + span {
    background-color: ${getColor("primary600")};
  }

  &:focus + span {
    box-shadow: ${getColor("primary600")};
  }

  &:checked + span:before {
    transform: translateX(20px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: background-color 0.4s;
  border-radius: 20px;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: transform 0.4s;
    border-radius: 50%;
  }
`;

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
