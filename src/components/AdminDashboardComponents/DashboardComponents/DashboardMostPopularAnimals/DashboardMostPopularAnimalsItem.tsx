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

const DashboardMostPopularAnimalsItem = () => {
  return (
    <DashboardMostPopularAnimalsItemContainer>
      <DashboardMostPopularAnimalsItemContainerAnimalInfoContainer className="flex items-center gap-4 w-full">
        <DashboardMostPopularAnimalsItemImage
          src={
            "https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg"
          }
          alt=""
        />
        <DashboardMostPopularAnimalsItemInfoContainer>
          <Typography
            tag="h5"
            $variant="UI/UI Text 14 Reg"
            $color="darkGray2">
            Ninka
          </Typography>
          <Typography
            tag="h6"
            $variant="UI Small/UI Text 12 Reg"
            $color="midGray3">
            Kot
          </Typography>
        </DashboardMostPopularAnimalsItemInfoContainer>
      </DashboardMostPopularAnimalsItemContainerAnimalInfoContainer>
      <DashboardMostPopularAnimalsItemInfoContainerStyledViews>
        <EyeIcon />
        <Typography
          tag="span"
          $color="darkGray2"
          $variant="UI/UI Text 14 Semi Bold">
          {(Math.round(Math.random() * 4000) / 1000).toFixed(1)} tyś
        </Typography>
      </DashboardMostPopularAnimalsItemInfoContainerStyledViews>
    </DashboardMostPopularAnimalsItemContainer>
  );
};

export default DashboardMostPopularAnimalsItem;
