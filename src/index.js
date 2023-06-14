import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from "@store/store";
import { Provider } from "react-redux";
import ThemeProvider from "@context/themeProvider";
import { REPO_NAME } from '@constants/repo'

import App from "@containers/App";
import "@styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={`/${REPO_NAME}/`}>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
