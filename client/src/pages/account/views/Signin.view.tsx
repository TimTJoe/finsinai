import { SigninForm } from "@components/form/Signin.form";
import {
  GridContainer,
  InnerBlock,
  Container,
} from "@components/styled/account.styled";
import { Headline, Tagline } from "@components/styled/typography.styled";
import useBreakpoint from "@components/utils/hooks/useBreakpoint";
import { Box } from "@mui/material";

export const SigninView = () => {
  const screenSize = useBreakpoint();

  const content = {
    small: (
      <Box>
        <Headline variant="h2">Manage Budgets</Headline>
        <Tagline variant="h4">
          Create and monitor your finances,
          <br /> Empower your report.
        </Tagline>
        <SigninForm />
      </Box>
    ),
    large: (
      <GridContainer>
        <Box>
          <Headline variant="h2">Manage Budgets</Headline>
          <Tagline variant="h4">
            Create and monitor your finances.
            <br /> Empower your report.
          </Tagline>
        </Box>
        <Box>
          <SigninForm />
        </Box>
      </GridContainer>
    ),
  }[screenSize];

  return (
    <Container>
      <InnerBlock>{content}</InnerBlock>
    </Container>
  );
};

export default SigninView;
