import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { ProjectButtonWrapper, ProjectsContainer } from "./ProjectList.style";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import {
  removeProject,
  filterProjectName,
} from "@/stores/features/projectSlicer";
import { v4 as uuidv4 } from "uuid";
import EditIcon from "@mui/icons-material/Edit";
import { ProjectCard, ProjectDialog } from "@/components";

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
        <ProjectCard
          handleRemoveProject={handleRemoveProject}
          handleFilterProjectName={handleFilterProjectName}
          project={project}
        />
      ))}
    </ProjectsContainer>
  );
};
