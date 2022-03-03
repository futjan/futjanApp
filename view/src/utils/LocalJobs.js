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
      placeholder="choose..."
      onChange={(e) => props.setSubCategory(e.target.value)}
      value={props.subCategory}
    >
      <MenuItem value="">Choose</MenuItem>
      <MenuItem value="AC Technician">AC Technician</MenuItem>
      <MenuItem value="Cook/Helper">Cook/Helper</MenuItem>
      <MenuItem value="Operator/Technician">Operator/Technician</MenuItem>
      <MenuItem value="Bar Tender">Bar Tender</MenuItem>
      <MenuItem value="Delivery person">Delivery person</MenuItem>
      <MenuItem value="Painter">Painter</MenuItem>
      <MenuItem value="Body Guard">Body Guard</MenuItem>
      <MenuItem value="Driver">Driver</MenuItem>
      <MenuItem value="Plumber">Plumber</MenuItem>
      <MenuItem value="Beautician/Salon">Beautician/Salon</MenuItem>
      <MenuItem value="Data entry/Back office">Data entry/Back office</MenuItem>
      <MenuItem value="BPO & Telecaller">BPO & Telecaller</MenuItem>
      <MenuItem value="Firefighter">Firefighter</MenuItem>
      <MenuItem value="Sales/Marketing">Sales/Marketing</MenuItem>
      <MenuItem value="Office co-ordinator">Office co-ordinator</MenuItem>
      <MenuItem value="Helper">Helper</MenuItem>
      <MenuItem value="Soldering operator">Soldering operator</MenuItem>
      <MenuItem value="Nanny/Aaya">Nanny/Aaya</MenuItem>
      <MenuItem value="Labour">Labour</MenuItem>
      <MenuItem value="Teacher/Tutor">Teacher/Tutor</MenuItem>
      <MenuItem value="Construction">Construction</MenuItem>
      <MenuItem value="Maid/Servant">Maid/Servant</MenuItem>
      <MenuItem value="Waiter">Waiter</MenuItem>
      <MenuItem value="Control room">Control room</MenuItem>
      <MenuItem value="Metal sheet worker/Welder">
        Metal sheet worker/Welder
      </MenuItem>
      <MenuItem value="Washer">Washer</MenuItem>
      <MenuItem value="Office boy/peon">Office boy/peon</MenuItem>
      <MenuItem value="Other">Other</MenuItem>
    </Select>
  );
};
export default LocalJobs;
