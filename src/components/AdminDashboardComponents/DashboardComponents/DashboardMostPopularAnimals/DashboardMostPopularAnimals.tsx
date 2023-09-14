import Divider from "components/SharedComponents/Divider/Divider";
import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import { useShelterCards } from "services/pet/petServices";
import {
  DashboardMostPopularAnimalsContainer,
  DashboardMostPopularAnimalsContent,
  DashboardMostPopularAnimalsHeadingContainer,
} from "./DashboardMostPopularAnimals.styled";
import DashboardMostPopularAnimalsItem from "./DashboardMostPopularAnimalsItem";
import ErrorMostPopularAnimals from "./ErrorMostPopularAnimals";
import SkeletonMostPopularAnimals from "./SkeletonMostPopularAnimals";

const DashboardMostPopularAnimals = () => {
  const {
    isLoading,
    data: viewsData,
    isError,
  } = useShelterCards(1, 5, "views");
  const { t } = useTranslation("dashboard");

  if (isLoading) {
    return <SkeletonMostPopularAnimals />;
  }

  if (isError) {
    return <ErrorMostPopularAnimals />;
  }

  return (
    <DashboardMostPopularAnimalsContainer>
      <DashboardMostPopularAnimalsHeadingContainer>
        <Typography
          variant="Heading 18 Semi Bold"
          color="darkGray2">
          {t("mostPopularAnimals.mostPopular")}
        </Typography>
      </DashboardMostPopularAnimalsHeadingContainer>
      <Divider />
      <DashboardMostPopularAnimalsContent>
        {viewsData &&
          viewsData.petInListInShelterDto.map((item, index) => (
            <React.Fragment key={item.petId + item.name + index}>
              <DashboardMostPopularAnimalsItem item={item} />
              {index !== viewsData.petInListInShelterDto.length - 1 && (
                <Divider />
              )}
            </React.Fragment>
          ))}
      </DashboardMostPopularAnimalsContent>
    </DashboardMostPopularAnimalsContainer>
  );
};

export default DashboardMostPopularAnimals;
