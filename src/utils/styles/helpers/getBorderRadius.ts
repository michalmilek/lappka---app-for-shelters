import { BorderRadius } from "@utils/styles/types/stylesTypes";

export function getBorderRadius(borderRadius: BorderRadius): string {
  switch (borderRadius) {
    case "2px":
    case "4px":
    case "6px":
    case "8px":
    case "10px":
    case "12px":
    case "14px":
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
    case "9999px":
      return `${borderRadius}`;
    case "50%":
      return "50%";
    default:
      return "0px";
  }
}
