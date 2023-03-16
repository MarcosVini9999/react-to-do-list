import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const ProjectButtonWrapper = styled(Button)({
  width: "100%",
  textTransform: "unset",
  "& p": {
    color: "black",
    fontSize: "12px",
    lineHeight: "30px",
    textAlign: "center",
    margin: "auto",
  },
  "& button": {
    padding: "0px",
    minWidth: "0",
    color: "#808080",
    "& :hover": {
      color: "#363636",
    },
  },
});
