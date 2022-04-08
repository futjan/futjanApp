import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./customCss.css";

const JobType = (props) => {
  return (
    <Select
      className={
        props.errors && props.errors.validation && props.errors.validation.type
          ? "form-control is-invalid"
          : "form-control"
      }
      value={props.type}
      displayEmpty
      onChange={(e) => props.setType(e.target.value)}
    >
      <MenuItem value="">Choose</MenuItem>
      <MenuItem value="freelance">Freelance</MenuItem>
      <MenuItem value="part time">Part time</MenuItem>
      <MenuItem value="full time">Full time</MenuItem>
      <MenuItem value="internship">Internship</MenuItem>
      <MenuItem value="temporary">Temporary</MenuItem>
    </Select>
  );
};
export default React.memo(JobType);
