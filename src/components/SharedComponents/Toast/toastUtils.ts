export const getMessage = (type: "success" | "error") => {
  if (type === "success") {
    return "Sukces!";
  } else if (type === "error") {
    return "Błąd!";
  }
};
