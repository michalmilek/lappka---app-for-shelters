import { PencilIcon } from "@heroicons/react/24/solid";
import React from "react";
import {
  StyledCloseIcon,
  StyledImgPreviewContainer,
  StyledPreviewPhoto,
  StyledProfileIcon,
} from "../FileInput/CustomFileInput.styled";
import SortableItem from "./SortableItem";

interface PhotoPreviewInterface {
  preview: string;
  index: number;
  fileName: string;
  handlePreviewImage: (preview: string, index: number) => void;
  handleRemoveFile: (index: number) => void;
  isAddNewCard?: boolean;
}

const PhotoPreviewNewPhotos = ({
  preview,
  index,
  fileName,
  handlePreviewImage,
  handleRemoveFile,
  isAddNewCard,
}: PhotoPreviewInterface) => {
  return (
    <SortableItem
      stringImg={preview}
      key={preview + index}>
      <StyledImgPreviewContainer
        addNewCard
        index={index}
        key={preview + index}>
        <StyledPreviewPhoto
          title="Kliknij, aby edytować zdjęcie"
          key={index}
          src={preview}
          alt={`Preview ${fileName}`}
          className="previewImg"
          onClick={() => {
            handlePreviewImage(preview, index);
          }}
        />
        {index === 0 && isAddNewCard && (
          <StyledProfileIcon
            className="profilePictureIcon"
            title="Zdjęcie profilowe, aby wybrać inne zdjęcie przeciągnij je na początek."
          />
        )}

        <PencilIcon
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="editBtn"
        />

        <StyledCloseIcon
          className="deleteIcon"
          title="Kliknij, aby usunąć zdjęcie"
          onClick={() => handleRemoveFile(index)}
        />
      </StyledImgPreviewContainer>
    </SortableItem>
  );
};

export default PhotoPreviewNewPhotos;
