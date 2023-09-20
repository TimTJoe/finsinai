import { ListItemText, ListItem as MuiListItem } from "@mui/material";
import styled from "@emotion/styled";

export const ListItem = styled(MuiListItem)`
  padding: 4px 8px;
  border-radius: 13px;
  will-change: size;
  &:hover {
    transition: all .3s ease-in;
    box-shadow: -1px 2px 5px rgba(116, 116, 116, 0.315);
    transform: scale(1);
  }
`;

export const ListInnerText = styled(ListItemText)`
    font-size: .9rem;
    font-weight: bolder;
`
