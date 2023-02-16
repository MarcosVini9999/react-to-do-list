import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const ProjectsWrapper = styled(Box)({
  display: "flex",
  width: "100%",
  height: "170px",
  overflowY: "scroll",
  flexDirection: "column",
  alignItems: "center",
  gap: "2px",
  "&::-webkit-scrollbar": {
    width: "0.4em",
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
  "& button": {
    width: "100%",
    color: "black",
  },
});
