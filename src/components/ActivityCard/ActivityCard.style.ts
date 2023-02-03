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
    margin: "auto",
  },
});

export const ActivityCardWrapper = styled(Box)({
  display: "flex",
  flexGrow: "1",
  "& .activityTitle": {
    width: "-webkit-fill-available",
    minWidth: "246px",
    margin: "5px",
  },
  "& .activityDate": {
    minWidth: "246px",
    width: "-webkit-fill-available",
    margin: "5px",
  },
  "@media (max-width: 900px)": {
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
