/**
 * Verify an password against the registered password
 *
 * @param password registered password
 * @returns true if password match else throw an error
 */
export const verifypassword = (password: string) => {
  let savedUser: any = localStorage.getItem("fs_user");
  savedUser = JSON.parse(savedUser);
  if (password === savedUser.password) {
    return true;
  } else {
    throw {
      errors: {
        name: "password",
        message: "Password is incorrect. Try again.",
      },
    };
  }
};

export default verifypassword;
