import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const SideMenuContainer = styled(Box)({
  height: "100vh",
  width: "150px",
  backgroundColor: "#e3eae7",
  display: "block",
  "@media (max-width: 900px)": {
    display: "none",
  },
});
