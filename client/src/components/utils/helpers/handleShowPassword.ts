import { useState } from "react";

export const handleShowPassword = () => {
  const [showPassword, changeShowPassword] = useState(false);

  const setShowPassword = () => {
    changeShowPassword(!showPassword);
  };

  return { showPassword, setShowPassword };
};

export default handleShowPassword;
