import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);
