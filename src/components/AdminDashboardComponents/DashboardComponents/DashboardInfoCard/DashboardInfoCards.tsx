import { useShelterStats } from "services/pet/petServices";
import React from "react";
import { StyledDashboardInfoCardsContainer } from "./DashboardInfoCards.styled";
import DashboardInfoCardsItem from "./DashboardInfoCardsItem";
import {
  HeartGreenIcon,
  IdentificationIcon,
  SearchCircleIcon,
  UserCircleIcon,
} from "components/SharedComponents/icons/icons";

const DashboardInfoCards = () => {
  const { data, isLoading, isError, error, isSuccess } = useShelterStats();

  if (isError) {
    console.log(error);
  }

  return (
    <StyledDashboardInfoCardsContainer>
      <DashboardInfoCardsItem
        icon={<IdentificationIcon />}
        isLoading={isLoading}
        text="Karty zwierząt"
        number={data ? data.cardCount : 0}
        gridArea="a"
      />
      <DashboardInfoCardsItem
        icon={<SearchCircleIcon />}
        isLoading={isLoading}
        text="Szuka właściciela"
        number={data ? data.toAdoptCount : 0}
        gridArea="f"
      />
      <DashboardInfoCardsItem
        icon={<UserCircleIcon />}
        isLoading={isLoading}
        text="Z właścicielem"
        number={data ? data.adoptedCount : 0}
        gridArea="g"
      />
      <DashboardInfoCardsItem
        icon={<HeartGreenIcon />}
        isLoading={isLoading}
        text="Wolontariat (ilość osób)"
        number={data ? data.volunteerCount : 0}
        gridArea="h"
      />
    </StyledDashboardInfoCardsContainer>
  );
};

export default DashboardInfoCards;
