import { styled } from "@mui/system";

export const HeaderContainer = styled("header")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#dbf5eb",
  "& #btn-mobile": {
    display: "none",
    "@media (max-width: 900px)": {
      display: "block",
    },
  },
});
