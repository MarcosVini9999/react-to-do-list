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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores";
import { addProject } from "@/stores/features/projectSlicer";

interface SideMenuProps {
  id: string;
}

export const SideMenu: React.FC<SideMenuProps> = ({ id }) => {
  const dispatch = useDispatch();
  const [newProject, setNewProject] = React.useState("");
  const projects = useSelector((state: RootState) =>
    state.projects.map((project) => project.projectName)
  );

  const addProjectOnChange = (
    project: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (typeof project.target.value === "string") {
      setNewProject(project.target.value);
    }
  };
  const addProjectOnClick = () => {
    if (newProject) {
      dispatch(
        addProject({
          projectName: newProject,
          tasks: [],
        })
      );
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
