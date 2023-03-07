import React from "react";
import { ActivityCard } from "../ActivityCard/ActivityCard";
import { ToDoListWrapper } from "./ToDoList.style";
import { v4 as uuidv4 } from "uuid";

interface Tasks {
  title: string;
  dateTime: string;
  filter: boolean;
}
interface Project {
  projectName: string;
  tasks: Array<Tasks>;
}

interface ToDoListProps {
  projects: Array<Project>;
  onRemoveTask: (projectName: string, taskTitle: string) => void;
}

export const ToDoList: React.FC<ToDoListProps> = ({
  projects,
  onRemoveTask,
}) => {
  const projectNames = projects.map((project) => project.projectName);
  return (
    <ToDoListWrapper>
      {projects.map((project) =>
        project.tasks.map((task) =>
          task.filter ? (
            <ActivityCard
              key={uuidv4()}
              actionType="delete"
              taskTitle={task.title}
              dateTime={task.dateTime}
              taskProject={project.projectName}
              projectNames={projectNames}
              onRemoveTask={onRemoveTask}
            />
          ) : null
        )
      )}
    </ToDoListWrapper>
  );
};
