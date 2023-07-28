import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";
import { worker } from "./mocks/browser";
import { Provider } from "react-redux";
import { store } from "redux/store";

worker.start();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyleSheetManager enableVendorPrefixes>
      <Provider store={store}>
        <App />
      </Provider>
    </StyleSheetManager>
  </React.StrictMode>
);
