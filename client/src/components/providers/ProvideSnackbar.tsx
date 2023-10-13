import Snackbar from "@components/common/custom.snackbar";
import { Button } from "@mui/material";
import { createContext, useContext, useState } from "react";

interface IProvideSnackbar {
  children: React.ReactNode;
}

const withSnackbar = createContext<any | undefined>(undefined);

const ProvideSnackbar: React.FC<IProvideSnackbar> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("Message");

  const openSnackbar = (msg: string) => {
    setOpen(true);
    setMsg(msg);
  };
  const closeSnackbar = () => {
    setOpen(false);
  };

  const values = {
    openSnackbar,
  };

  return (
    <withSnackbar.Provider value={values}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={closeSnackbar}
        message={msg}
        action={<Button onClick={closeSnackbar}>CLOSE</Button>}
      />
    </withSnackbar.Provider>
  );
};

const useSnackbar = () => {
  const context = useContext(withSnackbar);
  if (!context) {
    console.error("useSnackbar must be used in a Provider");
  }
  return context;
};

export { ProvideSnackbar, useSnackbar };
