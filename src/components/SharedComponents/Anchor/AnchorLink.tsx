import { getColor } from "utils/styles/getStyle/getColor";
import React from "react";
import { Link, LinkProps } from "react-router-dom";
import styled, { css } from "styled-components";
import {
  TypographyVariant,
  typographyVariants,
} from "utils/styles/getStyle/getFontStyle";
import {
  Color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
} from "utils/styles/types/stylesTypes";
import { hexToRGBA } from "utils/styles/getStyle/hexToRGBA";

interface ExtendedLinkProps extends LinkProps {
  $color?: Color;
  $fontWeight?: fontWeight;
  $fontSize?: fontSize;
  $letterSpacing?: letterSpacing;
  $lineHeight?: lineHeight;
  $variant?: TypographyVariant;
  $underline?: boolean;
  $underlineColor?: Color;
  $underlineOpacity?:
    | 0
    | 0.1
    | 0.2
    | 0.3
    | 0.4
    | 0.5
    | 0.6
    | 0.7
    | 0.8
    | 0.9
    | 1;
}

const StyledLink = styled(Link)<ExtendedLinkProps>`
  text-decoration: none;
  ${(props) =>
    props.$color &&
    css`
      color: ${getColor(props.$color)};
    `}

  ${(props) =>
    props.$underline &&
    props.$underlineColor &&
    props.$underlineOpacity &&
    css`
      border-bottom: 1px solid
        ${hexToRGBA(getColor(props.$underlineColor), props.$underlineOpacity)};
    `}

    ${({ $variant }) => $variant && typographyVariants[$variant]}
`;

const AnchorLink = ({ children, ...rest }: ExtendedLinkProps) => {
  return <StyledLink {...rest}>{children}</StyledLink>;
};

export default AnchorLink;
