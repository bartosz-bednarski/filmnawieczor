import React from "react";
import ReactDOM from "react-dom/client";
import classes from "./index.module.scss";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
