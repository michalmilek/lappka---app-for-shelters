import { StyledDashboardMainContent } from "components/AdminDashboardComponents/DashboardComponents/Dashboard.styled";
import DashboardAnimalChartStateHandler from "components/AdminDashboardComponents/DashboardComponents/DashboardAnimalChart/DashboardAnimalChartStateHandler";
import DashboardInfoCards from "components/AdminDashboardComponents/DashboardComponents/DashboardInfoCard/DashboardInfoCards";
import DashboardMostPopularAnimals from "components/AdminDashboardComponents/DashboardComponents/DashboardMostPopularAnimals/DashboardMostPopularAnimals";
import DashboardNewestAnimalCards from "components/AdminDashboardComponents/DashboardComponents/DashboardNewestAnimalCards/DashboardNewestAnimalCards";
import DashboardVoluntary from "components/AdminDashboardComponents/DashboardComponents/DashboardVoluntary/DashboardVoluntary";
import ProtectedNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import React from "react";

const DashboardPage = () => {
  return (
    <StyledProtectedPageContent>
      <ProtectedNavbar title="Dashboard" />
      <StyledDashboardMainContent>
        <DashboardInfoCards />
        <DashboardAnimalChartStateHandler />
        <DashboardVoluntary />
        <DashboardNewestAnimalCards />
        <DashboardMostPopularAnimals />
      </StyledDashboardMainContent>
    </StyledProtectedPageContent>
  );
};

export default DashboardPage;
