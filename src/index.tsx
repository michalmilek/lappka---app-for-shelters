import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
