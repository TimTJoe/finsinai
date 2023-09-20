import { Box as MuiBox, Typography, Box, Stack } from "@mui/material";
import styled from "@emotion/styled";
import { blue, grey } from "@mui/material/colors";

export const Wrapper = styled(MuiBox)``;

export const Container = styled(MuiBox)`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: ${grey[200]};
`;

export const InnerBlock = styled(MuiBox)`
  margin: 10px;
  min-width: 80%;
`;

export const GridContainer = styled(MuiBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BlockBox = styled(Box)`
  border: thin solid ${grey[300]};
  padding: 12px;
  border-radius: 12px;
`;

export const BlockHeader = styled(Box)`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 12px;
`;

export const TextBox = styled(Typography)`
  line-height: 1;
  padding: 8px 0;
  font-size: small;

  & a {
    color: ${blue[800]};
    text-decoration: none;
  }

  & time {
    color: ${grey[600]};
  }
`;

export const ActionBox = styled(Stack)`
  align-items: center;
  gap: 12px;

  & > :last-child {
    margin-left: auto;
  }
`;

export const MediaBlock = styled(Box)`
  display: flex;
  gap: 17px;
`;

export const Media = styled(Box)`
  position: relative;
  width: 125px;
  height: 125px;
  border: solid ${grey[200]};
  border-radius: 50%;
  overflow: hidden;

  & > img {
    max-width: 100%;
  }
`;
export const Block = styled(Box)`
  flex: 2;
  flex-grow: 1;
  gap: 8px;
`;

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const EditPicture = styled(Box)`
  position: absolute;
  background-color: #4848488c;
  bottom: 0;
  min-width: 100%;
  height: 35%;
  text-align: center;
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 1.75rem;
  color: ${grey[200]};
  transition: all 0.1s ease-out;

  &:hover {
    background-color: #343333b4;
  }
`;
