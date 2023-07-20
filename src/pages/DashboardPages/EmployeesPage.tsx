import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledDashboardEmployeesMainContent } from "components/AdminDashboardComponents/EmployeesComponents/DashboardEmployees.styled";
import EmployeesTable from "components/AdminDashboardComponents/EmployeesComponents/EmployeesTable";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import React from "react";

const EmployeesPage = () => {
  return (
    <StyledProtectedPageContent>
      <DashboardNavbar title="Pracownicy" />
      <StyledDashboardEmployeesMainContent>
        <EmployeesTable />
      </StyledDashboardEmployeesMainContent>
    </StyledProtectedPageContent>
  );
};

export default EmployeesPage;
