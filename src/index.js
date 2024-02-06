import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SignState } from "./contextAPI/State/SignState";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SignState>
        <App />
      </SignState>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
