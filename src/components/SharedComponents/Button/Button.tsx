import {
  ButtonSize,
  ButtonVariant,
  Color,
  PaddingMarginSize,
} from "../../../utils/styles/types/stylesTypes";
import React from "react";
import { ReusableButton } from "./Button.styled";

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
