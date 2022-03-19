import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./customCss.css";

const AgeSelect = (props) => {
  return (
    <Select
      className={
        props.errors && props.errors.validation && props.errors.validation.age
          ? "form-control is-invalid"
          : "form-control"
      }
      value={props.age}
      displayEmpty
      onChange={(e) => props.setAge(e.target.value)}
    >
      <MenuItem value="">Choose</MenuItem>
      <MenuItem value="18-25">18-25</MenuItem>
      <MenuItem value="25-35">25-35</MenuItem>
      <MenuItem value="35-55">35-55</MenuItem>
      <MenuItem value="Above 55">Above 55</MenuItem>
    </Select>
  );
};
export default AgeSelect;
