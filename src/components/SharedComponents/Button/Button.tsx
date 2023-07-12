import { getColor } from "../../../utils/styles/getStyle/getColor";
import {
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
} from "../../../utils/styles/getStyle/getFontStyle";
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
import { ReusableButton } from "./styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isFullWidth?: boolean;
  icon?: JSX.Element | null;
  iconSpacing?: PaddingMarginSize;
  color?: Color;
  iconPlace?: "left" | "right";
}

const Button = ({
  variant = "fill",
  size = "Medium",
  children,
  icon = null,
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
      {icon}
    </ReusableButton>
  );
};

export default Button;
