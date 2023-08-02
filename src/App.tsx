import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedPage from "components/AdminDashboardComponents/ProtectedPage";
import { GlobalStyle } from "globalStyles";
import LoginPage from "pages/LoginPage";
import DashboardPage from "pages/DashboardPages/DashboardPage";
import RegisterPage from "pages/RegisterPage";
import ResetPasswordPage from "pages/ResetPasswordPage";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthRoutes, DashboardRoutes } from "./router/router";
import MessagesPage from "pages/DashboardPages/MessagesPage";
import AnimalCardsPage from "pages/DashboardPages/AnimalCardsPages/AnimalCardsPage";
import VoluntaryPage from "pages/DashboardPages/VoluntaryPage";
import EmployeesPage from "pages/DashboardPages/EmployeesPages/EmployeesPage";
import Toast from "components/SharedComponents/Toast/Toast";
import AnimalCardsAddNewCardPage from "pages/DashboardPages/AnimalCardsPages/AnimalCardsAddNewCardPage";
import AnimalCardsCardPage from "pages/DashboardPages/AnimalCardsPages/AnimalCardsCardPage";
import AddNewEmployeePage from "pages/DashboardPages/EmployeesPages/AddNewEmployeePage";
import AccountSettingsPage from "pages/DashboardPages/AccountSettingsPage";
import HomePage from "pages/HomePage";
import Loader from "components/SharedComponents/Loader/Loader";
import { useSelector } from "react-redux";
import { selectIsLoading } from "redux/loadingSlice";
import PreLoaderModal from "components/SharedComponents/PreLoader/PreLoader";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000,
    },
  },
});

function App() {
  const wasLoadedInThePast = localStorage.getItem("wasLoadedInThePast");
  console.log();
  const [isPageLoaded, setIsPageLoaded] = useState(
    wasLoadedInThePast ? true : false
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsPageLoaded(true);
      localStorage.setItem("wasLoadedInThePast", "true");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const isLoading = useSelector(selectIsLoading);

  if (isPageLoaded)
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
                path={DashboardRoutes.ANIMALCARDSCARD}
                element={<AnimalCardsCardPage />}
              />
              <Route
                path={DashboardRoutes.VOLUNTARY}
                element={<VoluntaryPage />}
              />
              <Route
                path={DashboardRoutes.EMPLOYEES}
                element={<EmployeesPage />}
              />
              <Route
                path={DashboardRoutes.ADDNEWEMPLOYEE}
                element={<AddNewEmployeePage />}
              />
              <Route
                path={DashboardRoutes.ACCOUNTSETTINGS}
                element={<AccountSettingsPage />}
              />
            </Route>

            <Route
              path="/"
              element={<HomePage />}
            />
          </Routes>
        </BrowserRouter>
        <Toast />
        <Loader isLoading={isLoading} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );

  return <PreLoaderModal />;
}

export default App;


