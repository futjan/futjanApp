import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./customCss.css";

const LocalJobs = (props) => {
  return (
    <Select
      className={
        props.errors &&
        props.errors.validation &&
        props.errors.validation.subCategory
          ? "form-control is-invalid"
          : "form-control"
      }
      displayEmpty
      onChange={(e) => props.setSubCategory(e.target.value)}
      value={props.subCategory}
    >
      <MenuItem value="">Choose</MenuItem>
      <MenuItem value="ac technician">AC Technician</MenuItem>
      <MenuItem value="cook/helper">Cook/Helper</MenuItem>
      <MenuItem value="operator/technician">Operator/Technician</MenuItem>
      <MenuItem value="bar tender">Bar Tender</MenuItem>
      <MenuItem value="delivery person">Delivery person</MenuItem>
      <MenuItem value="painter">Painter</MenuItem>
      <MenuItem value="body guard">Body Guard</MenuItem>
      <MenuItem value="driver">Driver</MenuItem>
      <MenuItem value="plumber">Plumber</MenuItem>
      <MenuItem value="beautician/salon">Beautician/Salon</MenuItem>
      <MenuItem value="data entry/back office">Data entry/Back office</MenuItem>
      <MenuItem value="bpotelecaller">BPO & Telecaller</MenuItem>
      <MenuItem value="firefighter">Firefighter</MenuItem>
      <MenuItem value="sales/marketing">Sales/Marketing</MenuItem>
      <MenuItem value="office co-ordinator">Office co-ordinator</MenuItem>
      <MenuItem value="helper">Helper</MenuItem>
      <MenuItem value="soldering operator">Soldering operator</MenuItem>
      <MenuItem value="nanny/aaya">Nanny/Aaya</MenuItem>
      <MenuItem value="labour">Labour</MenuItem>
      <MenuItem value="teacher/tutor">Teacher/Tutor</MenuItem>
      <MenuItem value="construction">Construction</MenuItem>
      <MenuItem value="maid/servant">Maid/Servant</MenuItem>
      <MenuItem value="waiter">Waiter</MenuItem>
      <MenuItem value="control room">Control room</MenuItem>
      <MenuItem value="metal sheet worker/welder">
        Metal sheet worker/Welder
      </MenuItem>
      <MenuItem value="washer">Washer</MenuItem>
      <MenuItem value="office boy/peon">Office boy/peon</MenuItem>
      <MenuItem value="other">Other</MenuItem>
    </Select>
  );
};
export default React.memo(LocalJobs);
