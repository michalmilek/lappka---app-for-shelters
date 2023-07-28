import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledDashboardEmployeesMainContent } from "components/AdminDashboardComponents/EmployeesComponents/DashboardEmployees.styled";
import EmployeesTable from "components/AdminDashboardComponents/EmployeesComponents/EmployeesTable";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import Button from "components/SharedComponents/Button/Button";
import { StyledPlusIcon } from "components/SharedComponents/icons/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardRoutes } from "router/router";

const EmployeesPage = () => {
  const navigate = useNavigate();
  return (
    <StyledProtectedPageContent>
      <DashboardNavbar
        title="Pracownicy"
        Button={
          <Button
            $icon={<StyledPlusIcon />}
            $iconPlace="left"
            onClick={() => navigate(DashboardRoutes.ADDNEWEMPLOYEE)}>
            Dodaj pracownika
          </Button>
        }
      />
      <StyledDashboardEmployeesMainContent>
        <EmployeesTable />
      </StyledDashboardEmployeesMainContent>
    </StyledProtectedPageContent>
  );
};

export default EmployeesPage;
