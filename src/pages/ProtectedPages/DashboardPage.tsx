<<<<<<< Updated upstream
import ProtectedSidebar from "components/ProtectedPageComponents/ProtectedSidebar";
=======
import {
  StyledDashboardInfoCardsContainer,
  StyledDashboardMainContent,
} from "components/ProtectedRoutesComponents/DashboardComponents/Dashboard.styled";
import DashboardAnimalChart from "components/ProtectedRoutesComponents/DashboardComponents/DashboardAnimalChart/DashboardAnimalChart";
import DashboardInfoCard from "components/ProtectedRoutesComponents/DashboardComponents/DashboardInfoCard/DashboardInfoCard";
import DashboardVoluntary from "components/ProtectedRoutesComponents/DashboardComponents/DashboardVoluntary/DashboardVoluntary";
import {
  StyledProtectedPageContent,
  StyledProtectedPageNavbar,
} from "components/ProtectedRoutesComponents/ProtectedPage.styled";
import ProtectedSidebar from "components/ProtectedRoutesComponents/ProtectedSidebar";
import { BellIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
>>>>>>> Stashed changes
import React from "react";

const DashboardPage = () => {
  return (
    <main>
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
          <StyledDashboardInfoCardsContainer>
            <DashboardInfoCard />
            <DashboardInfoCard />
            <DashboardInfoCard />
            <DashboardInfoCard />
          </StyledDashboardInfoCardsContainer>
          <DashboardAnimalChart />
          <DashboardVoluntary />
        </StyledDashboardMainContent>
      </StyledProtectedPageContent>
    </main>
  );
};

export default DashboardPage;
