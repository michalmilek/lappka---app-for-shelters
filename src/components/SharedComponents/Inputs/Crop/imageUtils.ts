export function createFormDataFromBase64(
  base64Array: string[],
  fileNames: string[]
) {
  const formData = new FormData();
  base64Array.forEach((base64, index) => {
    const file = dataURLtoFile(base64, fileNames[index]);
    formData.append(`file-${index}`, file);
  });
  return formData;
}

export function dataURLtoFile(dataURL: string, fileName: string) {
  const arr = dataURL.split(",");

  const mimeMatch = arr[0].match(/:(.*?);/);
  if (!mimeMatch || mimeMatch.length < 2) {
    throw new Error("Niepoprawny format dataURL lub brak nagłówka MIME.");
  }

  const mime = mimeMatch[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName, { type: mime });
}
