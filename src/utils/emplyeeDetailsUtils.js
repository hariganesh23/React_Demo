

export const fetchSelectedEmployeeDetails = (employeeList) => {
    
  const fullURL = window.location.href;
  const parts = fullURL.split("EmployeeDetails/");
  const extractedString = parts[1];
  const selectedEmployee = employeeList.find(
    (emp) => emp.empId === extractedString
  );
  return selectedEmployee;
};
