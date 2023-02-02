import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const PageLayoutContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "& .active": {
    display: "block !important",
  },
});

export const PageLayoutWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100vh",
});
