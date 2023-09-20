import {
  SummaryCardFlexbox,
  SummaryCard,
} from "@components/cards/summary.card";
import CustomLayout from "@components/common/custom.layout";
import { PageHeader } from "@components/headers/page.header";
import Transaction from "@components/transaction";
import { Grid } from "@mui/material";
import { useIncome } from "@components/providers/ProvideIncome";
import { XBox } from "@components/styled/common.styled";
import { Subline } from "@components/styled/typography.styled";
import PiChart from "@components/charts/pie.chart";
import setDocTitle from "@components/utils/helpers/setDocTitle";

export const Income = () => {
  const { allIncomes, totalIncome, topIncomes, openIncomeForm, deleteIncome } =
    useIncome();
  setDocTitle("Income - Finsinai");
  return (
    <CustomLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <XBox>
            <PageHeader
              displayName="Income Summary"
              handleButton={openIncomeForm}
            />
            <SummaryCardFlexbox>
              <SummaryCard
                type="income"
                background="blue"
                headerText="Total Income"
                total={totalIncome || 3500}
              />
            </SummaryCardFlexbox>
          </XBox>
          <XBox>
            <Transaction
              heading="Recent Incomes"
              handleDelete={deleteIncome}
              data={allIncomes}
            />
          </XBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <XBox>
            <Subline variant="h6" sx={{ textAlign: "center", mt: 2 }}>
              Top Income Sources
            </Subline>
            <PiChart data={topIncomes} />
          </XBox>
        </Grid>
      </Grid>
    </CustomLayout>
  );
};

export default Income;
