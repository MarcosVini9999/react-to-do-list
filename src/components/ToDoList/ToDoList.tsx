import React from "react";
import { ActivityCard } from "../ActivityCard/ActivityCard";
import { ToDoListWrapper } from "./ToDoList.style";

interface Tasks {
  title: string;
  dateTime: string;
}
interface Project {
  projectName: string;
  tasks: Array<Tasks>;
}

interface ToDoListProps {
  projects: Array<Project>;
}

export const ToDoList: React.FC<ToDoListProps> = ({ projects }) => {
  const projectNames = projects.map((project) => project.projectName);
  console.log(projectNames);
  return (
    <ToDoListWrapper>
      {projects.map((tasks) =>
        tasks.tasks.map((element) => (
          <ActivityCard
            actionType="delete"
            taskTitle={element.title}
            dateTime={element.dateTime}
            taskProject={tasks.projectName}
            projectNames={projectNames}
          />
        ))
      )}
    </ToDoListWrapper>
  );
};
