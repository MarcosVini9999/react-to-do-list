import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { updateProjectName } from "@/stores/features/projectSlicer";

interface ProjectDialogProps {
  projectDialogStatus: boolean;
  changeProjectDialogStatus: (status: boolean) => void;
  project: string;
}

export const ProjectDialog: React.FC<ProjectDialogProps> = ({
  projectDialogStatus,
  changeProjectDialogStatus,
  project,
}) => {
  const dispatch = useDispatch();
  const [newProjectName, setNewProjectName] = React.useState<string>(project);

  const handleClose = () => {
    changeProjectDialogStatus(false);
  };
  const handleCloseAndSave = () => {
    changeProjectDialogStatus(false);
    dispatch(
      updateProjectName({
        oldProjectName: project,
        projectName: newProjectName,
      })
    );
  };
  const handleProjectName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewProjectName(event.target.value);
  };

  return (
    <Dialog open={projectDialogStatus} onClose={handleClose}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter the new name for the selected project ({project}).
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          fullWidth
          variant="standard"
          value={newProjectName}
          onChange={handleProjectName}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleCloseAndSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
