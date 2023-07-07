import ToggleButton from "./components/SharedComponents/Button/ToggleButton";
import { GlobalStyle } from "globalStyles";
import React, { useState } from "react";
import Button from "./components/SharedComponents/Button/Button";
import Input from "./components/SharedComponents/Inputs/Input";
import TextArea from "./components/SharedComponents/Inputs/TextArea";
import { styled } from "styled-components";
import { EyeOffIcon } from "./components/SharedComponents/icons/icons";
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
