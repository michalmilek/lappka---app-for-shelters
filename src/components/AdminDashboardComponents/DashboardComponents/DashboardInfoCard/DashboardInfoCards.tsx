import { useShelterStats } from "apiCalls/pet/petHooks";
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

  console.log(data);

    return (
      <StyledDashboardInfoCardsContainer>
        <DashboardInfoCardsItem
          icon={<IdentificationIcon />}
          isLoading={isLoading}
          text="Karty zwierząt"
          number={data ? data.cardCount : 0}
        />
        <DashboardInfoCardsItem
          icon={<SearchCircleIcon />}
          isLoading={isLoading}
          text="Szuka właściciela"
          number={data ? data.toAdoptCount : 0}
        />
        <DashboardInfoCardsItem
          icon={<UserCircleIcon />}
          isLoading={isLoading}
          text="Z właścicielem"
          number={data ? data.adoptedCount : 0}
        />
        <DashboardInfoCardsItem
          icon={<HeartGreenIcon />}
          isLoading={isLoading}
          text="Wolontariat (ilość osób)"
          number={data ? data.volunteerCount : 0}
        />
      </StyledDashboardInfoCardsContainer>
    );
};

export default DashboardInfoCards;
