import { PaddingMarginStyles } from "utils/styles/getStyle/getPaddingMarginSize";
import { Color, PaddingMarginSize } from "@utils/styles/types/stylesTypes";
import React, { CSSProperties } from "react";
import styled, { css } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

interface FlexProps {
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  flexWrap?: CSSProperties["flexWrap"];
  flexGrow?: CSSProperties["flexGrow"];
  flexShrink?: CSSProperties["flexShrink"];
  flexBasis?: CSSProperties["flexBasis"];
  backgroundColor?: Color;
  top?: CSSProperties["top"];
  bottom?: CSSProperties["bottom"];
  left?: CSSProperties["left"];
  right?: CSSProperties["right"];
  position?: CSSProperties["position"];
  gap?: PaddingMarginSize;
  mobileGap?: PaddingMarginSize;
  children: React.ReactNode;
  ml?: PaddingMarginSize;
  mobileMl?: PaddingMarginSize;
  mr?: PaddingMarginSize;
  mobileMr?: PaddingMarginSize;
  mt?: PaddingMarginSize;
  mobileMt?: PaddingMarginSize;
  mb?: PaddingMarginSize;
  mobileMb?: PaddingMarginSize;
  mx?: PaddingMarginSize;
  mobileMx?: PaddingMarginSize;
  my?: PaddingMarginSize;
  mobileMy?: PaddingMarginSize;

  pl?: PaddingMarginSize;
  mobilePl?: PaddingMarginSize;
  pr?: PaddingMarginSize;
  mobilePr?: PaddingMarginSize;
  pt?: PaddingMarginSize;
  mobilePt?: PaddingMarginSize;
  pb?: PaddingMarginSize;
  mobilePb?: PaddingMarginSize;
  px?: PaddingMarginSize;
  mobilePx?: PaddingMarginSize;
  py?: PaddingMarginSize;
  mobilePy?: PaddingMarginSize;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  ${({ flexDirection }) =>
    flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `}
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
  ${({ flexWrap }) =>
    flexWrap &&
    css`
      flex-wrap: ${flexWrap};
    `}
  ${({ flexGrow }) =>
    flexGrow &&
    css`
      flex-grow: ${flexGrow};
    `}
  ${({ flexShrink }) =>
    flexShrink &&
    css`
      flex-shrink: ${flexShrink};
    `}
  ${({ flexBasis }) =>
    flexBasis &&
    css`
      flex-basis: ${flexBasis};
    `}
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${getColor(backgroundColor)};
    `}
  ${({ position }) =>
    position &&
    css`
      position: ${position};
    `}
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `}
  
  ${PaddingMarginStyles}

  ${({ top }) =>
    top &&
    css`
      top: ${top};
    `}
  ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom};
    `}
  ${({ left }) =>
    left &&
    css`
      left: ${left};
    `}
  ${({ right }) =>
    right &&
    css`
      right: ${right};
    `}

    @media screen and (max-width: 768px) {
    ${({ mobileGap }) =>
      mobileGap &&
      css`
        gap: ${mobileGap};
      `}
  }
`;

const Flex = ({ children, ...rest }: FlexProps) => {
  return <StyledFlex {...rest}>{children}</StyledFlex>;
};

export default Flex;
