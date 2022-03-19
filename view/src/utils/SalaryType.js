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

      <MenuItem value="Yearly">Yearly</MenuItem>
      <MenuItem value="Monthly">Monthly</MenuItem>
      <MenuItem value="Weekly">Weekly</MenuItem>
      <MenuItem value="Daily">Daily</MenuItem>
      <MenuItem value="Hourly">Hourly</MenuItem>
    </Select>
  );
};
export default SalaryType;
