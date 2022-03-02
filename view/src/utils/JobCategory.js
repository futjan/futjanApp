import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./customCss.css";

const JobCategory = (props) => {
  return (
    <Select
      className="form-control"
      value={props.category}
      placeholder="choose..."
      onChange={(e) => props.setCategory(e.target.value)}
    >
      <MenuItem value="">Choose</MenuItem>
      <MenuItem value="Local Job">Local Job</MenuItem>
      <MenuItem value="Special Job">Special Job</MenuItem>
    </Select>
  );
};
export default JobCategory;
