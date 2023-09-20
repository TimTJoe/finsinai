import ReactDOM from "react-dom/client";
import App from "./App";
import { Outlet, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CustomTheme } from "@components/theme.ts";
import { ProvideForm } from "@components/providers/ProvideForm";
import { ProvideDB } from "@components/providers/ProvideDB";
import { ProvideIncome } from "@components/providers/ProvideIncome";
import { ProvideSnackbar } from "@components/providers/ProvideSnackbar";
import { ProvideExpense } from "@components/providers/ProvideExpense";
import { ProvideUser } from "@components/providers/ProvideUser";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <ThemeProvider theme={CustomTheme}>
      <ProvideDB>
        <ProvideSnackbar>
          <ProvideUser>
            <ProvideExpense>
              <ProvideIncome>
                <ProvideForm>
                  <App />
                  <Outlet />
                </ProvideForm>
              </ProvideIncome>
            </ProvideExpense>
          </ProvideUser>
        </ProvideSnackbar>
      </ProvideDB>
    </ThemeProvider>
  </Router>
);
