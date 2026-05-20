import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
const redirect = sessionStorage.redirect;
if (redirect) {
  delete sessionStorage.redirect;
  window.history.replaceState(null, null, redirect);
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<BrowserRouter basename="/">
  <App />
</BrowserRouter>
  </React.StrictMode>
);