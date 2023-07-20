import useDeviceType from "hooks/useDeviceType";
import { Outlet, useNavigate } from "react-router-dom";
import { StyledDashboardMain } from "./DashboardComponents/Dashboard.styled";
import ProtectedSidebar from "./DashboardSidebar";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectIsMobileMenuOpen } from "redux/mobileMenuSlice";

const ProtectedPage = () => {
  const navigate = useNavigate();
  const deviceType = useDeviceType();
  const IsMobileMenuOpen = useSelector(selectIsMobileMenuOpen);

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
