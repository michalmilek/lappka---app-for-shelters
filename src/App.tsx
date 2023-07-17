import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedPage from "components/AdminDashboardComponents/ProtectedPage";
import MobileMenuContextProvider from "context/MobileMenuContextProvider";
import { GlobalStyle } from "globalStyles";
import HomePage from "pages/HomePage";
import DashboardPage from "pages/ProtectedPages/DashboardPage";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { unprotectedRoutes } from "./router/router";

const queryClient = new QueryClient();

function App() {
  return (
    <MobileMenuContextProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            {unprotectedRoutes.map((route) => (
              <Route
                key={route.url}
                path={route.url}
                element={route.component}
              />
            ))}
          </Routes>
          <Routes>
            <Route element={<ProtectedPage />}>
              <Route
                path={"/dashboard"}
                element={<DashboardPage />}
              />
              <Route
                path={"/home"}
                element={<HomePage />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </MobileMenuContextProvider>
  );
}

export default App;
