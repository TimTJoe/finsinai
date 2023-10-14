import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Button } from "./styled/common.styled";
const Content = styled(Box)`
  display: grid;
  place-items: center;
  align-content: center;
  min-height: 100vh;
`;
const Container = styled(Box)`
  text-align: center;
`;

const NoMatch = () => {
  const location = useLocation();
  return (
    <Content>
      <Container>
        <Typography variant="body1">404 error {location.pathname}</Typography>
        <Typography variant="h4" m={2}>
          Not Found!
        </Typography>
        <Button href="/" variant="contained">
          Go Home
        </Button>
      </Container>
    </Content>
  );
};

export default NoMatch;
