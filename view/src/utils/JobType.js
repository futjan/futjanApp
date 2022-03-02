import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./customCss.css";

const JobType = (props) => {
  return (
    <Select
      className="form-control"
      value={props.type}
      placeholder="choose..."
      onChange={(e) => props.setType(e.target.value)}
    >
      <MenuItem value="">Choose</MenuItem>
      <MenuItem value="Freelance">Freelance</MenuItem>
      <MenuItem value="Part time">Part time</MenuItem>
      <MenuItem value="Full time">Full time</MenuItem>
      <MenuItem value="Internship">Internship</MenuItem>
      <MenuItem value="Temporary">Temporary</MenuItem>
    </Select>
  );
};
export default JobType;
