import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import customFetch from "./utils/customFetch.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer position="top-center" />
  </StrictMode>
);
