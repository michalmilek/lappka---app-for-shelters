import { getColor } from "../../../utils/styles/getStyle/getColor";
import {
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
} from "../../../utils/styles/getStyle/getFontStyle";
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

  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${getFontSize(props.fontSize)};
    `}
    
      ${(props) =>
    props.fontWeight &&
    css`
      font-weight: ${getFontWeight(props.fontWeight)};
    `}

      ${(props) =>
    props.letterSpacing &&
    css`
      letter-spacing: ${getLetterSpacing(props.letterSpacing)};
    `}

    ${(props) =>
    props.variant === "Heading 30 Semi" &&
    css`
      font-size: ${getFontSize(30)};
      font-weight: ${getFontWeight(600)};
      line-height: ${getLineHeight(40)};
      letter-spacing: ${getLetterSpacing("-0.8%")};
    `}

    ${(props) =>
    props.variant === "Heading 24 Semi Bold" &&
    css`
      font-size: ${getFontSize(24)};
      font-weight: ${getFontWeight(600)};
      line-height: ${getLineHeight(32)};
      letter-spacing: ${getLetterSpacing("-1.9%")};
    `}


    ${(props) =>
    props.variant === "Heading 20 Semi Bold" &&
    css`
      font-size: ${getFontSize(20)};
      font-weight: ${getFontWeight(600)};
      line-height: ${getLineHeight(26)};
      letter-spacing: ${getLetterSpacing("-1%")};
    `}


    ${(props) =>
    props.variant === "Heading 18 Semi Bold" &&
    css`
      font-size: ${getFontSize(18)};
      font-weight: ${getFontWeight(600)};
      line-height: ${getLineHeight(24)};
      letter-spacing: ${getLetterSpacing("-1.4%")};
    `}


    ${(props) =>
    props.variant === "UI/UI Text 16 Semi Bold" &&
    css`
      font-size: ${getFontSize(16)};
      font-weight: ${getFontWeight(600)};
      line-height: ${getLineHeight(24)};
      letter-spacing: ${getLetterSpacing("-0.4%")};
    `}


    ${(props) =>
    props.variant === "UI/UI Text 16 Medium Bold" &&
    css`
      font-size: ${getFontSize(16)};
      font-weight: ${getFontWeight(500)};
      line-height: ${getLineHeight(24)};
      letter-spacing: ${getLetterSpacing("-0.4%")};
    `}

    ${(props) =>
    props.variant === "UI/UI Text 14 Reg" &&
    css`
      font-size: ${getFontSize(14)};
      font-weight: ${getFontWeight(400)};
      line-height: ${getLineHeight(24)};
      letter-spacing: ${getLetterSpacing("-0.6%")};
    `}

    ${(props) =>
    props.variant === "Running Text / Paragraph 14 Reg" &&
    css`
      font-size: ${getFontSize(14)};
      font-weight: ${getFontWeight(400)};
      line-height: ${getLineHeight(20)};
      letter-spacing: ${getLetterSpacing("-0.6%")};
    `}


    ${(props) =>
    props.variant === "UI/UI Text 14 Semi Bold" &&
    css`
      font-size: ${getFontSize(14)};
      font-weight: ${getFontWeight(600)};
      line-height: ${getLineHeight(24)};
      letter-spacing: ${getLetterSpacing("-0.6%")};
    `}

    ${(props) =>
    props.variant === "UI/UI Text 14 Med" &&
    css`
      font-size: ${getFontSize(14)};
      font-weight: ${getFontWeight(500)};
      line-height: ${getLineHeight(20)};
      letter-spacing: ${getLetterSpacing("-0.3%")};
    `}

    ${(props) =>
    props.variant === "UI/UI Table Numbers 14 Reg" &&
    css`
      font-size: ${getFontSize(14)};
      font-weight: ${getFontWeight(400)};
      line-height: ${getLineHeight(24)};
      letter-spacing: ${getLetterSpacing("-0.6%")};
    `}

    ${(props) =>
    props.variant === "UI Small/UI Text 13 Med" &&
    css`
      font-size: ${getFontSize(13)};
      font-weight: ${getFontWeight(500)};
      line-height: ${getLineHeight(18)};
      letter-spacing: ${getLetterSpacing("0%")};
    `}

    ${(props) =>
    props.variant === "UI Small/UI Text 13 Reg" &&
    css`
      font-size: ${getFontSize(13)};
      font-weight: ${getFontWeight(400)};
      line-height: ${getLineHeight(16)};
      letter-spacing: ${getLetterSpacing("0%")};
    `}

    ${(props) =>
    props.variant === "UI Small/UI Text 12 Reg" &&
    css`
      font-size: ${getFontSize(12)};
      font-weight: ${getFontWeight(400)};
      line-height: ${getLineHeight(16)};
      letter-spacing: ${getLetterSpacing("0%")};
    `}

    ${(props) =>
    props.variant === "UI Small/UI Text 12 Semi Bold" &&
    css`
      font-size: ${getFontSize(12)};
      font-weight: ${getFontWeight(600)};
      line-height: ${getLineHeight(16)};
      letter-spacing: ${getLetterSpacing("0%")};
    `}

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
