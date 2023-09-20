import { MdHistory } from "react-icons/md";
import { Headline } from "@components/styled/typography.styled";
import { BlockBox, BlockHeader, TextBox } from "@components/styled/account.styled";

export const AccountActivity = () => {
  return (
    <BlockBox>
      <BlockHeader>
        <MdHistory />
        <Headline variant="h6">Activities</Headline>
      </BlockHeader>
      <TextBox variant="body1">
        Visited: <a href="/">budget/new</a>, <time>6 mins ago</time>
      </TextBox>
      <TextBox variant="body1">
        change profile picture <time>6 mins ago</time>
      </TextBox>
    </BlockBox>
  );
};

export default AccountActivity;
