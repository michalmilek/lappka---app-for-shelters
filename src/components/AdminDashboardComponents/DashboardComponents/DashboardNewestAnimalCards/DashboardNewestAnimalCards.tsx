import Button from "components/SharedComponents/Button/Button";
import Divider from "components/SharedComponents/Divider/Divider";
import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import {
  DashboardNewestAnimalCardsContainer,
  DashboardNewestAnimalCardsContainerContent,
  DashboardNewestAnimalCardsContainerHeader,
} from "./DashboardNewestAnimalCards.styled";
import DashboardNewestAnimalCardsItem from "./DashboardNewestAnimalCardsItem";

const DashboardNewestAnimalCards = () => {
  return (
    <DashboardNewestAnimalCardsContainer className="flex flex-col bg-white gap-2 pt-2 py-4 px-6 shadow-lg rounded-lg">
      <DashboardNewestAnimalCardsContainerHeader className="flex items-center justify-between py-2 border-b">
        <Typography
          tag="h3"
          $variant="UI/UI Text 16 Semi Bold">
          Najnowsze karty zwierząt
        </Typography>
        <Button
          $variant="outline"
          $size="Medium">
          Wszystkie
        </Button>
      </DashboardNewestAnimalCardsContainerHeader>
      <Divider />
      <DashboardNewestAnimalCardsContainerContent>
        <DashboardNewestAnimalCardsItem />
        <DashboardNewestAnimalCardsItem />
        <DashboardNewestAnimalCardsItem />
      </DashboardNewestAnimalCardsContainerContent>
    </DashboardNewestAnimalCardsContainer>
  );
};

export default DashboardNewestAnimalCards;
