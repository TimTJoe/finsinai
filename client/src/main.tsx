import ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CustomTheme } from "@components/theme.ts";
import { ProvideForm } from "@components/providers/ProvideForm";
import { ProvideDB } from "@components/providers/ProvideDB";
import { ProvideIncome } from "@components/providers/ProvideIncome";
import { ProvideSnackbar } from "@components/providers/ProvideSnackbar";
import { ProvideExpense } from "@components/providers/ProvideExpense";
import { ProvideUser } from "@components/providers/ProvideUser";
import { Routers } from "./Routers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={CustomTheme}>
    <ProvideDB>
      <ProvideSnackbar>
        <ProvideUser>
          <ProvideExpense>
            <ProvideIncome>
              <ProvideForm>
                <RouterProvider router={Routers} />
              </ProvideForm>
            </ProvideIncome>
          </ProvideExpense>
        </ProvideUser>
      </ProvideSnackbar>
    </ProvideDB>
  </ThemeProvider>
);
