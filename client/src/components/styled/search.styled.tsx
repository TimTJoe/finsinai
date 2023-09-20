import styled from "@emotion/styled";
import { InputBase, Dialog, Box, Typography } from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";

export const SearchDialog = styled(Dialog)`
  .MuiPaper-root {
    border-radius: 12px;
    min-height: 60vh;
    min-width: 369px;
  }
`;

export const SearchInput = styled(InputBase)`
  .MuiInputBase-input {
    color: black;
    margin-right: 8px;
    border-right: thin solid ${grey[500]};
    font-size: large;
  }
`;

export const SearchHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  border-bottom: thin solid ${blue[400]};
  padding: 12px;
  margin-bottom: 12px;
  align-items: center;
`;

export const SearchContainer = styled("div")`
  position: relative;
  border-radius: 17px;
  background-color: #8e8e8e51;
  width: auto;
  &:hover {
    background-color: #00000051;
  }
  border: thin solid ${grey[200]};

  @media screen and (min-width: 769px) {
    min-width: 350px;
  }
`;

export const SearchIconWrapper = styled("div")`
  padding: 8px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
`;

export const SearchContent = styled(Box)`
  padding: 0 12px 12px 12px;
`;

export const SearchResult = styled(Typography)`
  display: block;
  position: relative;
  padding: 8px;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bolder;
  &:hover {
    background-color: ${blueGrey[50]};
  }
`;

export const IconWrap = styled("span")`
  font-size: 1.55rem;
  font-weight: bolder;
  display: grid;
  place-items: center;
  margin-right: 12px;
`;
