import { SignupForm } from "@components/form/Signup.form";
import {
  GridContainer,
  InnerBlock,
  Container,
} from "@components/styled/account.styled";
import { Headline, Tagline } from "@components/styled/typography.styled";
import useBreakpoint from "@components/utils/hooks/useBreakpoint";
import { Box } from "@mui/material";

export const SignupView = () => {
  const screenSize = useBreakpoint();

  const content = {
    large: (
      <GridContainer>
        <Box>
          <Headline variant="h2">Get Started</Headline>
          <Tagline variant="h4">
            Create and monitor your finances.
            <br /> Empower your report.
          </Tagline>
        </Box>
        <Box>
          <SignupForm />
        </Box>
      </GridContainer>
    ),
    small: (
      <Box>
        <Box>
          <Headline variant="h4" textAlign={"center"} color={"black"}>
            Get Started
          </Headline>
          <Tagline
            variant="h6"
            gutterBottom
            textAlign={"center"}
            sx={{ mb: 2 }}
          >
            Manage income and expense budgets,
            <br /> generate vouchers and financial reports.
          </Tagline>
        </Box>
        <SignupForm />
      </Box>
    ),
  }[screenSize];

  return (
    <Container>
      <InnerBlock>{content}</InnerBlock>
    </Container>
  );
};

export default SignupView;
