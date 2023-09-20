import React from "react";
import styled from "@emotion/styled";
import MuiSnackbar from "@mui/material/Snackbar";

const CustomSnackbar = styled(MuiSnackbar)`
  div.MuiPaper-root {
    background-color: black;
    color: #e0e0e0;
    border-radius: 13px;
  }
`;

export default CustomSnackbar;
