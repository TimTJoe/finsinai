import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./Routes";
import { RouterProvider } from "react-router-dom";
import { ProvideTheme } from "@providers/ProvideTheme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProvideTheme>
      <RouterProvider router={Routes} />
    </ProvideTheme>
  </React.StrictMode>
);
