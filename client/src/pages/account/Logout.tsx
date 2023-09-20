import { Backdrop, CircularProgress, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const goto = useNavigate();
  setTimeout(() => {
    localStorage.removeItem("fs_user");
    goto("/account/signin");
  }, 2000);
  return (
    <Backdrop open={true}>
      <Paper sx={{ p: 4, textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="h6">Logging out...</Typography>
      </Paper>
    </Backdrop>
  );
};

export default Logout;
