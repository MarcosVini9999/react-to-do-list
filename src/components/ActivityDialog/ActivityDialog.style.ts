import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& button": {
    color: "black",
  },
}));

export const DialogDescription = styled(Box)({
  margin: "0",
  marginBottom: "10px",
  display: "flex",
  alignItems: "baseline",
});
