import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./customCss.css";

const SpecialJobs = (props) => {
  return (
    <Select
      className="form-control"
      placeholder="choose..."
      onChange={(e) => props.setSubCategory(e.target.value)}
      value={props.subCategory}
    >
      <MenuItem value="">Choose</MenuItem>
      <MenuItem value="Apprenticeships">Apprenticeships</MenuItem>
      <MenuItem value="Financial Services">Financial Services</MenuItem>
      <MenuItem value="Purchasing">Purchasing</MenuItem>
      <MenuItem value="Admin, Secretarial & PA">
        Admin, Secretarial & PA
      </MenuItem>
      <MenuItem value="General Insurance">General Insurance</MenuItem>
      <MenuItem value="Recruitment Consultancy">
        Recruitment Consultancy
      </MenuItem>
      <MenuItem value="Accountant">Accountant</MenuItem>
      <MenuItem value="Graduate Training & Internships">
        Graduate Training & Internships
      </MenuItem>
      <MenuItem value="Retail">Retail</MenuItem>
      <MenuItem value="Banking">Banking</MenuItem>
      <MenuItem value="Health & Medicine">Health & Medicine</MenuItem>
      <MenuItem value="Scientific">Scientific</MenuItem>
      <MenuItem value="Construction & Property">
        Construction & Property
      </MenuItem>
      <MenuItem value="Human Resources">Human Resources</MenuItem>
      <MenuItem value="Security & Safety">Security & Safety</MenuItem>
      <MenuItem value="Customer Service">Customer Service</MenuItem>
      <MenuItem value="Hospitality & Catering">Hospitality & Catering</MenuItem>
      <MenuItem value="Strategy & Consultancy">Strategy & Consultancy</MenuItem>
      <MenuItem value="Charity & Voluntary">Charity & Voluntary</MenuItem>
      <MenuItem value="IT & Telecoms">IT & Telecoms</MenuItem>
      <MenuItem value="Social Care">Social Care</MenuItem>
      <MenuItem value="Education">Education</MenuItem>
      <MenuItem value="Leisure & Tourism">Leisure & Tourism</MenuItem>
      <MenuItem value="Sales">Sales</MenuItem>
      <MenuItem value="Engineering">Engineering</MenuItem>
      <MenuItem value="Manufacturing">Manufacturing</MenuItem>
      <MenuItem value="Transport & Logistics">Transport & Logistics</MenuItem>
      <MenuItem value="Energy">Energy</MenuItem>
      <MenuItem value="Marketing & PR">Marketing & PR</MenuItem>
      <MenuItem value="Training">Training</MenuItem>
      <MenuItem value="Estate Agency">Estate Agency</MenuItem>
      <MenuItem value="Motoring & Automotive">Motoring & Automotive</MenuItem>
      <MenuItem value="Legal">Legal</MenuItem>
      <MenuItem value="FMCG">FMCG</MenuItem>
      <MenuItem value="Media, Digital & Creative">
        Media, Digital & Creative
      </MenuItem>
      <MenuItem value="Other">Other</MenuItem>
    </Select>
  );
};
export default SpecialJobs;
