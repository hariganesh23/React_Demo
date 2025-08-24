import React from "react";
import Alert from "@mui/material/Alert";

function Notification(props) {
  return (
    <div className="container mx-auto p-4">
      <Alert variant="outlined" severity={props.severity}>
        {props.notificationMessage}
      </Alert>
    </div>
  );
}

export default Notification;
