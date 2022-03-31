import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./customCss.css";

const JobCategory = (props) => {
  console.log("job Category is rendering");
  return (
    <Select
      className={
        props.errors &&
        props.errors.validation &&
        props.errors.validation.category
          ? "form-control is-invalid"
          : "form-control"
      }
      value={props.category}
      displayEmpty
      onChange={(e) => props.setCategory(e.target.value)}
    >
      <MenuItem value="">Choose</MenuItem>
      <MenuItem value="Local Job">Local Job</MenuItem>
      <MenuItem value="Special Job">Special Job</MenuItem>
    </Select>
  );
};
export default React.memo(JobCategory);
