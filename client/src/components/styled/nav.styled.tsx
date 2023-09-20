import { Box, AppBar as MuiAppBar, Toolbar as MuiToolbar } from "@mui/material";
import styled from "@emotion/styled";

export const AppBar = styled(MuiAppBar)`
  z-index: 2000;
  background-color: white;
  color: black;
`;

export const Toolbar = styled(MuiToolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled(Box)`
  margin-right: auto;
  max-width: 100px;
  max-height: 45px;
  overflow: hidden;
  & > img {
    width: 100%;
  }
`;

export const ToolbarIcons = styled(Box)`
  display: flex;
  align-items: center;
  gap: 4px;
`;
