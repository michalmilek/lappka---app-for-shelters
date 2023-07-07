//FONT PROPERTIES
//FONT PROPERTIES
//FONT PROPERTIES

export type fontSize = 12 | 13 | 14 | 16 | 18 | 20 | 24 | 30;

export type fontWeight = 300 | 400 | 500 | 600 | 700 | 800;

export type lineHeight = 16 | 18 | 20 | 24 | 26 | 32 | 40;

export type letterSpacing =
  | "0%"
  | "-0.6%"
  | "-0.3%"
  | "-0.4%"
  | "-1.4%"
  | "-1%"
  | "-1.9%"
  | "-0.8%"
  | "normal";

//COLORS
//COLORS
//COLORS

export type Color = primary | gray | red | status | blacks;

export type blacks = "black" | "white";

export type primary =
  | "primary900"
  | "primary800"
  | "primary700"
  | "primary600"
  | "primary500"
  | "primary400"
  | "primary300"
  | "primary200"
  | "primary100"
  | "primary050";

export type gray =
  | "darkGray1"
  | "darkGray2"
  | "darkGray3"
  | "darkGray4"
  | "darkGray5"
  | "midGray1"
  | "midGray2"
  | "midGray3"
  | "midGray4"
  | "midGray5"
  | "lightGray1"
  | "lightGray2"
  | "lightGray3"
  | "lightGray4"
  | "lightGray5";

export type red = "red800" | "red700" | "red600" | "red500" | "red100";

export type status = "success" | "error" | "focus";

// BUTTON TYPES
// BUTTON TYPES
// BUTTON TYPES

export type ButtonVariant = "fill" | "outline";
export type ButtonSize = "XLarge" | "Large" | "Medium";

//PADDING MARGIN TYPES
//PADDING MARGIN TYPES
//PADDING MARGIN TYPES

export type PaddingMarginSize = `${
  | 2
  | 4
  | 6
  | 8
  | 10
  | 12
  | 14
  | 16
  | 18
  | 20
  | 22
  | 24
  | 26
  | 28
  | 30
  | 32
  | 34
  | 36
  | 38
  | 40
  | 42
  | 44
  | 46
  | 48
  | 50
  | 52
  | 54
  | 56
  | 58
  | 60}px`;

//BOX-SHADOW TYPES
//BOX-SHADOW TYPES
//BOX-SHADOW TYPES

export type BoxShadow = "xs";

//BORDER RADIUS
//BORDER RADIUS
//BORDER RADIUS
export type BorderRadius =
  | `${
      | 2
      | 4
      | 6
      | 8
      | 10
      | 12
      | 14
      | 16
      | 18
      | 20
      | 22
      | 24
      | 26
      | 28
      | 30
      | 32
      | 34
      | 36
      | 38
      | 40
      | 42
      | 44
      | 46
      | 48
      | 9999}px`
  | "50%";
