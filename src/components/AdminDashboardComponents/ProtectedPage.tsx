import useDeviceType from "hooks/useDeviceType";
import { Outlet, useNavigate } from "react-router-dom";
import { StyledDashboardMain } from "./DashboardComponents/Dashboard.styled";
import ProtectedSidebar from "./DashboardSidebar";

const ProtectedPage = () => {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!accessToken || !refreshToken) {
    navigate("/login");
  }

  return (
    <StyledDashboardMain>
      <ProtectedSidebar />
      <Outlet />
    </StyledDashboardMain>
  );
};

export default ProtectedPage;
