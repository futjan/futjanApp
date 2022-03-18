import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./customCss.css";

const Qualification = (props) => {
  return (
    <Select
      className={
        props.errors &&
        props.errors.validation &&
        props.errors.validation.qualification
          ? "form-control is-invalid"
          : "form-control"
      }
      value={props.qualification}
      displayEmpty
      onChange={(e) => props.setQualification(e.target.value)}
    >
      <MenuItem value="">Choose</MenuItem>
      <MenuItem value="Certificate">Certificate</MenuItem>
      <MenuItem value="Bachelor Degree">Bachelor Degree</MenuItem>
      <MenuItem value="Master’s Degree">Master’s Degree</MenuItem>
      <MenuItem value="Doctorate Degree">Doctorate Degree</MenuItem>
    </Select>
  );
};
export default Qualification;
