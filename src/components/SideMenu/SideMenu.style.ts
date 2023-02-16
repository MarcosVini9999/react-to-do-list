import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const SideMenuContainer = styled(Box)({
  height: "100vh",
  width: "150px",
  backgroundColor: "#dbf5eb",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@media (max-width: 900px)": {
    display: "none",
  },
});

export const SideMenuWrapper = styled(Box)({
  margin: "15px",
  "& #inbox-filter": {
    "& button": {
      width: "100%",
      color: "black",
    },
  },
  "& .borderBox": {
    backgroundColor: "rgba(0, 0, 0, 0.42)",
    height: "1px",
    width: "100%",
    borderRadius: "10px",
  },
});

export const SideMenuFooterWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginBlock: "10px",
  marginInline: "10px",
  backgroundColor: "#c2e8e3",
  paddingBlock: "5px",
  borderRadius: "10px",
  fontSize: " 14px",
  lineHeight: "18px",
  "& p": {
    margin: "0",
    fontWeight: "400",
  },
  "& a": {
    color: "#4e8dd9",
    textAlign: "center",
  },
  "& a:hover": {
    color: "#fe6960",
  },
});

export const AddProjectWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2px",
});
