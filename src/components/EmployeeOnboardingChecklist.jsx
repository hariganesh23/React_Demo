import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./EmployeeDetails.css";
import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

function EmployeeOnboardingChecklist(props) {
  const selectedEmployee = props.selectedEmployee;

  return (
    <div className="p-6 text-center">
      <p>Employee onboarding checklist</p>
      <Box sx={{ overflowX: "auto" }}>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            className="employee-details-table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">Checklists points</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedEmployee?.employeeChecklist &&
                Object.entries(selectedEmployee.employeeChecklist).map(
                  ([key, value], index) => (
                    <TableRow key={index}>
                      <TableCell align="center">
                        {key
                          .replace(/([A-Z])/g, " $1") // Add space before capital letters
                          .replace(/^./, (str) => str.toUpperCase())}{" "}
                        {/* Capitalize first letter */}
                      </TableCell>
                      <TableCell align="center">
                        {value ? (
                          <CheckIcon color="success" />
                        ) : (
                          <ClearIcon color="error" />
                        )}
                      </TableCell>
                    </TableRow>
                  )
                )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default EmployeeOnboardingChecklist;
