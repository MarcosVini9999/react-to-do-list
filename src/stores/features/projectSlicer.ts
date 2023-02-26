import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    projectName: "home",
    tasks: [
      {
        title: "buy X things",
        dateTime: "2018-01-01T00:00",
      },
    ],
  },
  {
    projectName: "Studies",
    tasks: [
      {
        title: "math test",
        dateTime: "2018-01-01T00:00",
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
          (element) =>
            element.projectName === action.payload.projectName &&
            element.tasks === action.payload.tasks
        )
      ) {
        state.push({
          projectName: action.payload.projectName,
          tasks: [],
        });
      }
    },
  },
});

export const { addProject } = projectSlicer.actions;
export default projectSlicer.reducer;
