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
import ErrorCards from "./ErrorCards";

const DashboardInfoCards = () => {
  const { data, isLoading, isError, error } = useShelterStats();

  if (isError) {
    console.log(error);

    return <ErrorCards />;
  }

  return (
    <>
      <DashboardInfoCardsItem
        icon={<IdentificationIcon />}
        isLoading={isLoading}
        text="Karty zwierząt"
        number={data ? data.cardCount : 0}
        gridArea="el1"
      />
      <DashboardInfoCardsItem
        icon={<SearchCircleIcon />}
        isLoading={isLoading}
        text="Szuka właściciela"
        number={data ? data.toAdoptCount : 0}
        gridArea="el2"
      />
      <DashboardInfoCardsItem
        icon={<UserCircleIcon />}
        isLoading={isLoading}
        text="Z właścicielem"
        number={data ? data.adoptedCount : 0}
        gridArea="el3"
      />
      <DashboardInfoCardsItem
        icon={<HeartGreenIcon />}
        isLoading={isLoading}
        text="Wolontariat (ilość osób)"
        number={data ? data.volunteerCount : 0}
        gridArea="el4"
      />
    </>
  );
};

export default DashboardInfoCards;
