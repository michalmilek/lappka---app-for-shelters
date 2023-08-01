import { getShelterCards } from "apiCalls/pet/pet";
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
  const { isLoading, data, isError, error, isSuccess } = useShelterCards();

  if (isLoading) {
    return <SkeletonNewestAnimalCards />;
  }

  if (isError) {
    console.log(error);
  }

  if (isSuccess && data) {
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
          {data.items.slice(0, 3).map((item) => (
            <DashboardNewestAnimalCardsItem
              key={item.id}
              item={item}
            />
          ))}
        </DashboardNewestAnimalCardsContainerContent>
      </DashboardNewestAnimalCardsContainer>
    );
  }

  return null;
};

export default DashboardNewestAnimalCards;
