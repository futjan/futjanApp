import React from "react";
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
      <MenuItem value="certificate">Certificate</MenuItem>
      <MenuItem value="bachelor degree">Bachelor Degree</MenuItem>
      <MenuItem value="master’s degree">Master’s Degree</MenuItem>
      <MenuItem value="doctorate degree">Doctorate Degree</MenuItem>
    </Select>
  );
};
export default React.memo(Qualification);
