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
import ErrorCards from "./ErrorCard";

const DashboardInfoCards = () => {
  const { data, isLoading, isError } = useShelterStats();
  return (
    <>
      <DashboardInfoCardsItem
        icon={<IdentificationIcon />}
        isLoading={isLoading}
        isError={isError}
        text="Karty zwierząt"
        number={data ? data.cardCount : 0}
        gridArea="el1"
      />
      <DashboardInfoCardsItem
        icon={<SearchCircleIcon />}
        isLoading={isLoading}
        isError={isError}
        text="Szuka właściciela"
        number={data ? data.toAdoptCount : 0}
        gridArea="el2"
      />
      <DashboardInfoCardsItem
        icon={<UserCircleIcon />}
        isLoading={isLoading}
        isError={isError}
        text="Z właścicielem"
        number={data ? data.adoptedCount : 0}
        gridArea="el3"
      />
      <DashboardInfoCardsItem
        icon={<HeartGreenIcon />}
        isLoading={isLoading}
        isError={isError}
        text="Wolontariat (ilość osób)"
        number={data ? data.volunteerCount : 0}
        gridArea="el4"
      />
    </>
  );
};

export default DashboardInfoCards;
