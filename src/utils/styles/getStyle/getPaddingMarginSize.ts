import { PaddingMarginSize } from "@utils/styles/types/stylesTypes";
import { css } from "styled-components";

export function getPaddingMarginSize(size: PaddingMarginSize): string {
  switch (size) {
    case "2px":
    case "4px":
    case "6px":
    case "8px":
    case "10px":
    case "12px":
    case "14px":
    case "15px":
    case "16px":
    case "18px":
    case "20px":
    case "22px":
    case "24px":
    case "26px":
    case "28px":
    case "30px":
    case "32px":
    case "34px":
    case "36px":
    case "38px":
    case "40px":
    case "42px":
    case "44px":
    case "46px":
    case "48px":
    case "50px":
    case "52px":
    case "54px":
    case "56px":
    case "58px":
    case "60px":
      return `${size}`;
    default:
      return "";
  }
}

interface PaddingMarginStylesProps {
  icon?: boolean;
  iconSpacing?: PaddingMarginSize;
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

export const PaddingMarginStyles = css<PaddingMarginStylesProps>`
  ${(props) =>
    props.px &&
    css`
      padding-left: ${props.px};
      padding-right: ${props.px};
    `}

  ${(props) =>
    props.py &&
    css`
      padding-top: ${props.py};
      padding-bottom: ${props.py};
    `}

  ${(props) =>
    props.pt &&
    css`
      padding-top: ${props.pt};
    `}

  ${(props) =>
    props.pl &&
    css`
      padding-left: ${props.pl};
    `}

  ${(props) =>
    props.pb &&
    css`
      padding-bottom: ${props.pb};
    `}

  ${(props) =>
    props.pr &&
    css`
      padding-right: ${props.pr};
    `}

  ${(props) =>
    props.mx &&
    css`
      margin-left: ${props.mx};
      margin-right: ${props.mx};
    `}

  ${(props) =>
    props.my &&
    css`
      margin-top: ${props.my};
      margin-bottom: ${props.my};
    `}

  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `}

  ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml};
    `}

  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `}

  ${(props) =>
    props.mr &&
    css`
      margin-right: ${props.mr};
    `}


      ${(props) =>
    props.icon &&
    props.iconSpacing &&
    css`
      gap: ${props.iconSpacing && getPaddingMarginSize(props.iconSpacing)};
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