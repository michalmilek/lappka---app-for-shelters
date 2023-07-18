import useDeviceType from "hooks/useDeviceType";
import { Outlet, useNavigate } from "react-router-dom";
import { StyledDashboardMain } from "./DashboardComponents/Dashboard.styled";
import ProtectedSidebar from "./DashboardSidebar";
import { useContext } from "react";
import { MobileMenuContext } from "context/MobileMenuContextProvider";

const ProtectedPage = () => {
  const navigate = useNavigate();
  const deviceType = useDeviceType();
  const { IsMobileMenuOpen } = useContext(MobileMenuContext);

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!accessToken || !refreshToken) {
    navigate("/login");
  }

  return (
    <StyledDashboardMain>
      {deviceType === "mobile" && IsMobileMenuOpen && <ProtectedSidebar />}
      {deviceType !== "mobile" && <ProtectedSidebar />}
      <Outlet />
    </StyledDashboardMain>
  );
};

export default ProtectedPage;
