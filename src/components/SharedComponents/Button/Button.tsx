import { getColor } from "../../../utils/styles/helpers/getColor";
import {
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
} from "@utils/styles/helpers/getFontStyle";
import { getPaddingMarginSize } from "@utils/styles/helpers/getPaddingMarginSize";
import { getShadow } from "@utils/styles/helpers/getShadow";
import {
  ButtonSize,
  ButtonVariant,
  PaddingMarginSize,
} from "@utils/styles/types/stylesTypes";
import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  pt?: PaddingMarginSize;
  pl?: PaddingMarginSize;
  pb?: PaddingMarginSize;
  pr?: PaddingMarginSize;
  mx?: PaddingMarginSize;
  my?: PaddingMarginSize;
  mt?: PaddingMarginSize;
  ml?: PaddingMarginSize;
  mb?: PaddingMarginSize;
  mr?: PaddingMarginSize;
  icon?: JSX.Element;
  iconSpacing?: PaddingMarginSize;
}

const ReusableButton = styled.button<ButtonProps>`
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.variant === "fill" &&
    css`
      background-color: ${getColor("primary600")};
      color: ${getColor("lightGray5")};
      border: none;
      transition: all 400ms ease-in-out;

      &:hover {
        background-color: ${getColor("primary700")};
      }

      &:disabled {
        opacity: 50%;
      }
    `}

  ${(props) =>
    props.variant === "outline" &&
    css`
      background-color: ${getColor("white")};
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
    props.size === "XLarge" &&
    css`
      font-size: ${getFontSize(16)};
      font-weight: ${getFontWeight(500)};
      line-height: ${getLineHeight(24)};
      letter-spacing: ${getLetterSpacing("-0.4%")};
    `}

  ${(props) =>
    props.size === "Large" &&
    css`
      font-size: ${getFontSize(16)};
      font-weight: ${getFontWeight(500)};
      line-height: ${getLineHeight(24)};
      letter-spacing: ${getLetterSpacing("-0.3%")};
    `}

  ${(props) =>
    props.size === "Medium" &&
    css`
      font-size: ${getFontSize(14)};
      font-weight: ${getFontWeight(500)};
      line-height: ${getLineHeight(24)};
      letter-spacing: ${getLetterSpacing("-0.3%")};
    `}

  ${(props) =>
    props.pt &&
    css`
      padding-top: ${props.pt};
    `}

  ${(props) =>
    props.pl &&
    css`
      padding-left: ${props.pl};
    `}

  ${(props) =>
    props.pb &&
    css`
      padding-bottom: ${props.pb};
    `}

  ${(props) =>
    props.pr &&
    css`
      padding-right: ${props.pr};
    `}

  ${(props) =>
    props.mx &&
    css`
      margin-left: ${props.mx};
      margin-right: ${props.mx};
    `}

  ${(props) =>
    props.my &&
    css`
      margin-top: ${props.my};
      margin-bottom: ${props.my};
    `}

  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `}

  ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml};
    `}

  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `}

  ${(props) =>
    props.mr &&
    css`
      margin-right: ${props.mr};
    `}


      ${(props) =>
    props.icon &&
    css`
      gap: ${props.iconSpacing && getPaddingMarginSize(props.iconSpacing)};
    `}
`;

const Button = ({
  variant = "fill",
  size = "Medium",
  children,
  icon,
  iconSpacing = "2px",
  ...rest
}: ButtonProps) => {
  return (
    <ReusableButton
      size={size}
      variant={variant}
      {...rest}>
      {children}
      {icon && icon}
    </ReusableButton>
  );
};

export default Button;
