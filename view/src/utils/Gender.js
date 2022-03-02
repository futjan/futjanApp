import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./customCss.css";

const Gender = (props) => {
  return (
    <Select
      className="form-control"
      value={props.gender}
      placeholder="choose..."
      onChange={(e) => props.setGender(e.target.value)}
    >
      <MenuItem value="">Choose</MenuItem>
      <MenuItem value="Male">Male</MenuItem>
      <MenuItem value="Female">Female</MenuItem>
      <MenuItem value="Anyone">Anyone</MenuItem>
    </Select>
  );
};
export default Gender;
