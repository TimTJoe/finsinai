import React from "react";
import { IconButton, Typography, Avatar } from "@mui/material";
import { MdMoreVert } from "react-icons/md";
import { MenuContainer, MenuItem } from "@components/styled/menu.styled";

type TMenu = {
  icon: "menu" | "avatar";
  menuitems: {}[];
};

/**
 * Customized MUI Menu react component
 * with icons and menu list populated through props
 *
 * @props String - name of toggler either icon or avatar
 * @returns Customized MUI Menu react Component
 *
 */
export const Menu = ({ icon, menuitems }: TMenu) => {
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

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
        {menuitems.map((item:any, index) => (
          <MenuItem
            component="a"
            href={`/${item?.url}`}
            key={index}
            onClick={handleClose}
          >
            <Typography textAlign="center">{item.label}</Typography>
          </MenuItem>
        ))}
      </MenuContainer>
    </>
  );
};
