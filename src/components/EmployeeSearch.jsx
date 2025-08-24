import React, { useState } from "react";
import { Button } from "@mui/material";
import "./EmployeeSearch.css"; // Assuming you have a CSS file for styling
import TextField from "@mui/material/TextField";

function EmployeeSearch(props) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    if (props.onSearch) {
      props.onSearch(query);
    }
  };

  return (
    <div className="app-container">
      <label id="employee-search" className="mb-2 font-semibold">
        Employee Id:&nbsp;
      </label>
      <TextField
        label="Search Employee..."
        variant="outlined"
        size="small"
        value={query}
        onChange={handleChange}
        className="border rounded-lg px-4 py-2 w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      &nbsp;
      <Button
        variant="contained"
        onClick={handleSearch}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue- 400"
      >
        Search
      </Button>
      <p className="mt-2 text-gray-600">Search by Employee ID or Name</p>
    </div>
  );
}

export default EmployeeSearch;
