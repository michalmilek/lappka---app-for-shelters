export function hexToRGBA(hex: string, opacity: number) {
  const cleanedHex = hex.replace("#", "");
  const red = parseInt(cleanedHex.substring(0, 2), 16);
  const green = parseInt(cleanedHex.substring(2, 4), 16);
  const blue = parseInt(cleanedHex.substring(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}
