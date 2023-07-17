import {

  StyledDashboardMainContent,
} from "components/AdminDashboardComponents/DashboardComponents/Dashboard.styled";
import DashboardAnimalChart from "components/AdminDashboardComponents/DashboardComponents/DashboardAnimalChart/DashboardAnimalChart";
import DashboardInfoCards from "components/AdminDashboardComponents/DashboardComponents/DashboardInfoCard/DashboardInfoCards";
import DashboardMostPopularAnimals from "components/AdminDashboardComponents/DashboardComponents/DashboardMostPopularAnimals/DashboardMostPopularAnimals";
import DashboardNewestAnimalCards from "components/AdminDashboardComponents/DashboardComponents/DashboardNewestAnimalCards/DashboardNewestAnimalCards";
import DashboardVoluntary from "components/AdminDashboardComponents/DashboardComponents/DashboardVoluntary/DashboardVoluntary";
import ProtectedNavbar from "components/AdminDashboardComponents/ProtectedNavbar";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import React from "react";

const DashboardPage = () => {
  return (
    <StyledProtectedPageContent>
      <ProtectedNavbar title="Dashboard" />
      <StyledDashboardMainContent>
        <DashboardInfoCards />
        <DashboardAnimalChart />
        <DashboardVoluntary />
        <DashboardNewestAnimalCards />
        <DashboardMostPopularAnimals />
      </StyledDashboardMainContent>
    </StyledProtectedPageContent>
  );
};

export default DashboardPage;
