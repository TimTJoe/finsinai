/**
 * Remove all no alphabetical value from input field excluding password field
 */
export const stringify = (v: any) => {
  if (v.target.name === "password") {
    return v.target.value;
  }
  let fv = v.target.value.replace(/[^a-zA-Z.()@& ]/g, "");
  return fv;
};

export default stringify;


