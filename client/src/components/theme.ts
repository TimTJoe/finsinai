// import { createTheme } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const CustomTheme = createTheme({
  palette: {
    primary: {
      main: "#257bed",
    },
    secondary: {
      main: "#282828",
    },
    warning: {
      main: "#e01e5a",
    },
    error: {
      main: "#fe3030",
    },
    success: {
      main: "#25d366",
    },
  },
  components: {
    //Overide MUI Button Default styles
    MuiButton: {
      styleOverrides: {
        contained: {
          padding: "6px 20px",
          fontSize: "13px",
          fontWeight: "900",
          borderRadius: "17px",
          textTransform: "none",
          boxShadow: "none",
        },
        outlined: {
          padding: "6px 20px",
          fontSize: "13px",
          fontWeight: "900",
          borderRadius: "17px",
          textTransform: "none",
          boxShadow: "none",
        },
        text: {
          fontSize: "13px",
          fontWeight: "900",
          borderRadius: "17px",
          textTransform: "none",
          boxShadow: "none",
        },
        containedSuccess: {
          color: "white",
        },
      },
    },
  },
});
