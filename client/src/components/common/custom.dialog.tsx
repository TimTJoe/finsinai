import styled from "@emotion/styled";
import Dialog, { DialogProps } from "@mui/material/Dialog"
interface CustomDialogProps extends DialogProps {
  bgcolor?: string;
}
export const CustomDialog = styled(Dialog)<CustomDialogProps>`
  div.MuiPaper-root {
    border-radius: 12px;
    background-color: ${(props) => props.bgcolor || "white"};
    @media (min-width: 600px) {
      width: 449px;
      /* min-height: 435px; */
    }
  }
`;

export default CustomDialog