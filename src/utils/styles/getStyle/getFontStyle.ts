import { css } from "styled-components";
import {
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
} from "../types/stylesTypes";

export function getFontWeight(fontWeight: fontWeight): number {
  switch (fontWeight) {
    case 300:
      return 300;
    case 400:
      return 400;
    case 500:
      return 500;
    case 600:
      return 600;
    case 700:
      return 700;
    case 800:
      return 800;
    default:
      return 500; // default to regular font weight
  }
}

export function getLineHeight(lineHeight: lineHeight): string {
  switch (lineHeight) {
    case 16:
      return "16px";
    case 18:
      return "18px";
    case 20:
      return "20px";
    case 24:
      return "24px";
    case 26:
      return "26px";
    case 32:
      return "32px";
    case 40:
      return "40px";
    default:
      return "14px"; // default to normal line height
  }
}

export function getFontSize(fontSize: fontSize): string {
  switch (fontSize) {
    case 12:
      return "12px";
    case 13:
      return "13px";
    case 14:
      return "14px";
    case 16:
      return "16px";
    case 18:
      return "18px";
    case 20:
      return "20px";
    case 24:
      return "24px";
    case 30:
      return "30px";
    default:
      return "16px"; // default to a standard font size
  }
}

export function getLetterSpacing(letterSpacing: letterSpacing): string {
  switch (letterSpacing) {
    case "0%":
      return "0";
    case "-0.6%":
      return "-0.6%";
    case "-0.3%":
      return "-0.3%";
    case "-0.4%":
      return "-0.4%m";
    case "-1.4%":
      return "-1.4%";
    case "-1%":
      return "-1%";
    case "-1.9%":
      return "-1.9%";
    case "-0.8%":
      return "-0.8%";
    default:
      return "normal"; // default to normal letter spacing
  }
}

export const typographyVariants = {
  "Heading 30 Semi": css`
    font-size: ${getFontSize(30)};
    font-weight: ${getFontWeight(600)};
    line-height: ${getLineHeight(40)};
    letter-spacing: ${getLetterSpacing("-0.8%")};
  `,
  "Heading 24 Semi Bold": css`
    font-size: ${getFontSize(24)};
    font-weight: ${getFontWeight(600)};
    line-height: ${getLineHeight(32)};
    letter-spacing: ${getLetterSpacing("-1.9%")};
  `,
  "Heading 20 Semi Bold": css`
    font-size: ${getFontSize(20)};
    font-weight: ${getFontWeight(600)};
    line-height: ${getLineHeight(26)};
    letter-spacing: ${getLetterSpacing("-1%")};
  `,
  "Heading 18 Semi Bold": css`
    font-size: ${getFontSize(18)};
    font-weight: ${getFontWeight(600)};
    line-height: ${getLineHeight(24)};
    letter-spacing: ${getLetterSpacing("-1.4%")};
  `,
  "UI/UI Text 16 Semi Bold": css`
    font-size: ${getFontSize(16)};
    font-weight: ${getFontWeight(600)};
    line-height: ${getLineHeight(24)};
    letter-spacing: ${getLetterSpacing("-0.4%")};
  `,
  "UI/UI Text 16 Medium Bold": css`
    font-size: ${getFontSize(16)};
    font-weight: ${getFontWeight(500)};
    line-height: ${getLineHeight(24)};
    letter-spacing: ${getLetterSpacing("-0.4%")};
  `,
  "UI/UI Text 14 Reg": css`
    font-size: ${getFontSize(14)};
    font-weight: ${getFontWeight(400)};
    line-height: ${getLineHeight(24)};
    letter-spacing: ${getLetterSpacing("-0.6%")};
  `,
  "UI/UI Text 14 Semi Bold": css`
    font-size: ${getFontSize(14)};
    font-weight: ${getFontWeight(600)};
    line-height: ${getLineHeight(24)};
    letter-spacing: ${getLetterSpacing("-0.6%")};
  `,
  "Running Text / Paragraph 14 Reg": css`
    font-size: ${getFontSize(14)};
    font-weight: ${getFontWeight(400)};
    line-height: ${getLineHeight(20)};
    letter-spacing: ${getLetterSpacing("-0.6%")};
  `,
  "UI/UI Text 14 Med": css`
    font-size: ${getFontSize(14)};
    font-weight: ${getFontWeight(500)};
    line-height: ${getLineHeight(20)};
    letter-spacing: ${getLetterSpacing("-0.3%")};
  `,
  "UI/UI Table Numbers 14 Reg": css`
    font-size: ${getFontSize(14)};
    font-weight: ${getFontWeight(400)};
    line-height: ${getLineHeight(24)};
    letter-spacing: ${getLetterSpacing("-0.6%")};
  `,
  "UI Small/UI Text 13 Med": css`
    font-size: ${getFontSize(13)};
    font-weight: ${getFontWeight(500)};
    line-height: ${getLineHeight(18)};
    letter-spacing: ${getLetterSpacing("0%")};
  `,
  "UI Small/UI Text 13 Reg": css`
    font-size: ${getFontSize(13)};
    font-weight: ${getFontWeight(400)};
    line-height: ${getLineHeight(16)};
    letter-spacing: ${getLetterSpacing("0%")};
  `,
  "UI Small/UI Text 12 Reg": css`
    font-size: ${getFontSize(12)};
    font-weight: ${getFontWeight(400)};
    line-height: ${getLineHeight(16)};
    letter-spacing: ${getLetterSpacing("0%")};
  `,
  "UI Small/UI Text 12 Semi Bold": css`
    font-size: ${getFontSize(12)};
    font-weight: ${getFontWeight(600)};
    line-height: ${getLineHeight(16)};
    letter-spacing: ${getLetterSpacing("0%")};
  `,
};

export type TypographyVariant = keyof typeof typographyVariants;
