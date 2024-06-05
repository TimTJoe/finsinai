import { makeStyles, tokens } from "@fluentui/react-components";
import bgImg from "@assets/start_background.jpg";

export const StartStyles = makeStyles({
  wrapper: {
    width: "99.98vw",
    height: "99.98vh",
    display: "grid",
    placeItems: "center",
    // background: `no-repeat center url(${bgImg})`,
    background:
      "linear-gradient(to bottom right, #b187e9e0, #5f8fe785, #d490c963)",
  },
  content: {
    maxHeight: "75vh",
    maxWidth: "85vw",
    display: "flex",
    gap: tokens.spacingHorizontalL,
    alignItems: "center",
  },
  copy: {},
  figure: {
    width: "500px",
    height: "300px",
    borderRadius: "17px",
    border: "25px solid #f1f1f1a1",

    "& img": {
      height: "inherit",
      width: "inherit",
    },
  },
  btnGroup: {
    display: "flex",
    alignItems: "center",
    columnGap: tokens.spacingVerticalL,
  },
  primary: {
    padding: tokens.spacingVerticalM,
  },
  secondary: {
    padding: tokens.spacingVerticalM,
  },
});
