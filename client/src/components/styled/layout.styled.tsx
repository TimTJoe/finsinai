import {
  Box,
} from "@mui/material";
import styled from "@emotion/styled";
import { blueGrey } from "@mui/material/colors";

export const LayoutBody = styled(Box)`
  display: flex;
`;
export const LayoutContent = styled(Box)`
  position: relative;
  flex-grow: 1;
  padding: 16px;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${blueGrey[50]};
  color: black;
`;

export const LayoutColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
`;

export const LayoutRow = styled(Box)`
  display: flex;
  flex-grow: 1;
  gap: 8px;
`;

