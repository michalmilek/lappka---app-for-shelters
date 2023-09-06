import useDynamicTitle from "hooks/useDynamicTitle";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { DashboardRoutes } from "router/router";

const UnprotectedPage = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const { dynamicTitle: _ } = useDynamicTitle();

  if (accessToken || refreshToken) {
    return <Navigate to={DashboardRoutes.dashboard} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default UnprotectedPage;
