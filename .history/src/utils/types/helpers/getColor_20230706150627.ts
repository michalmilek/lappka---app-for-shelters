import { Color } from "../stylesTypes";

export function getColor(color: Color): string {
  switch (color) {
    // Primary colors
    case "primary900":
      return "#000000";
    case "primary800":
      return "#111111";
    case "primary700":
      return "#222222";
    case "primary600":
      return "#333333";
    case "primary500":
      return "#444444";
    case "primary400":
      return "#555555";
    case "primary300":
      return "#666666";
    case "primary200":
      return "#777777";
    case "primary100":
      return "#888888";

    // Gray colors
    case "darkGray1":
      return "#111111";
    case "darkGray2":
      return "#222222";
    case "darkGray3":
      return "#333333";
    case "darkGray4":
      return "#444444";
    case "darkGray5":
      return "#555555";
    case "midGray1":
      return "#666666";
    case "midGray2":
      return "#777777";
    case "midGray3":
      return "#888888";
    case "midGray4":
      return "#999999";
    case "midGray5":
      return "#AAAAAA";
    case "lightGray1":
      return "#BBBBBB";
    case "lightGray2":
      return "#CCCCCC";
    case "lightGray3":
      return "#DDDDDD";
    case "lightGray4":
      return "#EEEEEE";
    case "lightGray5":
      return "#FFFFFF";

    // Red colors
    case "red800":
      return "#FF0000";
    case "red700":
      return "#FF1111";
    case "red600":
      return "#FF2222";
    case "red500":
      return "#FF3333";
    case "red100":
      return "#FFAAAA";

    // Status colors
    case "success":
      return "#00FF00";
    case "error":
      return "#FF0000";
    case "focus":
      return "#0000FF";

    default:
      return "#000000"; // Kolor domyślny
  }
}
