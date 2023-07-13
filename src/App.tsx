import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedPage from "components/ProtectedPageComponents/ProtectedPage";
import { GlobalStyle } from "globalStyles";
import DashboardPage from "pages/ProtectedPages/DashboardPage";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { unprotectedRoutes } from "./router/router";

const queryClient = new QueryClient();

function App() {
  return (
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
          <Route
            path="/dashboard"
            element={<DashboardPage />}></Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
