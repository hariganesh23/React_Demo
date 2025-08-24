import React from "react";
import { fetchSelectedEmployeeDetails } from "../utils/emplyeeDetailsUtils";
import { useSelector } from "react-redux";
import "./EmployeeDetails.css";
import EmployeeOnboardingChecklist from "./EmployeeOnboardingChecklist";
import EmployeeRewardPointsChart from "./EmployeeRewardPointsChart";

function EmployeeDetails() {
  const employeeList = useSelector((state) => state.employees.list);
  const selectedEmployee = fetchSelectedEmployeeDetails(employeeList);

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold mb-4">Employee Details</h2>
      <EmployeeOnboardingChecklist selectedEmployee={selectedEmployee} />
      <EmployeeRewardPointsChart selectedEmployee={selectedEmployee} />
    </div>
  );
}

export default EmployeeDetails;
