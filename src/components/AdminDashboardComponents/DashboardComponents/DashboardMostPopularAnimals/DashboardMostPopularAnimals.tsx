import Divider from "components/SharedComponents/Divider/Divider";
import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import {
  DashboardMostPopularAnimalsContainer,
  DashboardMostPopularAnimalsContent,
  DashboardMostPopularAnimalsHeadingContainer,
} from "./DashboardMostPopularAnimals.styled";
import DashboardMostPopularAnimalsItem from "./DashboardMostPopularAnimalsItem";

const DashboardMostPopularAnimals = () => {
  return (
    <DashboardMostPopularAnimalsContainer>
      <DashboardMostPopularAnimalsHeadingContainer>
        <Typography
          variant="Heading 18 Semi Bold"
          color="darkGray2">
          Najpopularniejsze
        </Typography>
      </DashboardMostPopularAnimalsHeadingContainer>
      <Divider />
      <DashboardMostPopularAnimalsContent>
        <DashboardMostPopularAnimalsItem />
        <Divider />
        <DashboardMostPopularAnimalsItem />
        <Divider />
        <DashboardMostPopularAnimalsItem />
      </DashboardMostPopularAnimalsContent>
    </DashboardMostPopularAnimalsContainer>
  );
};

export default DashboardMostPopularAnimals;
