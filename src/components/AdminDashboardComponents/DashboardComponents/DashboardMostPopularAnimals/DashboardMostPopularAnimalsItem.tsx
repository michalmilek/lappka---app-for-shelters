import { EyeIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import { Pet } from "services/pet/petTypes";
import { useGetStorageImagesForId } from "services/storage/storageServices";
import {
  DashboardMostPopularAnimalsItemContainer,
  DashboardMostPopularAnimalsItemContainerAnimalInfoContainer,
  DashboardMostPopularAnimalsItemError,
  DashboardMostPopularAnimalsItemImage,
  DashboardMostPopularAnimalsItemInfoContainer,
  DashboardMostPopularAnimalsItemInfoContainerStyledViews,
  SkeletonMostPopularImg,
} from "./DashboardMostPopularAnimaIstem.styled";

interface Props {
  item: Pet;
}

const DashboardMostPopularAnimalsItem = ({ item }: Props) => {
  const {
    data: imgUrl,
    isLoading,
    isSuccess,
    isError,
  } = useGetStorageImagesForId(item.profilePhoto);

  return (
    <DashboardMostPopularAnimalsItemContainer>
      <DashboardMostPopularAnimalsItemContainerAnimalInfoContainer>
        {isLoading && <SkeletonMostPopularImg />}
        {isSuccess && (
          <DashboardMostPopularAnimalsItemImage
            src={imgUrl}
            alt={item.name + "photo"}
          />
        )}
        {isError && <DashboardMostPopularAnimalsItemError />}
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
            {item.type}
          </Typography>
        </DashboardMostPopularAnimalsItemInfoContainer>
      </DashboardMostPopularAnimalsItemContainerAnimalInfoContainer>
      <DashboardMostPopularAnimalsItemInfoContainerStyledViews>
        <EyeIcon />
        <Typography
          tag="span"
          color="darkGray2"
          variant="UI/UI Text 14 Semi Bold">
          {(Math.round(Math.random() * 4000) / 1000).toFixed(1)} tyś
        </Typography>
      </DashboardMostPopularAnimalsItemInfoContainerStyledViews>
    </DashboardMostPopularAnimalsItemContainer>
  );
};

export default DashboardMostPopularAnimalsItem;
