import { getColor } from "utils/styles/getStyle/getColor";
import React from "react";
import { Link, LinkProps } from "react-router-dom";
import styled, { css } from "styled-components";
import {
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
} from "utils/styles/getStyle/getFontStyle";
import {
  Color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  TypographyType,
} from "@utils/styles/types/stylesTypes";
import { hexToRGBA } from "utils/styles/getStyle/hexToRGBA";

interface ExtendedLinkProps extends LinkProps {
  color?: Color;
  fontWeight?: fontWeight;
  fontSize?: fontSize;
  letterSpacing?: letterSpacing;
  lineHeight?: lineHeight;
  variant?: TypographyType;
  underline?: boolean;
  underlineColor?: Color;
  underlineOpacity?:
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
    props.color &&
    css`
      color: ${getColor(props.color)};
    `}

  ${(props) =>
    props.underline &&
    props.underlineColor &&
    props.underlineOpacity &&
    css`
      border-bottom: 1px solid
        ${hexToRGBA(getColor(props.underlineColor), props.underlineOpacity)};
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
`;

const AnchorLink = ({ children, ...rest }: ExtendedLinkProps) => {
  return <StyledLink {...rest}>{children}</StyledLink>;
};

export default AnchorLink;
