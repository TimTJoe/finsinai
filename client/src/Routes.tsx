import { createBrowserRouter } from "react-router-dom";
import Start from "./pages/start";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Start />
  }
])
