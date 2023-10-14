import React from "react";
import { IconButton, Typography, Avatar } from "@mui/material";
import { MdMoreVert } from "react-icons/md";
import { MenuContainer, MenuItem } from "@components/styled/menu.styled";
import { useNavigate } from "react-router-dom";

type TMenu = {
  icon: "menu" | "avatar";
  menuitems: {}[];
};

export const Menu = ({ icon, menuitems }: TMenu) => {
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
  const goto = useNavigate();
  let _icon = { avatar: <Avatar />, menu: <MdMoreVert /> }[icon];

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <>
      <IconButton
        sx={{ padding: icon === "avatar" ? 0 : null }}
        onClick={handleOpen}
      >
        {_icon}
      </IconButton>
      <MenuContainer
        anchorEl={anchor}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        {menuitems.map((item: any, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              handleClose();
              goto(`/${item?.url}`);
            }}
          >
            <Typography textAlign="center">{item.label}</Typography>
          </MenuItem>
        ))}
      </MenuContainer>
    </>
  );
};
