import { centerCrop, makeAspectCrop } from "react-image-crop";

export interface CustomFileInputProps {
  existingFiles?: number;
  isAddNewCard?: boolean;
  photos: string[] | File[];
  label?: string;
  description?: string;
  onFileChange: (files: File[] | null | File) => void;
  onFileDelete: (index: number) => void;
  handleIndexFileChangeForm: (files: File[]) => void;
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
