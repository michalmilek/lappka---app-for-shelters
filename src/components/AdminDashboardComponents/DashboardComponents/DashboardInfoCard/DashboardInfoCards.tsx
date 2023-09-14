import { useShelterStats } from "services/pet/petServices";
import React from "react";
import DashboardInfoCardsItem from "./DashboardInfoCardsItem";
import {
  HeartGreenIcon,
  IdentificationIcon,
  SearchCircleIcon,
  UserCircleIcon,
} from "components/SharedComponents/icons/icons";
import { useTranslation } from "react-i18next";

const DashboardInfoCards = () => {
  const { data, isLoading, isError } = useShelterStats();
  const { t } = useTranslation("dashboard");

  return (
    <>
      <DashboardInfoCardsItem
        icon={<IdentificationIcon />}
        isLoading={isLoading}
        isError={isError}
        text={t("shelterStats.animalCards")}
        number={data ? data.cardCount : 0}
        gridArea="el1"
      />
      <DashboardInfoCardsItem
        icon={<SearchCircleIcon />}
        isLoading={isLoading}
        isError={isError}
        text={t("shelterStats.seeksOwner")}
        number={data ? data.toAdoptCount : 0}
        gridArea="el2"
      />
      <DashboardInfoCardsItem
        icon={<UserCircleIcon />}
        isLoading={isLoading}
        isError={isError}
        text={t("shelterStats.withOwner")}
        number={data ? data.adoptedCount : 0}
        gridArea="el3"
      />
      <DashboardInfoCardsItem
        icon={<HeartGreenIcon />}
        isLoading={isLoading}
        isError={isError}
        text={t("shelterStats.volunteering")}
        number={data ? data.volunteerCount : 0}
        gridArea="el4"
      />
    </>
  );
};

export default DashboardInfoCards;
