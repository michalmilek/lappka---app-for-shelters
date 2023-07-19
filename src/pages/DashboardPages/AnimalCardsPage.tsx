import AnimalCardsInfo from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsInfo/AnimalCardsInfo";
import AnimalCardsTable from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsTable/AnimalCardsTable";
import {
  StyledDashboardAnimalCardsMain,
  StyledDashboardAnimalCardsMainContent,
} from "components/AdminDashboardComponents/AnimalCardsComponents/DashboardAnimalCards.styled";
import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import React from "react";

const AnimalCardsPage = () => {
  return (
    <StyledDashboardAnimalCardsMain>
      <DashboardNavbar title="Karty zwierząt" />
      <StyledDashboardAnimalCardsMainContent>
        <AnimalCardsInfo />
        <AnimalCardsTable />
      </StyledDashboardAnimalCardsMainContent>
    </StyledDashboardAnimalCardsMain>
  );
};

export default AnimalCardsPage;
