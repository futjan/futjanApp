import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./customCss.css";

const SalaryType = (props) => {
  return (
    <Select
      className={
        props.errors &&
        props.errors.validation &&
        props.errors.validation.salaryType
          ? "form-control is-invalid"
          : "form-control"
      }
      value={props.salaryType}
      displayEmpty
      onChange={(e) => props.setSalaryType(e.target.value)}
    >
      <MenuItem value="">Choose</MenuItem>

      <MenuItem value="yearly">Yearly</MenuItem>
      <MenuItem value="monthly">Monthly</MenuItem>
      <MenuItem value="weekly">Weekly</MenuItem>
      <MenuItem value="daily">Daily</MenuItem>
      <MenuItem value="hourly">Hourly</MenuItem>
    </Select>
  );
};
export default React.memo(SalaryType);
