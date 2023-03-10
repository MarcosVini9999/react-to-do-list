import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const ActivityCardContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  margin: "10px",
  padding: "5px",
  backgroundColor: "#e9ecef",
  borderRadius: "10px",
  "& .checkBoxWrapper": {
    margin: "auto",
  },
  "& .actionActivityWrapper": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "auto",
    "& button": {
      color: "#808080",
    },
    "& :hover": {
      color: "#363636",
    },
  },
  "& .Mui-disabled": {
    color: "rgba(0, 0, 0, 0.6) !important",
    "-webkit-text-fill-color": "rgba(0, 0, 0, 1) !important",
  },
});

export const ActivityCardWrapper = styled(Box)({
  display: "flex",
  flexGrow: "1",

  "& .activityPropertiesLabel": {
    width: "-webkit-fill-available",
    margin: "5px",
  },
  "@media (max-width: 900px)": {
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
