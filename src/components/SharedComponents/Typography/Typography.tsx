import { getColor } from "@utils/styles/helpers/getColor";
import {
  getFontSize,
  getFontWeight,
  getLetterSpacing,
} from "@utils/styles/helpers/getFontStyle";
import {
  Color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
} from "@utils/styles/types/stylesTypes";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface TypographyProps {
  tag?: keyof JSX.IntrinsicElements;
  color?: Color;
  fontSize?: fontSize;
  fontWeight?: fontWeight;
  letterSpacing?: letterSpacing;
  lineHeight?: lineHeight;
  children: ReactNode;
}

const Typography = ({
  tag = "p",
  color = "black",
  fontSize = 16,
  fontWeight = 500,
  letterSpacing = "0%",
  children,
}: TypographyProps) => {
  const StyledTypography = styled(tag)<TypographyProps>`
    color: ${(props) => getColor(props.color as Color)};
    font-size: ${(props) => getFontSize(props.fontSize as fontSize)};
    font-weight: ${(props) => getFontWeight(props.fontWeight as fontWeight)};
    letter-spacing: ${(props) =>
      getLetterSpacing(props.letterSpacing as letterSpacing)};
  `;

  return (
    <StyledTypography
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
