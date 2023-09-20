import React from "react";
import { Box, BoxProps } from "@mui/material";
import styled from "@emotion/styled";

interface CustomSpanProps extends BoxProps {
  bgcolor?: string;
}

const CustomSpanStyled = styled(Box)<CustomSpanProps>`
  background-color: ${(props) => props.bgcolor || "transparent"};
  border-radius: 50px;
  padding: 6px;
  font-weight: 600;
`;

const CustomSpan: React.FC<CustomSpanProps> = ({
  children,
  bgcolor,
  ...rest
}) => {
  return (
    <CustomSpanStyled component="span" bgcolor={bgcolor} {...rest}>
      {children}
    </CustomSpanStyled>
  );
};

export default CustomSpan;
