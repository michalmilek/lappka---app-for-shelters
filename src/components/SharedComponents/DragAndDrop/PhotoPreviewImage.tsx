import { useQueryClient } from "@tanstack/react-query";
import {
  StyledCardImg,
  StyledCardSingleImgContainer,
} from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsCard/utils/DashboardAnimalCardsCard.styled";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";
import { useDeleteStorageImage } from "services/storage/storageServices";
import toastService from "singletons/toastService";
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
}

const PhotoPreviewImage = ({
  isEditOn,
  photo,
  index,
  id,
}: PhotoPreviewInterface) => {
  const dispatch = useDispatch();
  const { mutate: deleteImageFn, isLoading: isLoadingDeleteStorageImage } =
    useDeleteStorageImage();

  const queryClient = useQueryClient();

  useEffect(() => {
    if (isLoadingDeleteStorageImage) {
      dispatch(setLoading(true));
    } else {
      dispatch(setLoading(false));
    }
  });

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
              deleteImageFn(photo, {
                onSuccess: () => {
                  toastService.showToast(
                    `Zdjęcie nr${index + 1} usunięte pomyślnie`,
                    "success"
                  );
                  queryClient.invalidateQueries({
                    queryKey: ["shelterCardsCard", id],
                  });
                },
              });
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
