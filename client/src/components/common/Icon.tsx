import React, { ReactNode } from "react";

interface IconProps {
  children: ReactNode;
  size?: "small" | "large" | "x-large" | string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  children,
  size = "large",
  color = "currentColor",
}) => {
  const iconSize =
    size === "small"
      ? "1rem"
      : size === "large"
      ? "2rem"
      : size === "x-large"
      ? "3rem"
      : typeof size === "string"
      ? size
      : "2rem"; // Default to large

  const iconStyles: React.CSSProperties = {
    width: iconSize,
    height: iconSize,
    fill: color,
  };

  return (
    <span style={iconStyles}>
      {React.cloneElement(children as React.ReactElement, {
        ...((children as React.ReactElement).props || {}),
        style: {
          ...((children as React.ReactElement).props.style || {}),
          fill: "currentColor",
        },
      })}
    </span>
  );
};

export default Icon;
