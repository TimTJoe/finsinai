import React from "react";
import { Box, BoxProps } from "@mui/material";
import styled from "@emotion/styled";

interface CustomBoxProps extends BoxProps {
  bgcolor?: string;
}

const CustomBoxStyled = styled(Box)<CustomBoxProps>`
  background-color: ${(props) => props.bgcolor || "white"};
  border-radius: 16px;
  padding: 12px;
`;

const CustomBox: React.FC<CustomBoxProps> = ({
  children,
  bgcolor,
  ...rest
}) => {
  return (
    <CustomBoxStyled bgcolor={bgcolor} {...rest}>
      {children}
    </CustomBoxStyled>
  );
};

export default CustomBox;
