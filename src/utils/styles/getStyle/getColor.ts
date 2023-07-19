import { Color } from "utils/styles/types/stylesTypes";

export function getColor(color: Color): string {
  switch (color) {
    // Primary colors
    case "primary900":
      return "#194634";
    case "primary800":
      return "#205b43";
    case "primary700":
      return "#287154";
    case "primary600":
      return "#369871";
    case "primary500":
      return "#43be8d";
    case "primary400":
      return "#69cba4";
    case "primary300":
      return "#8fd8bb";
    case "primary200":
      return "#bbe8d6";
    case "primary100":
      return "#e1f5ed";
    case "primary050":
      return "#f0faf6";

    // Gray colors
    case "darkGray1":
      return "#1a2024";
    case "darkGray2":
      return "#252c32";
    case "darkGray3":
      return "#303940";
    case "darkGray4":
      return "#3c464e";
    case "darkGray5":
      return "#48535b";
    case "midGray1":
      return "#5b6871";
    case "midGray2":
      return "#6e7c87";
    case "midGray3":
      return "#84919a";
    case "midGray4":
      return "#9aa6ac";
    case "midGray5":
      return "#b0babf";
    case "lightGray1":
      return "#d5dadd";
    case "lightGray2":
      return "#dde2e4";
    case "lightGray3":
      return "#e5e9eb";
    case "lightGray4":
      return "#eef0f2";
    case "lightGray5":
      return "#f6f7f9";

    // Red colors
    case "red800":
      return "#8d0104";
    case "red700":
      return "#cc0905";
    case "red600":
      return "#f2271c";
    case "red500":
      return "#f76659";
    case "red100":
      return "#ffefeb";

    // Status colors
    case "success":
      return "#47D16C";
    case "error":
      return "#f76659";
    case "focus":
      return "#1a73e8";

    //blacks colors
    case "black":
      return "#000000";
    case "white":
      return "#ffffff";

    //social media colors
    case "facebook":
      return "#1877F2";

    default:
      return "#000000"; // default black color;
  }
}
