import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { BootstrapDialog, DialogDescription } from "./ActivityDialog.style";
import { Button, DialogActions, TextareaAutosize } from "@mui/material";
import { useDispatch } from "react-redux";
import { Task } from "@/config/interfaces/Itask";
import { updateTask } from "@/stores/features/projectSlicer";

interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

interface ActivityDialogProps {
  activityDialogStatus: boolean;
  changeActivityDialogStatus: (status: boolean) => void;
  project: string;
  task: Task | undefined;
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
  const [description, setDescription] = React.useState<string>(
    task?.description ? task.description : ""
  );

  const handleClose = () => {
    changeActivityDialogStatus(false);
    dispatch(
      updateTask({
        ...task,
        description,
      })
    );
  };
  const handleDescription = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={activityDialogStatus}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        {task?.title.toUpperCase()}
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <DialogDescription>
          <Typography variant="caption">DATE: </Typography>
          {task?.dateTime?.toString()}
        </DialogDescription>
        <DialogDescription>
          <Typography variant="caption">PROJECT: </Typography>
          {project.toUpperCase()}
        </DialogDescription>
        <DialogDescription>
          <Typography variant="caption">DESCRIPTION:</Typography>
          <TextareaAutosize
            minRows={3}
            placeholder="Digite seu texto aqui"
            value={description}
            onChange={handleDescription}
          />
        </DialogDescription>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};
