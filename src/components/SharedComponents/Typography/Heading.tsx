import { getColor } from "../../../utils/styles/getStyle/getColor";
import {
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
} from "../../../utils/styles/getStyle/getFontStyle";
import { getPaddingMarginSize } from "../../../utils/styles/getStyle/getPaddingMarginSize";
import { getShadow } from "../../../utils/styles/getStyle/getShadow";
import { PaddingMarginSize } from "@utils/styles/types/stylesTypes";
import {
  Color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
} from "@utils/styles/types/stylesTypes";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface StyledHeadingProps {
  color?: Color;
  fontSize?: fontSize;
  fontWeight?: fontWeight;
  letterSpacing?: letterSpacing;
  lineHeight?: lineHeight;
}

const StyledHeading = styled.div<StyledHeadingProps>`
  color: ${(props) => getColor(props.color as Color)};
  font-size: ${(props) => getFontSize(props.fontSize as fontSize)};
  font-weight: ${(props) => getFontWeight(props.fontWeight as fontWeight)};
  letter-spacing: ${(props) =>
    getLetterSpacing(props.letterSpacing as letterSpacing)};
`;

interface HeadingProps extends StyledHeadingProps {
  as: keyof JSX.IntrinsicElements; // Dynamiczny wybór tagu komponentu
  children: ReactNode;
}

const Heading = ({
  as,
  color = "black",
  fontSize = 16,
  fontWeight = 500,
  letterSpacing = "0%",
  children,
}: HeadingProps) => {
  return (
    <StyledHeading
      as={as}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
