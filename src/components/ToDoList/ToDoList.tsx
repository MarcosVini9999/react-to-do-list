import React from "react";
import { ActivityCard } from "../ActivityCard/ActivityCard";
import { ToDoListWrapper } from "./ToDoList.style";
import { v4 as uuidv4 } from "uuid";
import { Project } from "@/config/interfaces/Itask";
import dayjs from "dayjs";

interface Task {
  key: string;
  title: string;
  dateTime: string;
  filter: boolean;
  description: string;
  projectName: string;
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
  const allTasks: Task[] = projects.flatMap((project) =>
    project.tasks.map((task) => ({ ...task, projectName: project.projectName }))
  );
  const sortedTasks = allTasks
    .filter((task) => task.filter)
    .sort((a, b) => dayjs(a.dateTime).diff(dayjs(b.dateTime)));

  return (
    <ToDoListWrapper>
      {sortedTasks.map((task) => (
        <ActivityCard
          key={uuidv4()}
          actionType="delete"
          taskProject={task.projectName}
          projectNames={projectNames}
          onRemoveTask={onRemoveTask}
          task={task}
        />
      ))}
    </ToDoListWrapper>
  );
};
