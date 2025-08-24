import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Demo from "./components/Demo";
import EmployeeDetails from "./components/EmployeeDetails"; // Assuming this is the correct path for EmploeeDetails component

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/Home" element={<App />} />
      <Route path="/Demo" element={<Demo />} />
      <Route path="/EmployeeDetails/:id" element={<EmployeeDetails />} />
    </Routes>
  </Router>
);

export default AppRouter;
