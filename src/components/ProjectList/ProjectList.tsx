import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { ProjectButtonWrapper, ProjectsContainer } from "./ProjectList.style";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { removeProject } from "@/stores/features/projectSlicer";

interface ProjectListProps {
  projects: Array<string>;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const dispatch = useDispatch();
  const hadleRemoveProject = (projectName: string) => {
    dispatch(
      removeProject({
        projectName: projectName,
      })
    );
  };

  return (
    <ProjectsContainer>
      {projects.map((project) => (
        <ProjectButtonWrapper title={project.toUpperCase()}>
          <Typography>{project}</Typography>
          <Button>
            <Tooltip
              title=""
              onClick={() => {
                hadleRemoveProject(project);
              }}
            >
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Button>
        </ProjectButtonWrapper>
      ))}
    </ProjectsContainer>
  );
};
