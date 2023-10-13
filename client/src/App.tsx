import "@css/root.css";
import "@css/index.css";
import { Route, Routes } from "react-router-dom";
import Logout from "./pages/account/Logout";
import Dashboard from "./pages/dashboard";
import Income from "./pages/income";
import Expense from "./pages/expense";
import Account from "./pages/account";
import NoMatch from "@components/NoMatch";

function App() {
  return (
    <Routes>
      <Route path="/account">
        <Route index element={<Account />} />
        <Route path=":params" element={<Account />} />
        <Route path="logout" element={<Logout />} />
      </Route>
      <Route path="/" element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="expense" element={<Expense />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
