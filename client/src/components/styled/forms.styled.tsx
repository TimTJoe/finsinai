import {
  Box,
  TextField,
  TextFieldProps,
  BoxProps,
  InputBase as MuiInputBase,
  InputBaseProps,
} from "@mui/material";
import styled from "@emotion/styled";
import { blue, grey } from "@mui/material/colors";

export const FormBox = styled(Box)<BoxProps>`
  border-radius: 12px;
  box-shadow: 2px 4px 6px rgba(34, 34, 34, 0.181);
  padding: 12px;
  background-color: white;
  min-width: 350px;
  color: black;
`;

export const FormHeader = styled(Box)<BoxProps>`
  text-align: center;

  & > img {
    margin: 17px 0;
  }
`;

export const FormBody = styled(Box)<BoxProps>`
  margin-top: 23px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormFooter = styled(Box)<BoxProps>`
  margin-top: 12px;
  text-align: center;
`;

export const InputField = styled(TextField)<TextFieldProps>`
  input.MuiInputBase-input {
    padding: 0.8rem;
  }

  label {
    color: ${grey[500]};
  }

  label.Mui-focused {
    color: ${blue[800]};
    font-weight: bolder;
  }

  .MuiOutlinedInput-root {
    border-radius: 9px;
  }
`;

export const InputBase = styled(MuiInputBase)<InputBaseProps>`
  color: inherit;
  width: 100%;
  color: black;
  border-radius: 8px;
  padding: 0 10px;
  border: thin solid ${grey[300]};
`;

export const Formcol = styled(Box)<BoxProps>`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const Formrow = styled(Box)<BoxProps>`
  display: flex;
  gap: 17px;
`;
