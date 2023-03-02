import { styled } from "@mui/system";
import { Box, Button } from "@mui/material";

export const ProjectsContainer = styled(Box)({
  display: "flex",
  width: "100%",
  overflowY: "scroll",
  flexDirection: "column",
  alignItems: "center",
  gap: "2px",

  "@media (min-height: 480px)": {
    height: "100px",
  },
  "@media (min-height: 640px)": {
    height: "250px",
  },
  "@media (min-height: 800px)": {
    height: "400px",
  },
  "@media (min-height: 1024px)": {
    height: "550px",
  },

  "&::-webkit-scrollbar": {
    width: "0.4em",
    height: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0,0,0,.1)",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "rgba(0,0,0,.3)",
  },
});

export const ProjectButtonWrapper = styled(Button)({
  width: "100%",
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
