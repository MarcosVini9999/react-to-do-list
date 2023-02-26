import { Button } from "@mui/material";
import React from "react";
import { ProjectsWrapper } from "./ProjectList.style";

interface ProjectListProps {
  projects: Array<string>;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <ProjectsWrapper>
      {projects.map((project) => (
        <Button>{project}</Button>
      ))}
    </ProjectsWrapper>
  );
};
