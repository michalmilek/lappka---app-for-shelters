import { GlobalStyle } from "globalStyles";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { unprotectedRoutes } from "./router/router";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
