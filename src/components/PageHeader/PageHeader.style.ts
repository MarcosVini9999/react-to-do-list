import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const HeaderContainer = styled("header")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#dbf5eb",
  "@media (max-width: 900px)": {
    justifyContent: "space-between",
  },
  "& #logo": {
    color: "black",
    textDecoration: "none",
    font: "italic 1.2em 'Fira Sans', serif",
    padding: "15px",
    textAlign: "right",
  },
});

export const ActionHeaderWrapper = styled(Box)({
  display: "none",
  "@media (max-width: 900px)": {
    display: "block",
  },
  marginBlock: "auto",
});
