import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledDashboardEmployeesMainContent } from "components/AdminDashboardComponents/EmployeesComponents/DashboardEmployees.styled";
import EmployeesTable from "components/AdminDashboardComponents/EmployeesComponents/EmployeesTable";
import { StyledProtectedPageContent } from "components/PagesComponents/ProtectedPage.styled";
import Button from "components/SharedComponents/Button/Button";
import { StyledPlusIcon } from "components/SharedComponents/icons/icons";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { DashboardRoutes } from "router/router";
import {
  useGetWorkers,
  useShelterManagement,
} from "services/management/managementServices";

const EmployeesPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("employees");
  const { data: workersData, isSuccess } = useGetWorkers();
  return (
    <StyledProtectedPageContent>
      <DashboardNavbar
        Button={
          <Button
            icon={<StyledPlusIcon />}
            iconPlace="left"
            onClick={() => navigate(DashboardRoutes.addNewEmployee)}>
            {t("employees.addEmployee")}
          </Button>
        }
      />
      <StyledDashboardEmployeesMainContent>
        {isSuccess && workersData && (
          <EmployeesTable workersData={workersData} />
        )}
      </StyledDashboardEmployeesMainContent>
    </StyledProtectedPageContent>
  );
};

export default EmployeesPage;
