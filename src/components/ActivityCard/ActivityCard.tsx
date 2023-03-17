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
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { MobileDateTimePicker, DateTimePicker } from "@mui/x-date-pickers";
import { ActivityDialog } from "@/components";
import { Task } from "@/config/interfaces/Itask";

interface ActivityCardProps {
  actionType: "add" | "delete";
  task?: Task;
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
  projectNames,
  taskProject,
  onAddTask,
  onRemoveTask,
  task,
}) => {
  const [date, setDate] = React.useState<Dayjs | null>(
    dayjs(task?.dateTime ? task.dateTime : undefined)
  );
  const [title, setTitle] = React.useState<string>(
    task?.title ? task.title : ""
  );
  const [project, setProject] = React.useState<string>(
    taskProject ? taskProject : ""
  );
  const [newProject, setNewProject] = React.useState<string>("");
  const [activityDialogStatus, setActivityDialogStatus] = React.useState(false);

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
    if (title && date && project && task?.key) {
      if (onRemoveTask) onRemoveTask(project, task.key);
    }
  };
  const handleActivityDialogStatus = () => {
    setActivityDialogStatus(true);
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
          disabled={actionType === "delete"}
          label="Title"
          variant="outlined"
          className="activityPropertiesLabel"
          onChange={handleTitle}
          value={title}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {document.body.clientWidth > 900 ? (
            <DateTimePicker
              disabled={actionType === "delete"}
              label="Date - Time"
              value={date}
              onChange={handleDate}
              renderInput={(params) => <TextField {...params} />}
              className="activityPropertiesLabel"
              minDate={dayjs()}
            />
          ) : (
            <MobileDateTimePicker
              disabled={actionType === "delete"}
              value={date}
              onChange={handleDate}
              label="With error handler"
              inputFormat="YYYY/MM/DD hh:mm a"
              mask="____/__/__ __:__ _M"
              renderInput={(params) => <TextField {...params} />}
              className="activityPropertiesLabel"
              minDate={dayjs()}
            />
          )}
        </LocalizationProvider>
        <Autocomplete
          disabled={actionType === "delete"}
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
            <React.Fragment>
              <Tooltip title="Delete" onClick={handleRemoveProject}>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Open Menu" onClick={handleActivityDialogStatus}>
                <IconButton>
                  <MenuOpenIcon />
                </IconButton>
              </Tooltip>
            </React.Fragment>
          )}
        </Box>
      </ActivityCardWrapper>
      {task ? (
        <ActivityDialog
          activityDialogStatus={activityDialogStatus}
          changeActivityDialogStatus={setActivityDialogStatus}
          project={project}
          task={task}
        />
      ) : null}
    </ActivityCardContainer>
  );
};
