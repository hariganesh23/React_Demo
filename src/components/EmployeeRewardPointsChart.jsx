import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function EmployeeRewardPointsChart(props) {
  const selectedEmployee = props.selectedEmployee;
  const chartData = Object.entries(selectedEmployee.rewardsPointsActivity)
    .filter(([key]) => key !== "totalPoints")
    .map(([key, value], index) => ({
      id: index,
      value: value,
      label:
        key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase()) +
        " - " +
        value +
        " Points",
    }));

  console.log("chartData", chartData);

  return (
    <div className="p-6 text-center">
      <p>Employee reward points</p>
      <PieChart
        series={[
          {
            data: chartData,
          },
        ]}
        width={200}
        height={200}
      />
    </div>
  );
}
