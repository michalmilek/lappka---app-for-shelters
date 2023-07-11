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

    @media screen and (max-width: 768px) {
    ${({ mobileGap }) =>
      mobileGap &&
      css`
        gap: ${mobileGap};
      `}

    ${({ mobileMl }) =>
      mobileMl &&
      css`
        margin-left: ${mobileMl};
      `}


    ${({ mobileMr }) =>
      mobileMr &&
      css`
        margin-right: ${mobileMr};
      `}

    ${({ mobileMt }) =>
      mobileMt &&
      css`
        margin-top: ${mobileMt};
      `}

    ${({ mobileMb }) =>
      mobileMb &&
      css`
        margin-top: ${mobileMb};
      `}


    ${({ mobileMx }) =>
      mobileMx &&
      css`
        margin-left: ${mobileMx};
        margin-right: ${mobileMx};
      `}


    ${({ mobileMy }) =>
      mobileMy &&
      css`
        margin-top: ${mobileMy};
        margin-bottom: ${mobileMy};
      `}


          ${({ mobilePl }) =>
      mobilePl &&
      css`
        padding-left: ${mobilePl};
      `}


          ${({ mobilePr }) =>
      mobilePr &&
      css`
        padding-right: ${mobilePr};
      `}


          ${({ mobilePt }) =>
      mobilePt &&
      css`
        padding-top: ${mobilePt};
      `}

          ${({ mobilePb }) =>
      mobilePb &&
      css`
        padding-bottom: ${mobilePb};
      `}

    ${({ mobilePx }) =>
      mobilePx &&
      css`
        padding-left: ${mobilePx};
        padding-right: ${mobilePx};
      `}


    ${({ mobilePy }) =>
      mobilePy &&
      css`
        padding-top: ${mobilePy};
        padding-bottom: ${mobilePy};
      `}
  }
`;

const Flex = ({ children, ...rest }: FlexProps) => {
  return <StyledFlex {...rest}>{children}</StyledFlex>;
};

export default Flex;
