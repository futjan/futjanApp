import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./customCss.css";

const JobCategory = (props) => {
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
      <MenuItem value="Local Job">Local Jobs</MenuItem>
      <MenuItem value="Special Job">Specialist Jobs</MenuItem>
    </Select>
  );
};
export default React.memo(JobCategory);
