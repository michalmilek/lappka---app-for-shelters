import { useShelterCards } from "apiCalls/pet/petHooks";
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
import SkeletonNewestAnimalCards from "./SkeletonNewestAnimalCards";

const DashboardNewestAnimalCards = () => {
  const { isLoading, data, isError, error } = useShelterCards();

  if (isLoading) {
    <SkeletonNewestAnimalCards />;
  }

  return (
    <DashboardNewestAnimalCardsContainer>
      <DashboardNewestAnimalCardsContainerHeader>
        <Typography
          tag="h3"
          variant="UI/UI Text 16 Semi Bold">
          Najnowsze karty zwierząt
        </Typography>
        <Button
          variant="outline"
          size="Medium">
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
