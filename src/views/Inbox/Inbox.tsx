import React from "react";
import { ActivityCard, ToDoList } from "@/components";
import { RootState } from "@/stores";
import { useSelector } from "react-redux";

export const Inbox: React.FC = () => {
  const projectNames = useSelector((state: RootState) =>
    state.projects.map((project) => project.projectName)
  );
  const projects = useSelector((state: RootState) => state.projects);
  console.log(projects);

  return (
    <React.Fragment>
      <ActivityCard actionType="add" projectNames={projectNames} />
      <ToDoList projects={projects} />
    </React.Fragment>
  );
};
