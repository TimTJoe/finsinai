import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { DrawerProps } from "@mui/material/Drawer";

import {
  DrawerContent as Content,
  DrawerList as List,
  DrawerListItem as Item,
  DrawerListItemIcon as ItemIcon,
  DrawerListItemText as ItemText,
  CustomDrawer as Sidebar,
} from "@components/styled/drawer.styled";
import DrawerItems from "./drawer.items";

interface IDrawer extends DrawerProps {
  openDrawer?: () => void;
  open: boolean;
}

export const Drawer: React.FC<IDrawer> = ({ openDrawer, open, ...rest }) => {
  return (
    <Sidebar anchor="left" open={open} onClose={openDrawer} {...rest}>
      <Toolbar variant="dense" />
      <Content>
        <List>
          {DrawerItems.map((item, index) => (
            <Item
              key={index}
              component="a"
              href={item.link}
              onClick={openDrawer}
            >
              <ItemIcon>{item.icon}</ItemIcon>
              <ItemText primary={item.text} />
            </Item>
          ))}
        </List>
      </Content>
    </Sidebar>
  );
};

export default Drawer;
