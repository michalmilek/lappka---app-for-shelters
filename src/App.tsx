import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GlobalStyle } from "globalStyles";
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
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
