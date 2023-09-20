import styled from "@emotion/styled";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { grey } from "@mui/material/colors";

export const CustomList = styled(List)`
  display: flex;
  flex-direction: column;
`;


export const CustomListItem = styled(ListItem)`
  background-color: ${grey[50]};
  border-radius: 12px;
`;


export const CustomItemIcon = styled(ListItemIcon)`
  min-width: 12px;
  font-size: 1.27rem;
  color: ${grey[800]};
`;

export const CustomItemText = styled(ListItemText)`
  .MuiTypography-root {
    font-size: 16px;
    color: black;
  }
`;
