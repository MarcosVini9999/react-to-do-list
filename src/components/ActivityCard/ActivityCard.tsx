import {
  Autocomplete,
  Box,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import React from "react";
import {
  ActivityCardContainer,
  ActivityCardWrapper,
} from "./ActivityCard.style";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { MobileDateTimePicker, DateTimePicker } from "@mui/x-date-pickers";

interface ActivityCardProps {
  actionType?: "add" | "delete";
  taskTitle?: string;
  dateTime?: string;
  projectNames: Array<string>;
  taskProject?: string;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  actionType = "delete",
  taskTitle,
  dateTime,
  projectNames,
  taskProject,
}) => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const [title, setTitle] = React.useState<String | null>();

  const handleDate = (date: Dayjs | null) => {
    setDate(date);
  };
  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value.toUpperCase());
  };

  React.useEffect(() => {
    if (dateTime) setDate(dayjs(dateTime));
  });

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
          className="activityPropertiesLabel"
          onChange={handleTitle}
          value={title}
          defaultValue={taskTitle}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {document.body.clientWidth > 900 ? (
            <DateTimePicker
              label="Date - Time"
              value={date}
              onChange={handleDate}
              renderInput={(params) => <TextField {...params} />}
              className="activityPropertiesLabel"
            />
          ) : (
            <MobileDateTimePicker
              value={date}
              onChange={handleDate}
              label="With error handler"
              inputFormat="YYYY/MM/DD hh:mm a"
              mask="____/__/__ __:__ _M"
              renderInput={(params) => <TextField {...params} />}
              className="activityPropertiesLabel"
            />
          )}
        </LocalizationProvider>
        <Autocomplete
          options={projectNames}
          renderInput={(params) => <TextField {...params} label="Project" />}
          className="activityPropertiesLabel"
          defaultValue={taskProject}
        />
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
