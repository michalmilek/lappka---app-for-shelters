import { centerCrop, makeAspectCrop } from "react-image-crop";

export interface CustomFileInputProps {
  existingFiles?: number;
  isAddNewCard?: boolean;
  photos: string[] | File[];
  label?: string;
  description?: string;
  onFileChange: (files: File[] | null | File, index: number) => void;
  onFileDelete: (index: number) => void;
  handleIndexFileChangeForm: (files: File[]) => void;
  isUploadSuccess: boolean;
}

export function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}


export const base64StringToFile = (
  base64String: string,
  fileName: string,
  mimeType: string
): File => {
  const byteCharacters = atob(base64String.split(",")[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: mimeType });

  return new File([blob], fileName, { type: mimeType });
};
