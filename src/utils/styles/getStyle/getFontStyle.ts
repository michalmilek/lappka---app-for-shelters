import { css } from "styled-components";

export const typographyVariants = {
  "Heading 30 Semi": css`
    font-size: 30px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -0.8%;
  `,
  "Heading 24 Semi Bold": css`
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -1.9%;
  `,
  "Heading 20 Semi Bold": css`
    font-size: 20;
    font-weight: 600;
    line-height: 26;
    letter-spacing: -1%;
  `,
  "Heading 18 Semi Bold": css`
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -1.4%;
  `,
  "UI/UI Text 16 Semi Bold": css`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.4%;
  `,
  "UI/UI Text 16 Medium Bold": css`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.4%;
  `,
  "UI/UI Text 14 Reg": css`
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.6%;
  `,
  "UI/UI Text 14 Semi Bold": css`
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.6%;
  `,
  "Running Text / Paragraph 14 Reg": css`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.6%;
  `,
  "UI/UI Text 14 Med": css`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.3%;
  `,
  "UI/UI Table Numbers 14 Reg": css`
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.6%;
  `,
  "UI Small/UI Text 13 Med": css`
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0%;
  `,
  "UI Small/UI Text 13 Reg": css`
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0%;
  `,
  "UI Small/UI Text 12 Reg": css`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0%;
  `,
  "UI Small/UI Text 12 Semi Bold": css`
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0%;
  `,
};

export type TypographyVariant = keyof typeof typographyVariants;
