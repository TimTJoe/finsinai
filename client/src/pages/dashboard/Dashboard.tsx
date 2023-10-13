import CustomFab from "@components/common/custom.fab";
import CustomLayout from "@components/common/custom.layout";
import { Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import styled from "@emotion/styled";
import { SetStateAction, useState } from "react";
import { XBox } from "@components/styled/common.styled";
import { Transaction } from "@components/transaction";
import { useIncome } from "@components/providers/ProvideIncome";
import { useExpense } from "@components/providers/ProvideExpense";
import PieChart from "@components/charts/pie.chart";
import BarChart from "@components/charts/bar.chart";
import { Subline } from "@components/styled/typography.styled";
import {
  SummaryCard,
  SummaryCardFlexbox,
} from "@components/cards/summary.card";
import { Toolbar } from "@components/styled/nav.styled";
import setDocTitle from "@components/utils/helpers/setDocTitle";

const StyledToggleButton = styled(ToggleButton)`
  && {
    background-color: white;
    font-weight: bold;
    text-transform: none;
    padding: 6px 12px;
  }
`;

export const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("income");
  const { allIncomes, topIncomes, deleteIncome, totalIncome } = useIncome();
  const { allExpenses, topExpenses, totalExpense, deleteExpense } =
    useExpense();
  const handleOptionChange = (event: any, newOption: SetStateAction<string>) => {
    setSelectedOption(newOption);
    console.log(event)
  };

  const data = {
    income: allIncomes,
    expense: allExpenses,
  }[selectedOption];

  const delHandler = {
    income: deleteIncome,
    expense: deleteExpense,
  }[selectedOption];

  setDocTitle("Overview - Finsinai");

  return (
    <CustomLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <XBox>
            <Subline variant="h6" sx={{ m: 2, ml: 0, mr: 0 }}>
              Account Summary
            </Subline>
            <SummaryCardFlexbox>
              <SummaryCard
                type="income"
                background="blue"
                headerText="Total Income"
                total={totalIncome || 3500}
              />
              <SummaryCard
                type="expense"
                background="red"
                headerText="Total Expense"
                total={totalExpense || 3500}
              />
            </SummaryCardFlexbox>
          </XBox>
          <XBox>
            <Toolbar variant="dense" sx={{ m: 2, ml: 0, mr: 0 }} disableGutters>
              <Subline variant="h6">Transactions </Subline>
              <ToggleButtonGroup
                value={selectedOption}
                exclusive
                onChange={handleOptionChange}
              >
                <StyledToggleButton
                  value="income"
                  sx={{ borderRadius: "25px" }}
                >
                  Income
                </StyledToggleButton>
                <StyledToggleButton
                  value="expense"
                  sx={{ borderRadius: "25px" }}
                >
                  Expense
                </StyledToggleButton>
              </ToggleButtonGroup>
            </Toolbar>
            <Transaction data={data} handleDelete={delHandler} />
          </XBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <XBox>
            <Subline variant="h6" sx={{ textAlign: "center", mt: 2 }}>
              Top Income Sources
            </Subline>
            <PieChart data={topIncomes} />
          </XBox>
          <XBox>
            <Subline variant="h6" sx={{ textAlign: "center", mt: 2 }}>
              Expense Distribution
            </Subline>
            <BarChart ceiling={25000} type="Expense" data={topExpenses} />
          </XBox>
        </Grid>
      </Grid>
      <CustomFab />
    </CustomLayout>
  );
};

export default Dashboard;
