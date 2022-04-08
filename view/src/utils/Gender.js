import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./customCss.css";

const Gender = (props) => {
  return (
    <Select
      className={
        props.errors &&
        props.errors.validation &&
        props.errors.validation.gender
          ? "form-control is-invalid"
          : "form-control"
      }
      value={props.gender}
      displayEmpty
      onChange={(e) => props.setGender(e.target.value)}
    >
      <MenuItem value="">Choose</MenuItem>
      <MenuItem value="male">Male</MenuItem>
      <MenuItem value="female">Female</MenuItem>
      <MenuItem value="anyone">Anyone</MenuItem>
    </Select>
  );
};
export default React.memo(Gender);
