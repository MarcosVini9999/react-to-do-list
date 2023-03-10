import React from "react";
import { ActivityCard } from "../ActivityCard/ActivityCard";
import { ToDoListWrapper } from "./ToDoList.style";
import { v4 as uuidv4 } from "uuid";
import { Project } from "@/config/interfaces/Itask";
import dayjs from "dayjs";

interface ToDoListProps {
  projects: Array<Project>;
  onRemoveTask: (projectName: string, taskTitle: string) => void;
}

export const ToDoList: React.FC<ToDoListProps> = ({
  projects,
  onRemoveTask,
}) => {
  const projectNames = projects.map((project) => project.projectName);

  const allTasks = projects
    .map((project) => project.tasks)
    .flat()
    .filter((task) => task.filter)
    .sort((a, b) => dayjs(b.dateTime).diff(dayjs(a.dateTime)));

  return (
    <ToDoListWrapper>
      {allTasks.map((task) => (
        <ActivityCard
          key={uuidv4()}
          actionType="delete"
          taskProject={projectNames.find(() =>
            projects.find((project) =>
              project.tasks.find((t) => t.key === task.key)
            )
          )}
          projectNames={projectNames}
          onRemoveTask={onRemoveTask}
          task={task}
        />
      ))}
    </ToDoListWrapper>
  );
};
