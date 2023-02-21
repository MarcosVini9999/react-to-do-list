import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./features/projectSlicer";

const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
