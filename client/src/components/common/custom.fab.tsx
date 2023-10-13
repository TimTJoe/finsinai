import { useState, useCallback, SetStateAction } from "react";
import Fab from "@mui/material/Fab";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled"; 
import { Divider } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { useIncome } from "@components/providers/ProvideIncome";
import { useExpense } from "@components/providers/ProvideExpense";

const StyledFab = styled(Fab)`
  position: fixed;
  bottom: 16px;
  right: 16px;
`;

const StyledMenu = styled(Menu)`
  margin-top: -60px;
  & > * {
    padding: 12px;
    box-sizing: border-box;
    border-radius: 12px;
  }
`;

function CustomFab() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { openIncomeForm } = useIncome();
  const { openExpenseForm } = useExpense();

  const handleClick = useCallback((event: { currentTarget: SetStateAction<null>; }) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <div>
      <StyledFab
        onClick={handleClick}
        color="secondary"
        aria-controls="menu"
        aria-haspopup="true"
        size="small"
      >
        {anchorEl ? <CloseOutlined /> : <AddIcon />}
      </StyledFab>
      <StyledMenu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          startIcon={<AddIcon />}
          onClick={openIncomeForm}
        >
          New Income
        </Button>
        <Divider sx={{ mt: 1, mb: 1 }}> OR </Divider>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          startIcon={<AddIcon />}
          onClick={openExpenseForm}
        >
          New Expense
        </Button>
      </StyledMenu>
    </div>
  );
}

export default CustomFab;
