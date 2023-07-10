import { PaddingMarginSize } from "@utils/styles/types/stylesTypes";
import React, { CSSProperties } from "react";
import styled, { css } from "styled-components";

interface FlexProps {
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  flexWrap?: CSSProperties["flexWrap"];
  flexGrow?: CSSProperties["flexGrow"];
  flexShrink?: CSSProperties["flexShrink"];
  flexBasis?: CSSProperties["flexBasis"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  backgroundColor?: CSSProperties["backgroundColor"];
  top?: CSSProperties["top"];
  bottom?: CSSProperties["bottom"];
  left?: CSSProperties["left"];
  right?: CSSProperties["right"];
  position?: CSSProperties["position"];
  color?: CSSProperties["color"];
  gap?: PaddingMarginSize;
  children: React.ReactNode;
  ml?: PaddingMarginSize;
  mr?: PaddingMarginSize;
  mt?: PaddingMarginSize;
  mb?: PaddingMarginSize;
  mx?: PaddingMarginSize;
  my?: PaddingMarginSize;

  pl?: PaddingMarginSize;
  pr?: PaddingMarginSize;
  pt?: PaddingMarginSize;
  pb?: PaddingMarginSize;
  px?: PaddingMarginSize;
  py?: PaddingMarginSize;
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
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
  ${({ position }) =>
    position &&
    css`
      position: ${position};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `}
  ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml};
    `}
  ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr};
    `}
  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}
  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb};
    `}
  ${({ mx }) =>
    mx &&
    css`
      margin-left: ${mx};
      margin-right: ${mx};
    `}
  ${({ my }) =>
    my &&
    css`
      margin-top: ${my};
      margin-bottom: ${my};
    `}
  ${({ pl }) =>
    pl &&
    css`
      padding-left: ${pl};
    `}
  ${({ pr }) =>
    pr &&
    css`
      padding-right: ${pr};
    `}
  ${({ pt }) =>
    pt &&
    css`
      padding-top: ${pt};
    `}
  ${({ pb }) =>
    pb &&
    css`
      padding-bottom: ${pb};
    `}
  ${({ px }) =>
    px &&
    css`
      padding-left: ${px};
      padding-right: ${px};
    `}
  ${({ py }) =>
    py &&
    css`
      padding-top: ${py};
      padding-bottom: ${py};
    `}
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
`;

const Flex = ({ children, ...rest }: FlexProps) => {
  return <StyledFlex {...rest}>{children}</StyledFlex>;
};

export default Flex;
