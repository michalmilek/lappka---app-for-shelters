import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledDashboardEmployeesMainContent } from "components/AdminDashboardComponents/EmployeesComponents/DashboardEmployees.styled";
import EmployeesTable from "components/AdminDashboardComponents/EmployeesComponents/EmployeesTable";
import { StyledProtectedPageContent } from "components/PagesComponents/ProtectedPage.styled";
import Button from "components/SharedComponents/Button/Button";
import { StyledPlusIcon } from "components/SharedComponents/icons/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardRoutes } from "router/router";
import { useShelterManagement } from "services/management/managementServices";

const EmployeesPage = () => {
  const navigate = useNavigate();
  //const { data } = useShelterManagement("Shelter");
  return (
    <StyledProtectedPageContent>
      <DashboardNavbar
        title="Pracownicy"
        Button={
          <Button
            icon={<StyledPlusIcon />}
            iconPlace="left"
            onClick={() => navigate(DashboardRoutes.addNewEmployee)}>
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
