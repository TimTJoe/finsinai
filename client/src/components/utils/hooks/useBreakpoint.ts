import { useMediaQuery, useTheme } from "@mui/material";

/**
 * Get the string representation of the screen type
 * @returns small or large
 */
export const useBreakpoint = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const screenSize = isSmallScreen ? "small" : "large";
  return screenSize;
};

export default useBreakpoint;
