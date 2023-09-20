import styled from "@emotion/styled";
import { Menu, MenuItem as MuiMenuItem } from "@mui/material";
import { blue } from "@mui/material/colors";

export const MenuContainer = styled(Menu)`
  margin-top: 30px;
  z-index: 3000;

  .MuiMenu-paper {
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    min-width: 150px;
  }
  .MuiMenu-list {
    border-radius: 12px;
    padding: 8px;
  }
`;
export const MenuItem = styled(MuiMenuItem)`
  border-radius: 8px;

  &:hover {
    background-color: ${blue[100]};
  }
`;
