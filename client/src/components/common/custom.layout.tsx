import { Toolbar, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Navigation from "@components/navigation/Navigation";
import { LayoutBody, LayoutContent } from "@components/styled/layout.styled";
import Slide from "@components/animations/Slide";
import Drawer from "@components/navigation/Drawer";
import ExpenseForm from "../../pages/expense/expense.form";
import IncomeForm from "../../pages/income/income.form";

interface ILayout {
  children: React.ReactNode;
}


export const CustomLayout: React.FC<ILayout> = ({ children }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(!isSmallScreen);
  const [variant, setVariant] = useState<any | undefined>(
    isSmallScreen ? "temporary" : "permanent"
  );

  const openDrawer = () => {
    if (isSmallScreen) {
      setOpen((prevOpen) => !prevOpen);
    } else {
      if (open) {
        setVariant("temporary");
        setOpen(false);
      } else {
        setVariant("permanent");
        setOpen(true);
      }
    }
  };



  return (
    <LayoutBody>
      <Navigation openDrawer={openDrawer} open={open} position="fixed" />
      <Drawer open={open} openDrawer={openDrawer} onClose={openDrawer} variant={variant} />
      <LayoutContent component="main">
        <Slide direction="left">
          <Toolbar variant="dense" />
          {children}
        </Slide>
      </LayoutContent>
      <ExpenseForm />
      <IncomeForm />
    </LayoutBody>
  );
};

export default CustomLayout;
