import { getShelterCards } from "services/pet/pet";
import { useShelterCards } from "services/pet/petServices";
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
import DashboardNewestAnimalCardsItemContainerSkeleton from "./DashboardNewestAnimalCardsItemContainerSkeleton";

const DashboardNewestAnimalCards = () => {
  const { isLoading, data, isError, error, isSuccess } = useShelterCards();

  if (isError) {
    console.log(error);
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
        {isLoading && (
          <>
            <DashboardNewestAnimalCardsItemContainerSkeleton />
            <DashboardNewestAnimalCardsItemContainerSkeleton />
            <DashboardNewestAnimalCardsItemContainerSkeleton />
          </>
        )}
        {isSuccess &&
          data &&
          data.items.slice(0, 3).map((item, index) => (
            <DashboardNewestAnimalCardsItem
              key={item.id + index}
              item={item}
            />
          ))}
      </DashboardNewestAnimalCardsContainerContent>
    </DashboardNewestAnimalCardsContainer>
  );
};

export default DashboardNewestAnimalCards;
