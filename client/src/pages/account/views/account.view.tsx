import { FLEXCOL } from "@components/styled/common.styled";
import { CustomLayout } from "@components/common/custom.layout";
import AccountActivity from "../components/activity.comp";
import AccountLogout from "../components/logout.comp";
import AccountSettings from "../components/settings.comp";
import AccountPreference from "../components/preference.comp";

export const AccountView = () => {
  return (
    <CustomLayout>
      <FLEXCOL>
        <AccountSettings />
        <AccountPreference />
        <AccountActivity />
        <AccountLogout />
      </FLEXCOL>
    </CustomLayout>
  );
};

export default AccountView;
