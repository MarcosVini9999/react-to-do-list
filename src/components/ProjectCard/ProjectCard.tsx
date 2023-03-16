import { IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { ProjectButtonWrapper } from "./ProjectCard.style";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 as uuidv4 } from "uuid";
import EditIcon from "@mui/icons-material/Edit";
import { ProjectDialog } from "@/components";

interface ProjectCardProps {
  handleRemoveProject: (projectName: string) => void;
  handleFilterProjectName: (projectName: string) => void;
  project: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  handleRemoveProject,
  handleFilterProjectName,
  project,
}) => {
  const [projectDialogStatus, setProjectDialogStatus] = React.useState(false);
  const changeProjectDialogStatus = () => {
    setProjectDialogStatus(true);
  };

  return (
    <ProjectButtonWrapper
      onClick={() => {
        handleFilterProjectName(project);
      }}
      key={uuidv4()}
    >
      <Typography>{project}</Typography>
      <Tooltip
        title=""
        onClick={() => {
          handleRemoveProject(project);
        }}
      >
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="" onClick={changeProjectDialogStatus}>
        <IconButton>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <ProjectDialog
        projectDialogStatus={projectDialogStatus}
        changeProjectDialogStatus={setProjectDialogStatus}
        project={project}
      />
    </ProjectButtonWrapper>
  );
};
