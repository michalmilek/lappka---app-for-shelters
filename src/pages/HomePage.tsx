import { Navigate } from "react-router-dom";
import { DashboardRoutes } from "router/router";

const HomePage = () => {
  return <Navigate to={DashboardRoutes.dashboard} />;
};
export default HomePage;

//<Navigate to={DashboardRoutes.DASHBOARD} />;
