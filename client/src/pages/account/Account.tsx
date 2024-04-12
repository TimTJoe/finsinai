import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SigninView from "./views/Signin.view";
import SignupView from "./views/Signup.view";
import AccountView from "./views/account.view";
import Slide from "@components/animations/Slide";

const Account = () => {
  let { params } = useParams();
  let [viewType, setViewType] = useState("account");

  useEffect(() => {
    if (params) {
      if (params.toLocaleLowerCase() === "signin") {
        setViewType("signin");
      } else if (params.toLocaleLowerCase() === "signup") {
        setViewType("signup");
      }
    }
    console.log(params);
  }, [params]);

  const view = {
    signin: <SigninView />,
    signup: <SignupView />,
    account: <AccountView />,
  }[viewType];

  return (
    <Slide direction="left">
      <div>{view}</div>
    </Slide>
  );
};

export default Account;
