import {
  StyledCardImg,
  StyledCardSingleImgContainer,
} from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsCard/utils/DashboardAnimalCardsCard.styled";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  StyledCloseIcon,
  StyledProfileIcon,
} from "../FileInput/CustomFileInput.styled";
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
  const { t } = useTranslation();

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
            title={t("instructions.changeProfilePhoto")}
          />
        )}
      </StyledCardSingleImgContainer>
    </SortableItem>
  );
};

export default PhotoPreviewImage;
