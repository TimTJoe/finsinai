import {
  Drawer as MuiDrawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { blue, blueGrey, grey } from "@mui/material/colors";

export const CustomDrawer = styled(MuiDrawer)`
  width: 240px;
  flex-shrink: 0;
  .MuiDrawer-paper {
    width: 240px;
    box-sizing: border-box;
    box-shadow: var(--box-shadow-1);
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
`;

export const DrawerContent = styled.div`
  padding: 8px;
`;

export const DrawerList = styled(List)`
  display: flex;
  flex-direction: column;
`;

export const DrawerListItem = styled(ListItem)`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background-color: ${blueGrey[50]};
  }
`;

export const DrawerListItemIcon = styled(ListItemIcon)`
  min-width: 12px;
  font-size: 1.4rem;
`;

export const DrawerListItemText = styled(ListItemText)`
  .MuiTypography-root {
    font-size: 1.1rem;
    color: ${grey[800]};
  }
`;

export const DrawerHeaderTitle = styled(Typography)`
  flex-grow: 1;
`;
