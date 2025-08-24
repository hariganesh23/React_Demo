import React, { useState } from "react";
import Notification from "./Notification";
import { checkPalindrome, checkFibonacci } from "../utils/demoUtils";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function Demo() {
  const [notification, setNotification] = useState(false);
  const [severity, setSeverity] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [value, setValue] = useState("");
  const [fibValue, setFibValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleFibChange = (e) => {
    setFibValue(e.target.value);
  };
  const handleCheckPalindrome = () => {
    const isPalindrome = checkPalindrome(value);
    if (isPalindrome) {
      setSeverity("success");
      setNotificationMessage("The string is a palindrome");
    } else {
      setSeverity("error");
      setNotificationMessage("The string is not a palindrome");
    }
    setNotification(true);
  };

  const handleCheckFibonacci = () => {
    const isFibonacci = checkFibonacci(fibValue);
    if (isFibonacci) {
      setSeverity("success");
      setNotificationMessage("The string is a fibonacci sequence");
    } else {
      setSeverity("error");
      setNotificationMessage("The string is not a fibonacci sequence");
    }
    setNotification(true);
  };
  return (
    <div className="p-6 text-center">
      {notification && (
        <Notification
          severity={severity}
          notificationMessage={notificationMessage}
        />
      )}
      <h2 className="text-xl font-bold mb-4">Demo Component</h2>
      <p>This is the Demo component!</p>
      <Divider />
      <div className="mt-4">
        <label className="mb-2">
          Enter String to check if its palindrome :&nbsp;
        </label>
        <TextField
          variant="outlined"
          size="small"
          type="text"
          label="Enter string..."
          value={value}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        &nbsp;
        <Button
          variant="contained"
          onClick={handleCheckPalindrome}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Check Palindrome
        </Button>
      </div>
      &nbsp; &nbsp;
      <div className="mt-4">
        <label className="mb-2">
          Enter numbers to check if its Fibonacchi :&nbsp;
        </label>
        <TextField
          variant="outlined"
          size="small"
          label="Enter numbers with , delimiters"
          value={fibValue}
          onChange={handleFibChange}
          className="border rounded-lg px-4 py-2 w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        &nbsp;
        <Button
          variant="contained"
          onClick={handleCheckFibonacci}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Check Fibonacci
        </Button>
      </div>
      <button
        onClick={() => window.history.back()}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Go Back
      </button>
    </div>
  );
}

export default Demo;
