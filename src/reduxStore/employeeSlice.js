import { createSlice } from "@reduxjs/toolkit";
import employeeData from "../inputData/employeeDetails.json";

const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    list: employeeData.employeeData || [],
  },
  reducers: {
    setEmployees(state, action) {
      state.list = action.payload;
    },
  },
});

export const { setEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;