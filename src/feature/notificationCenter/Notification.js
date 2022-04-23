import React from "react";
import Alert from "@mui/material/Alert";
import { clearNotification } from "./notificationSlice";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

const Notification = ({ notification, hide }) => {
  const data = notification;
  const dispatch = useDispatch();
  let time = data.timeout * 1000;
  if (time > 1) {
    setTimeout(() => {
      dispatch(clearNotification(data.id));
    }, time);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1em 0",
        }}
      >
        <Alert severity={notification.variant}>
          {notification.text}
          <Button onClick={() => hide(true, data)} variant="text">
            HIDE
          </Button>
        </Alert>
      </div>
    </>
  );
};
export default Notification;
