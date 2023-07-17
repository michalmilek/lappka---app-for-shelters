import React from "react";
import { StyledDashboardInfoCardsContainer } from "./DashboardInfoCards.styled";
import DashboardInfoCardsItem from "./DashboardInfoCardsItem";

const DashboardInfoCards = () => {
  return (
    <StyledDashboardInfoCardsContainer>
      <DashboardInfoCardsItem />
      <DashboardInfoCardsItem />
      <DashboardInfoCardsItem />
      <DashboardInfoCardsItem />
    </StyledDashboardInfoCardsContainer>
  );
};

export default DashboardInfoCards;
