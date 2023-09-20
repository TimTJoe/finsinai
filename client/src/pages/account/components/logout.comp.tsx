import { Button } from "@mui/material";
import styled from "@emotion/styled";

const Footer = styled("footer")`
  padding: 8px;
`;

export const AccountLogout = () => {
  const handleLogout = () => {
    alert("Loging out...");
    //   Navigate()
  };

  return (
    <Footer>
      <Button onClick={handleLogout} variant="text">
        Log out
      </Button>
    </Footer>
  );
};

export default AccountLogout;
