import { EyeIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { DashboardRoutes } from "router/router";
import { Pet } from "services/pet/petTypes";
import { useGetStorageImagesForId } from "services/storage/storageServices";
import { formatCardViews, typeValueToLabel } from "utils/appUtils";
import {
  DashboardMostPopularAnimalsItemContainer,
  DashboardMostPopularAnimalsItemContainerAnimalInfoContainer,
  DashboardMostPopularAnimalsItemError,
  DashboardMostPopularAnimalsItemImage,
  DashboardMostPopularAnimalsItemInfoContainer,
  DashboardMostPopularAnimalsItemInfoContainerStyledViews,
  SkeletonMostPopularImg,
} from "./DashboardMostPopularAnimaIstem.styled";
import PetAvatar from "assets/petAvatar.jpg";

interface Props {
  item: Pet;
}

const DashboardMostPopularAnimalsItem = ({ item }: Props) => {
  const navigate = useNavigate();
  const {
    data: imgUrl,
    isLoading,
    isSuccess,
    isError,
  } = useGetStorageImagesForId(item.photos[0]);

  const { t } = useTranslation(["translation", "dashboard"]);

  return (
    <DashboardMostPopularAnimalsItemContainer
      role={"link"}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
          e.preventDefault();
          navigate(DashboardRoutes.animalCards + "/" + item.petId);
        }
      }}
      onClick={() => navigate(DashboardRoutes.animalCards + "/" + item.petId)}
      tabIndex={0}>
      <DashboardMostPopularAnimalsItemContainerAnimalInfoContainer>
        {item.photos.length === 0 ? (
          <DashboardMostPopularAnimalsItemImage
            src={PetAvatar}
            alt={item.name + " photo"}
          />
        ) : (
          <>
            {isLoading && <SkeletonMostPopularImg />}
            {isSuccess && (
              <DashboardMostPopularAnimalsItemImage
                src={imgUrl}
                alt={item.name + "photo"}
              />
            )}
            {isError && <DashboardMostPopularAnimalsItemError />}
          </>
        )}
        <DashboardMostPopularAnimalsItemInfoContainer>
          <Typography
            tag="h5"
            variant="UI/UI Text 14 Reg"
            color="darkGray2">
            {item.name}
          </Typography>
          <Typography
            tag="h6"
            variant="UI Small/UI Text 12 Reg"
            color="midGray3">
            {t(typeValueToLabel(item.animalCategory))}
          </Typography>
        </DashboardMostPopularAnimalsItemInfoContainer>
      </DashboardMostPopularAnimalsItemContainerAnimalInfoContainer>
      <DashboardMostPopularAnimalsItemInfoContainerStyledViews>
        <EyeIcon />
        <Typography
          tag="span"
          color="darkGray2"
          variant="UI/UI Text 14 Semi Bold">
          {formatCardViews(item.views)}
        </Typography>
      </DashboardMostPopularAnimalsItemInfoContainerStyledViews>
    </DashboardMostPopularAnimalsItemContainer>
  );
};

export default DashboardMostPopularAnimalsItem;
