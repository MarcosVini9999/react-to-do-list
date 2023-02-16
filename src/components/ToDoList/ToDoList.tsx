import React from "react";
import { ActivityCard } from "../ActivityCard/ActivityCard";
import { ToDoListWrapper } from "./ToDoList.style";

interface AutocompleteProps {
  label: string;
}

interface Tasks {
  title: string;
  dateTime: string;
  project?: AutocompleteProps;
}

interface ToDoListProps {
  tasks: Array<Tasks>;
  projects: Array<{ label: string }>;
}

export const ToDoList: React.FC<ToDoListProps> = ({ tasks, projects }) => {
  return (
    <ToDoListWrapper>
      {tasks.map((task) => (
        <ActivityCard
          actionType="delete"
          taskTitle={task.title}
          dateTime={task.dateTime}
          taskProject={task.project}
          projects={projects}
        />
      ))}
    </ToDoListWrapper>
  );
};
