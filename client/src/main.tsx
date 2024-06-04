import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Routers } from "./Routers";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={Routers} />
  </React.StrictMode>
);
