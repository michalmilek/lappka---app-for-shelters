import { EyeIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import {
  DashboardMostPopularAnimalsItemContainer,
  DashboardMostPopularAnimalsItemContainerAnimalInfoContainer,
  DashboardMostPopularAnimalsItemImage,
  DashboardMostPopularAnimalsItemInfoContainer,
  DashboardMostPopularAnimalsItemInfoContainerStyledViews,
} from "./DashboardMostPopularAnimaIstem.styled";
import { PetWithUrl } from "./DashboardMostPopularAnimals";

interface Props {
  item: PetWithUrl;
}

const DashboardMostPopularAnimalsItem = ({ item }: Props) => {
  return (
    <DashboardMostPopularAnimalsItemContainer>
      <DashboardMostPopularAnimalsItemContainerAnimalInfoContainer>
        <DashboardMostPopularAnimalsItemImage
          src={item.img}
          alt={item.name + "photo"}
        />
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
