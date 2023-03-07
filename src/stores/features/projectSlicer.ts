import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    projectName: "home",
    tasks: [
      {
        title: "buy X things",
        dateTime: "2018-01-01T00:00",
        filter: true,
      },
    ],
  },
  {
    projectName: "Studies",
    tasks: [
      {
        title: "math test",
        dateTime: "2018-01-01T00:00",
        filter: true,
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
          title: action.payload.title,
          dateTime: action.payload.dateTime,
          filter: true,
        });
      } else {
        state.push({
          projectName: action.payload.projectName,
          tasks: [
            {
              title: action.payload.title,
              dateTime: action.payload.dateTime,
              filter: true,
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
  },
});

export const {
  addProject,
  removeProject,
  addTask,
  removeTask,
  filterProjectName,
} = projectSlicer.actions;
export default projectSlicer.reducer;
