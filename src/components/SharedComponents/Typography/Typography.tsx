import { getColor } from "../../../utils/styles/getStyle/getColor";
import { typographyVariants } from "../../../utils/styles/getStyle/getFontStyle";
import {
  Color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  TypographyType,
} from "@utils/styles/types/stylesTypes";
import React, { CSSProperties, ReactNode } from "react";
import styled, { css } from "styled-components";

interface TypographyProps {
  tag?: keyof JSX.IntrinsicElements;
  color?: Color;
  fontSize?: fontSize;
  fontWeight?: fontWeight;
  letterSpacing?: letterSpacing;
  lineHeight?: lineHeight;
  variant?: TypographyType;
  position?: CSSProperties["position"];
  top?: CSSProperties["top"];
  left?: CSSProperties["left"];
  right?: CSSProperties["right"];
  bottom?: CSSProperties["bottom"];
  children: ReactNode;
}

const StyledTypography = styled.div<TypographyProps>`
  ${(props) =>
    props.color &&
    css`
      color: ${getColor(props.color)};
    `}

  ${({ variant }) => variant && typographyVariants[variant]}

          ${(props) =>
    props.position &&
    css`
      position: ${props.position};
    `}

                      ${(props) =>
    props.top &&
    css`
      top: ${props.top};
    `}

              ${(props) =>
    props.left &&
    css`
      left: ${props.left};
    `}

              ${(props) =>
    props.bottom &&
    css`
      bottom: ${props.bottom};
    `}

              ${(props) =>
    props.right &&
    css`
      right: ${props.right};
    `}
`;

const Typography = ({
  tag = "p",
  color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  variant,
  children,
  ...rest
}: TypographyProps) => {
  return (
    <StyledTypography
      as={tag}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
      color={color}
      variant={variant}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...rest}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
