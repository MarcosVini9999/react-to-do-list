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
  onRemoveTask: (projectName: string, taskTitle: string) => void;
}

export const ToDoList: React.FC<ToDoListProps> = ({
  projects,
  onRemoveTask,
}) => {
  const projectNames = projects.map((project) => project.projectName);
  return (
    <ToDoListWrapper>
      {projects.map((toDoList) =>
        toDoList.tasks.map((task) => (
          <ActivityCard
            actionType="delete"
            taskTitle={task.title}
            dateTime={task.dateTime}
            taskProject={toDoList.projectName}
            projectNames={projectNames}
            onRemoveTask={onRemoveTask}
          />
        ))
      )}
    </ToDoListWrapper>
  );
};
