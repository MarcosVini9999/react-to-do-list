import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ label: "home" }, { label: "Studies" }];

export const projectSlicer = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      if (!state.some((project) => project.label === action.payload)) {
        state.push({
          label: action.payload,
        });
      }
    },
  },
});

export const { addProject } = projectSlicer.actions;
export default projectSlicer.reducer;
