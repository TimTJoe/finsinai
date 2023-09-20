import {
  Box,
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { grey } from "@mui/material/colors";
import CustomDialog from "@components/common/custom.dialog";
import { RxCross2 } from "react-icons/rx";

interface IActions {
  title: string;
  children: React.ReactNode;
  handleSubmit: React.BaseSyntheticEvent | any;
  open: boolean;
  closeForm: () => void;
}

export const FormDialog: React.FC<IActions> = ({
  title,
  children,
  handleSubmit,
  open,
  closeForm,
}) => {
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleClick = () => {
    setDisabled(true);
    setTimeout(() => {
      handleSubmit();
      setDisabled(false);
    }, 2000);
  };

  return (
    <CustomDialog bgcolor={"white"} open={open} onClose={closeForm}>
      <Box component="form" method="post">
        <DialogTitle sx={{ m: 0, p: 2 }}>
          {title}
          <IconButton
            onClick={closeForm}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: grey[500],
            }}
          >
            <RxCross2 />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>
          <Button
            onClick={handleClick}
            type="submit"
            variant="contained"
            disableElevation
            startIcon={
              disabled ? <CircularProgress size={20} color="inherit" /> : null
            }
            disabled={disabled}
          >
            Save
          </Button>
          <Button onClick={closeForm} variant="text">
            Cancel
          </Button>
        </DialogActions>
      </Box>
    </CustomDialog>
  );
};

export default FormDialog;
