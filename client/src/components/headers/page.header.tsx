import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { MdAdd } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { Subline } from "@components/styled/typography.styled";

interface IPageHeader {
  displayName: string; //name of the page
  handleButton: () => void; //action for button
}

export const PageHeader: React.FC<IPageHeader> = ({
  displayName,
  handleButton,
}) => {
  //get the page name from the url
  const pageName = useLocation().pathname.replace("/", "");

  return (
    <Toolbar
      variant="dense"
      sx={{ justifyContent: "space-between" }}
      disableGutters
    >
      <Subline variant="h6" color={"black"} lineHeight={1}>
        {displayName}
      </Subline>
      <Button
        onClick={handleButton}
        variant="outlined"
        color="secondary"
        startIcon={<MdAdd />}
        size="small"
      >{` New ${pageName}`}</Button>
    </Toolbar>
  );
};
