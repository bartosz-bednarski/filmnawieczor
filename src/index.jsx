import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import "./index.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>
);
