import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { BootstrapDialog, DialogDescription } from "./ActivityDialog.style";
import {
  Autocomplete,
  Button,
  DialogActions,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Task } from "@/config/interfaces/Itask";
import { updateTask } from "@/stores/features/projectSlicer";
import {
  MobileDateTimePicker,
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

interface ActivityDialogProps {
  activityDialogStatus: boolean;
  changeActivityDialogStatus: (status: boolean) => void;
  project: string;
  task: Task;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export const ActivityDialog: React.FC<ActivityDialogProps> = ({
  activityDialogStatus,
  changeActivityDialogStatus,
  project,
  task,
}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState<string>(
    task?.title ? task.title : ""
  );
  const [description, setDescription] = React.useState<string>(
    task?.description ? task.description : ""
  );
  const [dateTime, setDateTime] = React.useState<Dayjs | null>(
    dayjs(task?.dateTime ? task?.dateTime : undefined)
  );

  const handleClose = () => {
    changeActivityDialogStatus(false);
    dispatch(
      updateTask({
        ...task,
        title,
        dateTime,
        description,
      })
    );
  };
  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDescription = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };
  const handleDate = (date: Dayjs | null) => {
    setDateTime(date);
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={activityDialogStatus}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        {project}
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <DialogDescription>
          <TextField
            label="Title"
            variant="outlined"
            className="activityPropertiesLabel"
            onChange={handleTitle}
            value={title}
          />
        </DialogDescription>
        <DialogDescription>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {document.body.clientWidth > 900 ? (
              <DateTimePicker
                label="Date - Time"
                value={dayjs(dateTime)}
                onChange={handleDate}
                renderInput={(params) => <TextField {...params} />}
              />
            ) : (
              <MobileDateTimePicker
                value={dayjs("2022-04-07")}
                onChange={handleDate}
                label="With error handler"
                inputFormat="YYYY/MM/DD hh:mm a"
                mask="____/__/__ __:__ _M"
                renderInput={(params) => <TextField {...params} />}
              />
            )}
          </LocalizationProvider>
        </DialogDescription>

        <DialogDescription>
          <TextareaAutosize
            minRows={5}
            placeholder="Enter task description here"
            value={description}
            onChange={handleDescription}
          />
        </DialogDescription>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Save task changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};
