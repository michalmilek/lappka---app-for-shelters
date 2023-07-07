import { BoxShadow } from "@utils/styles/types/stylesTypes";

export function getShadow(shadow: BoxShadow): string {
  switch (shadow) {
    case "xs":
      return "0 1px 2px 0 rgba(16, 24, 45, 0.05)";
    default:
      return "";
  }
}
