import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const ToDoListWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  height: "100%",
  padding: "20px",
  margin: "10px",
  overflowY: "scroll",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  "@media (max-width: 400px)": {
    padding: "0px",
  },
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
});
