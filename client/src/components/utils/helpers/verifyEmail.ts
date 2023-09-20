/**
 * Verify input email against the db email
 *
 * @param email input email address
 * @returns true if email match else throw an error
 */
export const verifyEmail = (email: string) => {
  let savedUser: any = localStorage.getItem("fs_user");
  savedUser = JSON.parse(savedUser);
  if (email === savedUser.email) {
    return true;
  } else {
    throw {
      errors: {
        name: "email",
        message: "Email not registered. Try again.",
      },
    };
  }
};

export default verifyEmail
