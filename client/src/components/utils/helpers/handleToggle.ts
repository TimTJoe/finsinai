// components/Dashboard.tsx
import { useState } from "react";

//MUI Modules
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

// Custome Modules

//+===================================================================================
export const handleToggle = () => {
        const theme = useTheme();
      const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
      const [isModalOpen, setIsModalOpen] = useState(!isSmallScreen);
      const [drawerVariant, setDrawerVariant] = useState( isSmallScreen ? "temporary" : "permanent");
      
      const drawerToggle = () => {
        if (isSmallScreen) {
          setIsModalOpen((prevOpen) => !prevOpen);
        } else {
          if (isModalOpen) {
            //remove drawer from DOM and hide
            setDrawerVariant("temporary");
            setIsModalOpen(false);
          } else {
            //add drawer to DOM and show
            setDrawerVariant("permanent");
            setIsModalOpen(true);
          }
        }
      };
     return {drawerToggle, drawerVariant, isModalOpen}
 } 