import React, { useState } from "react";
import EmployeeSearch from "./components/EmployeeSearch";
import { useNavigate } from "react-router-dom";
import Notification from "./components/Notification";
import "./App.css"; // Import the CSS file
import Button from "@mui/material/Button";
import employeeData from "./inputData/employeeDetails.json"; // Assuming you have a JSON file with employee data
import CustomPaginationActionsTable from "./components/CustomPaginationActionsTable";

const App = () => {
  const navigate = useNavigate();
  const [filteredEmployees, setFilteredEmployees] = useState("");
  const [notification, setNotification] = useState(false);
  const [severity, setSeverity] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleSearch = (query) => {
    if (!query) {
      console.log("No query provided");
      setSeverity("error");
      setNotificationMessage("Search query cannot be empty");
      setNotification(true);
      setFilteredEmployees("");
      return;
    }
    const lowerQuery = query.toLowerCase();
    const results = employeeData.employeeData.filter(
      (emp) =>
        emp.empId.toLowerCase().includes(lowerQuery) ||
        emp.name.toLowerCase().includes(lowerQuery)
    );
    setFilteredEmployees(results);
    if (results.length === 0) {
      setSeverity("error");
      setNotificationMessage("No results found");
      setNotification(results.length === 0);
    } else {
      setSeverity("success");
      setNotificationMessage("Found " + results.length + " results");
      setNotification(true);
    }
  };

  return (
    <div className="app-container">
      {notification && (
        <Notification
          severity={severity}
          notificationMessage={notificationMessage}
        />
      )}
      <h1 className="heading">Employee Search</h1>
      <div className="search-button-container">
        <EmployeeSearch employee={employeeData} onSearch={handleSearch} />

        <div className="demo-btn-container">
          <Button variant="contained" onClick={() => navigate("/demo")}>
            Other Demo
          </Button>
        </div>
      </div>

      {filteredEmployees.length > 0 && (
        <CustomPaginationActionsTable employee={filteredEmployees} />
      )}
    </div>
  );
};

export default App;
