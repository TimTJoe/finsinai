import { createBrowserRouter } from "react-router-dom";
import Logout from "./pages/account/Logout";
import Dashboard from "./pages/dashboard";
import Income from "./pages/income";
import Expense from "./pages/expense";
import Account from "./pages/account";
import NoMatch from "@components/NoMatch";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/account",
    element: <Account />,
    children: [
      {
        path: ":params",
        element: <Account />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
  {
    path: "income",
    element: <Income />,
  },
  {
    path: "expense",
    element: <Expense />,
  },
  {
    path: "*",
    element: <NoMatch />,
  },
]);
