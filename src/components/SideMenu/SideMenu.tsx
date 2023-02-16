import { IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  AddProjectWrapper,
  SideMenuContainer,
  SideMenuFooterWrapper,
  SideMenuWrapper,
} from "./SideMenu.style";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ProjectList } from "@/components";
import { Button } from "@mui/material";

interface SideMenuProps {
  id: string;
}

export const SideMenu: React.FC<SideMenuProps> = ({ id }) => {
  const [projects, setProjects] = React.useState([
    "job",
    "homework",
    "college",
  ]);
  const [newProject, setNewProject] = React.useState("");

  const addProjectOnChange = (
    project: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (typeof project.target.value === "string") {
      setNewProject(project.target.value);
    }
  };
  const addProjectOnClick = () => {
    if (newProject) {
      setProjects([...projects, newProject]);
    }
  };

  return (
    <SideMenuContainer id={`${id}`} className={"unlock"}>
      <SideMenuWrapper>
        <Box className="borderBox"></Box>
        <dl id="inbox-filter">
          <Button>Inbox</Button>
          <Button>Today</Button>
          <Button>Week</Button>
        </dl>
        <Box className="borderBox"></Box>
        <dl>
          <dt>Projects</dt>
          <AddProjectWrapper>
            <TextField
              id="standard-basic"
              label="Add"
              variant="standard"
              inputProps={{ maxLength: 30 }}
              value={newProject}
              onChange={addProjectOnChange}
            />
            <IconButton onClick={addProjectOnClick}>
              <AddCircleIcon />
            </IconButton>
          </AddProjectWrapper>
          <ProjectList projects={projects} />
        </dl>
      </SideMenuWrapper>
      <SideMenuFooterWrapper>
        <p>Developed</p>
        <p>by</p>
        <a
          href="https://github.com/MarcosVini9999"
          target="_blank"
          rel="noreferrer"
        >
          Marcos Vinicius
        </a>
      </SideMenuFooterWrapper>
    </SideMenuContainer>
  );
};
