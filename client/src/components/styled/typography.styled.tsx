import { Typography } from "@mui/material";
import { grey, blue } from "@mui/material/colors";
import styled from "@emotion/styled";

export const Headline = styled(Typography)`
  font-weight: 900;
`;

export const Tagline = styled(Typography)`
  line-height: 1;
  padding-top: 12px;
  color: ${grey[800]};
`;

export const Subline = styled(Typography)`
  line-height: 1;
  font-weight: 900;
`;

export const Infoline = styled(Typography)`
  text-align: left;
  & a {
    text-decoration: none;
    color: ${blue[800]};
    font-weight: bolder;
  }
`;
