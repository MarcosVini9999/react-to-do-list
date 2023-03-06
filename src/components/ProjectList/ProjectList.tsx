import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { ProjectButtonWrapper, ProjectsContainer } from "./ProjectList.style";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import {
  removeProject,
  filterProjectName,
} from "@/stores/features/projectSlicer";

interface ProjectListProps {
  projects: Array<string>;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const dispatch = useDispatch();
  const handleRemoveProject = (projectName: string) => {
    dispatch(
      removeProject({
        projectName: projectName,
      })
    );
  };
  const handleFilterProjectName = (projectName: string) => {
    dispatch(
      filterProjectName({
        projectName: projectName,
      })
    );
  };

  return (
    <ProjectsContainer>
      {projects.map((project) => (
        <ProjectButtonWrapper
          title={project.toUpperCase()}
          onClick={() => {
            handleFilterProjectName(project);
          }}
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
        </ProjectButtonWrapper>
      ))}
    </ProjectsContainer>
  );
};
