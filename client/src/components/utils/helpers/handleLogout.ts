import { useNavigate } from "react-router-dom";
/**
 * Log user out
 * 
 * Delete user from local storage
 * redirect to sign in page
 */
export const handleLogout = () => {
  const goto = useNavigate();
  localStorage.removeItem("fs_user");
  goto("account/signin");
};
