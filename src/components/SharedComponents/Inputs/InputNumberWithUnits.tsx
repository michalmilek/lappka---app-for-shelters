import React from "react";
import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import Typography from "../Typography/Typography";

const InputFullContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid ${getColor("lightGray2")};
  border-radius: 6px;
`;

const InputBox = styled.input`
  flex: 1;
  height: 40px;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.6%;
  color: ${getColor("darkGray2")};
`;

const IconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 40px;
  width: 40px;
  background: ${getColor("lightGray1")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  unit?: string;
  label?: string;
}

const InputNumberWithUnits: React.FC<CustomInputProps> = ({
  value,
  unit,
  label,
  ...rest
}) => {
  return (
    <InputFullContainer>
      {label && (
        <Typography
          tag="label"
          variant="UI Small/UI Text 13 Med"
          color="darkGray2">
          {label}
        </Typography>
      )}
      <InputContainer>
        <InputBox
          type="number"
          value={value}
          {...rest}
        />
        {unit && (
          <IconContainer>
            <Typography
              variant="UI/UI Text 14 Reg"
              color="midGray2">
              {unit}
            </Typography>
          </IconContainer>
        )}
      </InputContainer>
    </InputFullContainer>
  );
};

export default InputNumberWithUnits;
