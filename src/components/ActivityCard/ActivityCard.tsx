import { Box, IconButton, TextField, Tooltip } from "@mui/material";
import React from "react";
import {
  ActivityCardContainer,
  ActivityCardWrapper,
} from "./ActivityCard.style";
import dayjs, { Dayjs } from "dayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface ActivityCardProps {
  actionType?: "add" | "delete";
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  actionType = "delete",
}) => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const [title, setTitle] = React.useState<String | null>();

  const handleDate = (date: Dayjs | null) => {
    setDate(date);
  };
  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value.toUpperCase());
  };

  return (
    <ActivityCardContainer>
      {actionType !== "add" && (
        <Box className="checkBoxWrapper">
          <Checkbox />
        </Box>
      )}
      <ActivityCardWrapper>
        <TextField
          label="Title"
          variant="outlined"
          className="activityTitle"
          onChange={handleTitle}
          value={title}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Date - Time"
            value={date}
            onChange={handleDate}
            renderInput={(params) => <TextField {...params} />}
            className="activityDate"
            minDate={dayjs()}
          />
        </LocalizationProvider>
        <Box className="actionActivityWrapper">
          {actionType === "add" ? (
            <Tooltip title="Add">
              <IconButton>
                <AddCircleIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </ActivityCardWrapper>
    </ActivityCardContainer>
  );
};
