import {
  ButtonSize,
  ButtonVariant,
  Color,
  PaddingMarginSize,
} from "../../../utils/styles/types/stylesTypes";
import React from "react";
import { ReusableButton } from "./Button.styled";
import useDeviceType from "hooks/useDeviceType";

export interface ButtonProps extends React.ComponentProps<"button"> {
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
  const deviceType = useDeviceType();

  return (
    <ReusableButton
      size={size}
      variant={variant}
      iconSpacing={iconSpacing}
      icon={icon}
      {...rest}>
      <>
        {children}
        {deviceType !== "mobile" && icon}
      </>
    </ReusableButton>
  );
};

export default Button;
