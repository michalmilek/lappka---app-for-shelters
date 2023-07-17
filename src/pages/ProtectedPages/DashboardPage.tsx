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
import {
  BellIcon,
  HamburgerMenuIcon,
} from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import { AnimatePresence } from "framer-motion";
import useDeviceType from "hooks/useDeviceType";
import React, { useState } from "react";

const DashboardPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const deviceType = useDeviceType();

  return (
    <StyledDashboardMain>
      {deviceType === "mobile" && isMobileMenuOpen && <ProtectedSidebar />}
      {deviceType !== "mobile" && <ProtectedSidebar />}
      <StyledProtectedPageContent>
        <StyledProtectedPageNavbar>
          <Typography
            color="darkGray2"
            variant="Heading 20 Semi Bold"
            tag="h2">
            Dashboard
          </Typography>
          {deviceType === "mobile" && (
            <HamburgerMenuIcon
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            />
          )}
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
