import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      if (state === []) {
        state.notifications = [];
      }
      state.notifications.push(action.payload);
    },
    clearNotification: (state, action) => {
      const result = state.notifications.filter(
        (el) => el.id !== action.payload
      );
      state.notifications = result;
    },
  },
});

export const { notificationList, addNotification, clearNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
