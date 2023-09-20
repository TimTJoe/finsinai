import { MdDarkMode, MdMode } from "react-icons/md";
import { Switch, Typography } from "@mui/material";
import { ActionBox, BlockBox } from "@components/styled/account.styled";

export const AccountPreference = () => {
  return (
    <BlockBox>
      <ActionBox direction={"row"}>
        <MdDarkMode />
        <Typography>Dark Mode</Typography>
        <Switch />
      </ActionBox>
      <ActionBox direction={"row"}>
        <MdMode />
        <Typography>Dark Mode</Typography>
        <Switch />
      </ActionBox>
      <ActionBox direction={"row"}>
        <MdMode />
        <Typography>Dark Mode</Typography>
        <Switch />
      </ActionBox>
    </BlockBox>
  );
};

export default AccountPreference;
