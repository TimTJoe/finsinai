
/**
 * Remove all non-numeric value from inputs that except money values
 */
export const monify = (v: any) => {
  if (v.target.name === "lrd" || v.target.name === "usd") {
    let fv = v.target.value.replace(/[^0-9.]/g, "");
    return Number(fv).toLocaleString("en-US");
  }
  return v.target.value.replace(/[^a-zA-Z0-9-_.()/ ]/g, "");
};

export default monify;
