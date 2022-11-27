import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/styles";

import Themes from "theme";
import "./index.css";
import App from "./App";
import store from "redux/store";

ReactDOM.render(
  <Provider store={store()}>
    <ThemeProvider theme={Themes("light")}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
