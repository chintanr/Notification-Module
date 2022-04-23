import React from "react";
import { useSelector } from "react-redux";
import Notification from "./Notification";
import { useDispatch } from "react-redux";
import { clearNotification } from "./notificationSlice";

const NotificationTray = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state) => state.notification.notifications
  );

  const handleHide = (val, data) => {
    dispatch(clearNotification(data.id));
  };

  return (
    <>
      {notifications?.map((notification) => {
        return (
          <Notification
            notification={notification}
            hide={handleHide}
            key={notification.id}
          />
        );
      })}
    </>
  );
};

export default NotificationTray;
