import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import {
  StyledDashboardVoluntaryMainContent,
  StyledDashboardVoluntaryMainContentFormsContainer,
} from "components/AdminDashboardComponents/VoluntaryComponents/DashboardVoluntary.styled";
import VoluntaryForm from "components/AdminDashboardComponents/VoluntaryComponents/VoluntaryForm/VoluntaryForm";
import React from "react";

const VoluntaryPage = () => {
  return (
    <StyledProtectedPageContent>
      <DashboardNavbar title="Wolontariat" />
      <StyledDashboardVoluntaryMainContent>
        <StyledDashboardVoluntaryMainContentFormsContainer>
          <VoluntaryForm />
          <VoluntaryForm />
          <VoluntaryForm />
        </StyledDashboardVoluntaryMainContentFormsContainer>
      </StyledDashboardVoluntaryMainContent>
    </StyledProtectedPageContent>
  );
};

export default VoluntaryPage;
