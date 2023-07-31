import { getColor } from "../../../utils/styles/getStyle/getColor";
import { css, styled } from "styled-components";
import { ButtonProps } from "./Button";
import { getShadow } from "../../../utils/styles/getStyle/getShadow";

//TOGGLE BUTTON
//TOGGLE BUTTON
//TOGGLE BUTTON

export const ToggleButtonContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  gap: 12px;
  align-items: center;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

export const ToggleContainer = styled.label<{ disabled?: boolean }>`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 20px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

export const ToggleInput = styled.input`
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

export const ToggleSlider = styled.span`
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

//BUTTON
//BUTTON
//BUTTON

export const ReusableButton = styled.button<ButtonProps>`
  white-space: nowrap;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: 8px;
  z-index: 50;
  width: ${(props) => (props.$isFullWidth ? "100%" : "auto")};

  ${(props) =>
    props.$iconPlace === "left" &&
    css`
      flex-direction: row-reverse;
    `}

  ${(props) =>
    props.$variant === "fill" &&
    css`
      background-color: ${getColor(props.$color || "primary600")};
      color: ${getColor("lightGray5")};
      border: none;
      transition: all 400ms ease-in-out;

      &:hover {
        background-color: ${props.$color === "facebook" ||
        props.$color === "error" ||
        props.$color === "red500"
          ? getColor(props.$color)
          : getColor("primary700")};
        ${(props.$color === "facebook" ||
          props.$color === "error" ||
          props.$color === "red500") &&
        "filter: brightness(.75);"}
      }

      &:disabled {
        opacity: 50%;
      }
    `}

  ${(props) =>
    props.$variant === "outline" &&
    css`
      background-color: ${getColor(props.$color || "white")};
      color: ${getColor("darkGray2")};
      border: 1px solid ${getColor("lightGray2")};
      box-shadow: ${getShadow("xs")};
      transition: all 400ms ease-in-out;

      &:hover {
        background-color: ${getColor("lightGray5")};
      }

      &:disabled {
        opacity: 50%;
      }
    `}

  ${(props) =>
    props.$size === "XLarge" &&
    css`
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.4%;
      padding: 12px 18px;
    `}

  ${(props) =>
    props.$size === "Large" &&
    css`
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.3%;
      padding: 8px 16px;
    `}

  ${(props) =>
    props.$size === "Medium" &&
    css`
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.3%;
      padding: 4px 12px;
    `}
`;
