import { getColor } from "../../../utils/styles/getStyle/getColor";
import {
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
} from "../../../utils/styles/getStyle/getFontStyle";
import { getPaddingMarginSize } from "../../../utils/styles/getStyle/getPaddingMarginSize";
import { getShadow } from "../../../utils/styles/getStyle/getShadow";
import {
  ButtonSize,
  ButtonVariant,
  Color,
  PaddingMarginSize,
  TypographyType,
} from "@utils/styles/types/stylesTypes";
import React from "react";
import styled, { css } from "styled-components";
import { getBorderRadius } from "../../../utils/styles/getStyle/getBorderRadius";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  px?: PaddingMarginSize;
  py?: PaddingMarginSize;
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
  color?: Color;
  iconPlace?: "left" | "right";
  textType?: TypographyType;
}

const ReusableButton = styled.button<ButtonProps>`
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${getBorderRadius("8px")};

  ${(props) =>
    props.iconPlace === "left" &&
    css`
      flex-direction: row-reverse;
    `}

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.variant === "fill" &&
    css`
      background-color: ${getColor(props.color || "primary600")};
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
      background-color: ${getColor(props.color || "white")};
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
      padding: 12px 18px;
    `}

  ${(props) =>
    props.size === "Large" &&
    css`
      font-size: ${getFontSize(16)};
      font-weight: ${getFontWeight(500)};
      line-height: ${getLineHeight(24)};
      letter-spacing: -0.3%;
      padding: 8px 16px;
    `}

  ${(props) =>
    props.size === "Medium" &&
    css`
      font-size: ${getFontSize(14)};
      font-weight: ${getFontWeight(500)};
      line-height: ${getLineHeight(24)};
      letter-spacing: ${getLetterSpacing("-0.3%")};
      padding: 4px 12px;
    `}

      ${(props) =>
    props.px &&
    css`
      padding-left: ${props.px};
      padding-right: ${props.px};
    `}
    
      ${(props) =>
    props.py &&
    css`
      padding-top: ${props.py};
      padding-bottom: ${props.py};
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
    props.iconSpacing &&
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
      iconSpacing={iconSpacing}
      icon={icon}
      {...rest}>
      {children}
      {icon && icon}
    </ReusableButton>
  );
};

export default Button;
