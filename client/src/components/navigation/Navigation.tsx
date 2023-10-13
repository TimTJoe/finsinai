import React from "react";
import {
  RxAvatar,
  RxHamburgerMenu,
} from "react-icons/rx";
import { Box, Button, IconButton } from "@mui/material";
import { AppBarProps } from "@mui/material/AppBar";
import { AppBar, Toolbar, ToolbarIcons } from "@components/styled/nav.styled";
import { SquardLogo } from "@components/common/Logo";
import { useNavigate } from "react-router-dom";

interface IAppBar extends AppBarProps {
  openDrawer: () => void;
  open: boolean;
}

const Navigation: React.FC<IAppBar> = ({ openDrawer, open, ...rest }) => {
  const goto = useNavigate();

  return (
    <AppBar position="static" {...rest} elevation={0}>
      <Toolbar variant="dense">
        <IconButton
          color="inherit"
          aria-label="menu"
          edge="start"
          onClick={openDrawer}
        >
          <RxHamburgerMenu />
        </IconButton>
        <Box component={"a"} href="/">
          {<SquardLogo />}
        </Box>
        <ToolbarIcons>
          <Button
            onClick={() => goto("/account/signin")}
            variant="outlined"
            startIcon={<RxAvatar />}
          >
            Sign in
          </Button>
        </ToolbarIcons>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
