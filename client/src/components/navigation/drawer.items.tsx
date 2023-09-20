import React from "react";

import { AiFillPieChart, AiOutlinePayCircle } from "react-icons/ai";
import {
  RxDashboard,
  RxRocket,
  RxTarget,
  RxInfoCircled,
  RxGear,
} from "react-icons/rx";

interface DrawerItem {
  text: string;
  icon: React.ReactNode;
  link: string;
}

export const DrawerItems: DrawerItem[] = [
  {
    text: "Overview",
    icon: <RxDashboard />,
    link: "/",
  },

  {
    text: "Income",
    icon: <RxRocket />,
    link: "/income",
  },
  {
    text: "Expense",
    icon: <AiOutlinePayCircle />,
    link: "/expense",
  },
  {
    text: "Help",
    icon: <RxInfoCircled />,
    link: "/help",
  },
  {
    text: "Setting",
    icon: <RxGear />,
    link: "/settings",
  },
];

export default DrawerItems;
