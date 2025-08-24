import React, { useState } from "react";

function EmployeeTable({ employee }) {
  const [positionFilter, setPositionFilter] = useState("");

  const positions = Array.from(new Set(employee.map((emp) => emp.position)));

  const filteredEmployees = positionFilter
    ? employee.filter((emp) => emp.position === positionFilter)
    : employee;

  return (
    <div className="container mx-auto p-4">
      <table
        border="1"
        cellPadding="8"
        style={{ margin: "20px auto", minWidth: 400 }}
      >
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>
              <select
                value={positionFilter}
                onChange={(e) => setPositionFilter(e.target.value)}
                style={{ marginLeft: 8 }}
              >
                <option value="">All Position</option>
                {positions.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.empId}>
              <td>{emp.empId}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
