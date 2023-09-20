import { Box, BoxProps, Button as MuiButton } from "@mui/material";
import styled from "@emotion/styled";
import { blueGrey } from "@mui/material/colors";

// export const BODY = styled(Box)`
//   display: flex;
// `;
// export const CONTENT = styled(Box)`
//   flex-grow: 1;
//   padding: 16px;
//   min-height: 96vh;
//   overflow: hidden;
//   background-color: ${blueGrey[100]};
//   color: black;
// `;

export const FLEXCOL = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
`;

export const FLEXROW = styled(Box)`
  display: flex;
  flex-grow: 1;
  gap: 12px;
`;

export const Button = styled(MuiButton)`
  font-size: 1rem;
  font-weight: bolder;
`;

export const XBox = styled(Box)<BoxProps>`
  padding: 8px 10px;
  border-radius: 12px;
  box-shadow: 0 1px 2px var(--shadow-2);
  background-color: white;
  box-sizing: border-box;
  margin-bottom: 17px;
`;
