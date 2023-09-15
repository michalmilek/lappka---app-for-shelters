import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedPage from "components/PagesComponents/ProtectedPage";
import { GlobalStyle } from "globalStyles";
import LoginPage from "pages/LoginPage";
import DashboardPage from "pages/DashboardPages/DashboardPage";
import RegisterPage from "pages/RegisterPage";
import ResetPasswordPage from "pages/ResetPasswordPage";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import Loader from "components/SharedComponents/Loader/Loader";
import { useSelector } from "react-redux";
import { selectIsLoading } from "redux/loadingSlice";
import PreLoaderModal from "components/SharedComponents/PreLoader/PreLoader";
import { AxiosError } from "axios";
import Page404 from "pages/Page404";
import toastService from "singletons/toastService";
import UnprotectedPage from "components/PagesComponents/UnprotectedPage";
import HomePage from "pages/HomePage";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      if ((error as AxiosError).response?.status === 500) {
        toastService.showToast(t("errors.500"), "error");
      } else if ((error as AxiosError).response?.status === 403) {
        toastService.showToast(t("errors.403"), "error");
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      if ((error as AxiosError).response?.status === 500) {
        toastService.showToast(t("errors.500"), "error");
      } else if ((error as AxiosError).response?.status === 403) {
        toastService.showToast(t("errors.403"), "error");
      }
    },
  }),
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5000,
    },
  },
});

function App() {
  const { i18n } = useTranslation();

  const isLoading = useSelector(selectIsLoading);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<UnprotectedPage />}>
            <Route
              path={AuthRoutes.login}
              element={<LoginPage />}
            />
            <Route
              path={AuthRoutes.register}
              element={<RegisterPage />}
            />
            <Route
              path={AuthRoutes.resetPassword}
              element={<ResetPasswordPage />}
            />
            <Route
              path={AuthRoutes.resetPasswordToken}
              element={<ResetPasswordPage />}
            />
          </Route>
          <Route element={<ProtectedPage />}>
            <Route
              path={DashboardRoutes.dashboard}
              element={<DashboardPage />}
            />
            <Route
              path={DashboardRoutes.messages}
              element={<MessagesPage />}
            />
            <Route
              path={DashboardRoutes.animalCards}
              element={<AnimalCardsPage />}
              key={"animalCards"}
            />
            <Route
              path={DashboardRoutes.animalCardsNewCard}
              element={<AnimalCardsAddNewCardPage />}
            />
            <Route
              path={DashboardRoutes.animalCardsCard}
              element={<AnimalCardsCardPage />}
            />
            <Route
              path={DashboardRoutes.voluntary}
              element={<VoluntaryPage />}
            />
            <Route
              path={DashboardRoutes.employees}
              element={<EmployeesPage />}
            />
            <Route
              path={DashboardRoutes.addNewEmployee}
              element={<AddNewEmployeePage />}
            />
            <Route
              path={DashboardRoutes.accountSettings}
              element={<AccountSettingsPage />}
            />
          </Route>

          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/not-found"
            element={<Page404 />}
          />

          <Route
            path="*"
            element={<Navigate to="/not-found" />}
          />
        </Routes>
      </BrowserRouter>
      <Toast />
      <Loader isLoading={isLoading} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}




export default function WrappedApp() {
  return (
    <Suspense fallback={<Loader isLoading={true} />}>
      <App />
    </Suspense>
  );
};
