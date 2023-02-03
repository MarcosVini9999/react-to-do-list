import { styled } from "@mui/system";

export const HeaderContainer = styled("header")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#dbf5eb",
  "@media (max-width: 900px)": {
    justifyContent: "space-between",
  },
  "& #btn-mobile": {
    display: "none",
    justifyContent: "space-between !important",
    "@media (max-width: 900px)": {
      display: "block",
    },
  },
  "& #logo": {
    color: "black",
    textDecoration: "none",
    font: "italic 1.2em 'Fira Sans', serif",
    padding: "15px",
    textAlign: "right",
  },
});
