import React from "react";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import Typography from "../Typography/Typography";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  unit?: string;
  label?: string;
  error?: string | null;
}
const InputFullContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  min-width: 50px;
`;

const InputContainer = styled.div<CustomInputProps>`
  display: flex;
  align-items: center;
  position: relative;
  ${(props) =>
    props.error
      ? css`
          border: 1px solid ${getColor("error")};
        `
      : css`
          border: 1px solid ${getColor("lightGray1")};
        `}
  border-radius: 6px 9px 9px 6px;
`;

const InputBox = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.6%;
  border-radius: 8px;
  color: ${getColor("darkGray2")};

  &::placeholder {
    color: ${getColor("midGray4")};
  }

  &:focus-visible {
    outline: 1px solid ${getColor("focus")};
  }
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
  border-radius: 0 8px 8px 0;
`;

const InputNumberWithUnits: React.FC<CustomInputProps> = ({
  value,
  unit,
  label,
  error,
  ...rest
}) => {
  const { t } = useTranslation();

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
      <InputContainer error={error}>
        <InputBox
          tabIndex={0}
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
      <Typography
        tag="span"
        color="error"
        variant="UI Small/UI Text 13 Med">
        {error}
      </Typography>
    </InputFullContainer>
  );
};

export default InputNumberWithUnits;
