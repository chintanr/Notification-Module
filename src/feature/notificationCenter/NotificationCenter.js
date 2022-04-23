import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addNotification } from "./notificationSlice";
import { v4 as uuidv4 } from "uuid";

const NotificationCenter = () => {
  let uuid;
  const variants = ["success", "error", "warning", "info"];
  const dispatch = useDispatch();
  const [notifData, setNotifData] = useState({
    id: "",
    text: "",
    variant: "",
    timeout: 0,
  });

  useEffect(() => {
    uuid = uuidv4();
  }, []);

  const handleChange = ({ target }) => {
    setNotifData({
      ...notifData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uuid = uuidv4();
    notifData.id = uuid;
    dispatch(addNotification(notifData));
    setNotifData({
      id: "",
      text: "",
      variant: "",
      timeout: 0,
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card sx={{ minWidth: 275, padding: "1em" }}>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <Typography variant="h5" component="div">
                Heya, now generate custom notifications!
              </Typography>
            </CardContent>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="large">
              <TextField
                id="outlined-basic"
                label="Enter text*"
                variant="outlined"
                name="text"
                value={notifData.text || ""}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="large">
              <InputLabel id="demo-select-small">Variant*</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Variant*"
                name="variant"
                value={notifData.variant || ""}
                onChange={handleChange}
              >
                {variants.map((variant) => {
                  return (
                    <MenuItem value={variant} key={variant}>
                      {variant}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="large">
              {/* <InputLabel id="demo-select-small">Timeout (seconds)</InputLabel> */}
              <TextField
                id="outlined-basic"
                label="Timeout (seconds)"
                variant="outlined"
                name="timeout"
                value={notifData.timeout || ""}
                onChange={handleChange}
              />
            </FormControl>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "1em 0",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                disabled={notifData.text === "" || notifData.variant === ""}
              >
                Send
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default NotificationCenter;
