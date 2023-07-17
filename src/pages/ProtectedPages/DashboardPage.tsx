import {
  StyledDashboardMain,
  StyledDashboardMainContent,
} from "components/ProtectedRoutesComponents/DashboardComponents/Dashboard.styled";
import DashboardAnimalChart from "components/ProtectedRoutesComponents/DashboardComponents/DashboardAnimalChart/DashboardAnimalChart";
import DashboardInfoCards from "components/ProtectedRoutesComponents/DashboardComponents/DashboardInfoCard/DashboardInfoCards";
import DashboardMostPopularAnimals from "components/ProtectedRoutesComponents/DashboardComponents/DashboardMostPopularAnimals/DashboardMostPopularAnimals";
import DashboardNewestAnimalCards from "components/ProtectedRoutesComponents/DashboardComponents/DashboardNewestAnimalCards/DashboardNewestAnimalCards";
import DashboardVoluntary from "components/ProtectedRoutesComponents/DashboardComponents/DashboardVoluntary/DashboardVoluntary";
import {
  StyledProtectedPageContent,
  StyledProtectedPageNavbar,
} from "components/ProtectedRoutesComponents/ProtectedPage.styled";
import ProtectedSidebar from "components/ProtectedRoutesComponents/ProtectedSidebar";
import { BellIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";

const DashboardPage = () => {
  return (
    <StyledDashboardMain>
      <ProtectedSidebar />
      <StyledProtectedPageContent>
        <StyledProtectedPageNavbar>
          <Typography
            color="darkGray2"
            variant="Heading 20 Semi Bold"
            tag="h2">
            Dashboard
          </Typography>
          <BellIcon />
        </StyledProtectedPageNavbar>
        <StyledDashboardMainContent>
          <DashboardInfoCards />
          <DashboardAnimalChart />
          <DashboardVoluntary />
          <DashboardNewestAnimalCards />
          <DashboardMostPopularAnimals />
        </StyledDashboardMainContent>
      </StyledProtectedPageContent>
    </StyledDashboardMain>
  );
};

export default DashboardPage;
