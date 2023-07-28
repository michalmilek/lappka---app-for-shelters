import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedPage from "components/AdminDashboardComponents/ProtectedPage";
import { GlobalStyle } from "globalStyles";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import DashboardPage from "pages/DashboardPages/DashboardPage";
import RegisterPage from "pages/RegisterPage";
import ResetPasswordPage from "pages/ResetPasswordPage";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthRoutes, DashboardRoutes } from "./router/router";
import MessagesPage from "pages/DashboardPages/MessagesPage";
import AnimalCardsPage from "pages/DashboardPages/AnimalCardsPages/AnimalCardsPage";
import VoluntaryPage from "pages/DashboardPages/VoluntaryPage";
import EmployeesPage from "pages/DashboardPages/EmployeesPage";
import Toast from "components/SharedComponents/Toast/Toast";
import AnimalCardsAddNewCardPage from "pages/DashboardPages/AnimalCardsPages/AnimalCardsAddNewCardPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path={AuthRoutes.LOGIN}
            element={<LoginPage />}
          />
          <Route
            path={AuthRoutes.REGISTER}
            element={<RegisterPage />}
          />
          <Route
            path={AuthRoutes.RESETPASSWORD}
            element={<ResetPasswordPage />}
          />
          <Route
            path={AuthRoutes.RESETPASSWORDTOKEN}
            element={<ResetPasswordPage />}
          />
        </Routes>
        <Routes>
          <Route element={<ProtectedPage />}>
            <Route
              path={DashboardRoutes.DASHBOARD}
              element={<DashboardPage />}
            />
            <Route
              path={DashboardRoutes.MESSAGES}
              element={<MessagesPage />}
            />
            <Route
              path={DashboardRoutes.ANIMALCARDS}
              element={<AnimalCardsPage />}
            />
            <Route
              path={DashboardRoutes.ANIMALCARDSNEWCARD}
              element={<AnimalCardsAddNewCardPage />}
            />
            <Route
              path={DashboardRoutes.VOLUNTARY}
              element={<VoluntaryPage />}
            />
            <Route
              path={DashboardRoutes.EMPLOYEES}
              element={<EmployeesPage />}
            />
          </Route>

          <Route
            path="/"
            element={<HomePage />}
          />
        </Routes>
      </BrowserRouter>
      <Toast />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;


