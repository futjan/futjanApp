import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./customCss.css";

const AdsType = (props) => {
  return (
    <Select
      className="form-control"
      value={props.adType}
      displayEmpty
      onChange={(e) => props.setAdType(e.target.value)}
      sx={{
        width: "100%",
        height: "100%",
        background: "#fff",
        paddingLeft: "0",
        borderRadius: "4px",
      }}
    >
      <MenuItem value="surplus">Surplus</MenuItem>
      <MenuItem value="job">Job</MenuItem>
      <MenuItem value="jobseeker">Job Seeker</MenuItem>
      <MenuItem value="business">business</MenuItem>
    </Select>
  );
};
export default React.memo(AdsType);
