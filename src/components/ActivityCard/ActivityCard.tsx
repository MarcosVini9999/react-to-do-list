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
  onAddTask?: (
    taskTitle: string,
    dateTime: string,
    taskProject: string
  ) => void;
  onRemoveTask?: (projectName: string, taskTitle: string) => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  actionType = "delete",
  taskTitle,
  dateTime,
  projectNames,
  taskProject,
  onAddTask,
  onRemoveTask,
}) => {
  const [date, setDate] = React.useState<Dayjs | null>(
    dayjs(dateTime ? dateTime : undefined)
  );
  const [title, setTitle] = React.useState<string>(taskTitle ? taskTitle : "");
  const [project, setProject] = React.useState<string>(
    taskProject ? taskProject : ""
  );
  const [newProject, setNewProject] = React.useState<string>("");

  const handleDate = (date: Dayjs | null) => {
    setDate(date);
  };
  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleProject = (
    event: React.ChangeEvent<{}>,
    newProject: string | null
  ) => {
    setProject(newProject ? newProject : "");
  };
  const handleProjectInputChange = (
    event: React.ChangeEvent<{}>,
    newInputValue: string
  ) => {
    setNewProject(newInputValue);
  };
  const handleAddClick = () => {
    if (title && date && project) {
      if (onAddTask) onAddTask(title, date.format(), project);
      setTitle("");
      setDate(dayjs());
      setProject("");
    }
  };
  const handleRemoveProject = () => {
    if (title && date && project) {
      if (onRemoveTask) onRemoveTask(project, title);
    }
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
          className="activityPropertiesLabel"
          onChange={handleTitle}
          value={title}
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
          options={[...projectNames, newProject]}
          renderInput={(params) => <TextField {...params} label="Project" />}
          className="activityPropertiesLabel"
          value={project}
          onChange={handleProject}
          freeSolo
          inputValue={newProject}
          onInputChange={handleProjectInputChange}
        />
        <Box className="actionActivityWrapper">
          {actionType === "add" ? (
            <Tooltip title="Add" onClick={handleAddClick}>
              <IconButton>
                <AddCircleIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Delete" onClick={handleRemoveProject}>
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
