import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Restore the requested page after GitHub Pages fallback
const redirect = sessionStorage.getItem("techuvo_redirect");

if (redirect) {
  sessionStorage.removeItem("techuvo_redirect");
  window.history.replaceState(null, "", redirect);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);