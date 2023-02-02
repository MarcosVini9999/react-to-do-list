import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const SideMenuContainer = styled(Box)({
  height: "100vh",
  width: "150px",
  backgroundColor: "#dbf5eb",
  display: "block",
  "@media (max-width: 900px)": {
    display: "none",
  },
});
