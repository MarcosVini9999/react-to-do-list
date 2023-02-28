import React from "react";
import { ActivityCard, ToDoList } from "@/components";
import { RootState } from "@/stores";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "@/stores/features/projectSlicer";

export const Inbox: React.FC = () => {
  const dispatch = useDispatch();
  const projectNames = useSelector((state: RootState) =>
    state.projects.map((project) => project.projectName)
  );
  const projects = useSelector((state: RootState) => state.projects);

  const handleAddTask = (
    taskTitle: string,
    dateTime: string,
    projectName: string
  ) => {
    dispatch(
      addTask({
        title: taskTitle,
        dateTime: dateTime,
        projectName: projectName,
      })
    );
  };

  return (
    <React.Fragment>
      <ActivityCard
        actionType="add"
        projectNames={projectNames}
        onAddTask={handleAddTask}
      />
      <ToDoList projects={projects} />
    </React.Fragment>
  );
};
