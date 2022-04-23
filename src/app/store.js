import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "../feature/notificationCenter/notificationSlice";

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
  },
});
