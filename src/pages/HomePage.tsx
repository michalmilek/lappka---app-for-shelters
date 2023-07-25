import React from "react";
import { Navigate } from "react-router-dom";
import { DashboardRoutes } from "router/router";

const HomePage = () => {
  return <Navigate to={DashboardRoutes.DASHBOARD} />;
};

export default HomePage;
