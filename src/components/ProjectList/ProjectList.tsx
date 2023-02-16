import { Button } from "@mui/material";
import React from "react";
import { ProjectsWrapper } from "./ProjectsDisplayed.style";

interface ProjectsDisplayedProps {
  projects: Array<string>;
}

export const ProjectsDisplayed: React.FC<ProjectsDisplayedProps> = ({
  projects,
}) => {
  return (
    <ProjectsWrapper>
      {projects.map((project) => (
        <Button>{project}</Button>
      ))}
    </ProjectsWrapper>
  );
};
