import {
  StyledCardImg,
  StyledCardSingleImgContainer,
} from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsCard/utils/DashboardAnimalCardsCard.styled";
import React from "react";
import {
  StyledCloseIcon,
  StyledProfileIcon,
} from "../Inputs/CustomFileInput.styled";
import SortableItem from "./SortableItem";

interface PhotoPreviewInterface {
  isEditOn: boolean;
  photo: string;
  index: number;
  id: string;
  removePhotoAtIndex: (indexToRemove: number) => void;
}

const PhotoPreviewImage = ({
  removePhotoAtIndex,
  isEditOn,
  photo,
  index,
  id,
}: PhotoPreviewInterface) => {
  return (
    <SortableItem
      stringImg={photo}
      key={photo + index}>
      <StyledCardSingleImgContainer key={photo + index}>
        <StyledCardImg
          src={photo}
          alt={`gallery photo nr${index} `}
        />
        {isEditOn && (
          <StyledCloseIcon
            onClick={() => {
              removePhotoAtIndex(index);
            }}
          />
        )}

        {index === 0 && (
          <StyledProfileIcon
            className="profilePictureIcon"
            title="Zdjęcie profilowe, aby wybrać inne zdjęcie przeciągnij je na początek."
          />
        )}
      </StyledCardSingleImgContainer>
    </SortableItem>
  );
};

export default PhotoPreviewImage;
