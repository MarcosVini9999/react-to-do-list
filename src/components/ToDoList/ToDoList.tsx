import React from "react";
import { ActivityCard } from "../ActivityCard/ActivityCard";
import { ToDoListWrapper } from "./ToDoList.style";
import { v4 as uuidv4 } from "uuid";
import { Project } from "@/config/interfaces/Itask";
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
              taskProject={project.projectName}
              projectNames={projectNames}
              onRemoveTask={onRemoveTask}
              task={task}
            />
          ) : null
        )
      )}
    </ToDoListWrapper>
  );
};
