import { Navigate, Outlet } from "react-router-dom";
import { StyledDashboardMain } from "components/AdminDashboardComponents/DashboardComponents/Dashboard.styled";
import ProtectedSidebar from "components/AdminDashboardComponents/DashboardSidebar";
import { AuthRoutes } from "router/router";

const ProtectedPage = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!accessToken || !refreshToken) {
    return <Navigate to={AuthRoutes.login} />;
  }

  return (
    <StyledDashboardMain>
      <ProtectedSidebar />
      <Outlet />
    </StyledDashboardMain>
  );
};

export default ProtectedPage;
