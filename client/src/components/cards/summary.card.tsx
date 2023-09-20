import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { blue, red, green } from "@mui/material/colors";
import CustomBox from "@components/common/custom.box";
import CustomSpan from "@components/common/custom.span";
import lodash from "lodash";
import { useIncome } from "@components/providers/ProvideIncome";
import { useExpense } from "@components/providers/ProvideExpense";
import { useLocation } from "react-router-dom";

export const SummaryCardFlexbox = styled(Box)`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  margin: 12px 0;

  & > * {
    flex-grow: 1;
  }
`;

interface ISummaryCard {
  headerText: string;
  total: number;
  background: "red" | "blue";
  type: "income" | "expense";
}

export const SummaryCard: React.FC<ISummaryCard> = ({
  headerText,
  total,
  background,
  type,
}) => {
  const [percentage, setPercentage] = useState(0);

  const color = {
    red: red,
    blue: blue,
  }[background];

  useEffect(() => {
    let target = 100;
    let _percent = lodash.round(
      lodash.multiply(lodash.divide(target, total), 100),
      2
    );
    setPercentage(_percent);
  }, [total]);

  const sign = {
    income: "+",
    expense: "-",
  }[type];

  return (
    <CustomBox sx={{ minHeight: "100px" }} bgcolor={color[50]}>
      <Typography variant="subtitle1" color={"GrayText"}>
        {headerText}
      </Typography>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography fontWeight={900} variant="h6" color={"black"}>
          L$ {Number(total).toLocaleString("en-US")}.00
        </Typography>
        <CustomSpan bgcolor={color[100]} color={color[800]}>
          {sign + " " + percentage}%
        </CustomSpan>
      </Box>
    </CustomBox>
  );
};
