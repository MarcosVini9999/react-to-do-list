import React from "react";
import { ActivityCard } from "../ActivityCard/ActivityCard";
import { ToDoListWrapper } from "./ToDoList.style";

interface Tasks {
  title: string;
  dateTime: string;
}
interface Project {
  projectName: string;
  filter: boolean;
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
      {projects.map((project, projectIndex) =>
        project.filter
          ? project.tasks.map((task, taskIndex) => (
              <ActivityCard
                key={Number(projectIndex.toString() + taskIndex.toString())}
                actionType="delete"
                taskTitle={task.title}
                dateTime={task.dateTime}
                taskProject={project.projectName}
                projectNames={projectNames}
                onRemoveTask={onRemoveTask}
              />
            ))
          : null
      )}
    </ToDoListWrapper>
  );
};
