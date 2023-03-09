import { createSlice } from "@reduxjs/toolkit";
import { Task } from "@/config/interfaces/Itask";
import dayjs from "dayjs";
import * as isBetween from "dayjs/plugin/isBetween";
import { v4 as uuidv4 } from "uuid";
dayjs.extend(isBetween);

const initialState = [
  {
    projectName: "home",
    tasks: [
      {
        key: "0",
        title: "buy X things",
        dateTime: "2018-01-01T00:00",
        filter: true,
        description: "",
      },
    ],
  },
  {
    projectName: "Studies",
    tasks: [
      {
        key: "1",
        title: "math test",
        dateTime: "2018-01-01T00:00",
        filter: true,
        description: "",
      },
    ],
  },
];

export const projectSlicer = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      if (
        !state.some(
          (element) => element.projectName === action.payload.projectName
        )
      ) {
        state.push({
          projectName: action.payload.projectName,
          tasks: [],
        });
      }
    },
    removeProject: (state, action) => {
      const index = state.findIndex(
        (element) => element.projectName === action.payload.projectName
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    addTask: (state, action) => {
      const projectIndex = state.findIndex(
        (element) => element.projectName === action.payload.projectName
      );
      if (projectIndex !== -1) {
        state[projectIndex].tasks.push({
          key: uuidv4(),
          title: action.payload.title,
          dateTime: action.payload.dateTime,
          filter: true,
          description: "",
        });
      } else {
        state.push({
          projectName: action.payload.projectName,
          tasks: [
            {
              key: uuidv4(),
              title: action.payload.title,
              dateTime: action.payload.dateTime,
              filter: true,
              description: "",
            },
          ],
        });
      }
    },
    removeTask: (state, action) => {
      const projectName = action.payload.projectName;
      const taskTitle = action.payload.title;
      const projectIndex = state.findIndex(
        (project) => project.projectName === projectName
      );
      if (projectIndex !== -1) {
        const taskIndex = state[projectIndex].tasks.findIndex(
          (task) => task.title === taskTitle
        );
        if (taskIndex !== -1) {
          state[projectIndex].tasks.splice(taskIndex, 1);
        }
      }
    },
    filterProjectName: (state, action) => {
      const projectName = action.payload.projectName;
      state.forEach((project) => {
        project.tasks.forEach((task) => {
          if (project.projectName.toLowerCase() === projectName.toLowerCase()) {
            task.filter = true;
          } else {
            task.filter = false;
          }
        });
      });
    },
    filterTasksByWeek: (state, action) => {
      const weekStart = dayjs().startOf("week");
      const weekEnd = dayjs().endOf("week");
      state.forEach((project) => {
        project.tasks.forEach((task) => {
          const taskDate = dayjs(task.dateTime);
          if (taskDate.isBetween(weekStart, weekEnd, "day", "[]")) {
            task.filter = true;
          } else {
            task.filter = false;
          }
        });
      });
    },
    filterTasksByToday: (state, action) => {
      const today = dayjs();
      state.forEach((project) => {
        project.tasks.forEach((task) => {
          const taskDate = dayjs(task.dateTime);
          if (taskDate.isSame(today, "day")) {
            task.filter = true;
          } else {
            task.filter = false;
          }
        });
      });
    },
    allFiltersOn: (state, action) => {
      state.forEach((project) => {
        project.tasks.forEach((task) => {
          task.filter = true;
        });
      });
    },
    updateTask: (state, action) => {
      const findTask = (task: Task) => {
        if (task.key === action.payload.key) {
          const newTask = {
            ...task,
            ...action.payload,
          };
          task = newTask;
        }
        console.log(task);
        return task;
      };
      state = state.map((project) => {
        project.tasks = project.tasks.map(findTask);
        return project;
      });
    },
  },
});

export const {
  addProject,
  removeProject,
  addTask,
  removeTask,
  filterProjectName,
  filterTasksByWeek,
  filterTasksByToday,
  allFiltersOn,
  updateTask,
} = projectSlicer.actions;
export default projectSlicer.reducer;
