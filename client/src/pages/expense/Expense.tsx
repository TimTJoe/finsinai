import {
  SummaryCardFlexbox,
  SummaryCard,
} from "@components/cards/summary.card";
import CustomLayout from "@components/common/custom.layout";
import { PageHeader } from "@components/headers/page.header";
import Transaction from "@components/transaction";
import { Grid } from "@mui/material";
import { XBox } from "@components/styled/common.styled";
import { Subline } from "@components/styled/typography.styled";
import { useExpense } from "@components/providers/ProvideExpense";
import BarChart from "@components/charts/bar.chart";
import setDocTitle from "@components/utils/helpers/setDocTitle";

export const Expense = () => {
  const {
    openExpenseForm,
    allExpenses,
    topExpenses,
    totalExpense,
    deleteExpense,
  } = useExpense();

  setDocTitle("Expense - Finsinai")

  return (
    <CustomLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <XBox>
            <PageHeader
              displayName="Expense Summary"
              handleButton={openExpenseForm}
            />
            <SummaryCardFlexbox>
              <SummaryCard
                type="expense"
                background={"red"}
                headerText="Total Expense"
                total={totalExpense || 3500}
              />
            </SummaryCardFlexbox>
          </XBox>
          <XBox>
            <Transaction
              heading="Recent Expenses"
              handleDelete={deleteExpense}
              data={allExpenses}
            />
          </XBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <XBox>
            <Subline variant="h6" sx={{ textAlign: "center", mt: 2 }}>
              Expense Distribution
            </Subline>
            <BarChart ceiling={25000} type="Expense" data={topExpenses} />
          </XBox>
        </Grid>
      </Grid>
    </CustomLayout>
  );
};

export default Expense;
