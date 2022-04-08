import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./customCss.css";

const SpecialJobs = (props) => {
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
      <MenuItem value="Apprenticeships">Apprenticeships</MenuItem>
      <MenuItem value="Financial Services">Financial Services</MenuItem>
      <MenuItem value="Purchasing">Purchasing</MenuItem>
      <MenuItem value="Admin, SecretarialPA">Admin, Secretarial & PA</MenuItem>
      <MenuItem value="General Insurance">General Insurance</MenuItem>
      <MenuItem value="Recruitment Consultancy">
        Recruitment Consultancy
      </MenuItem>
      <MenuItem value="Accountant">Accountant</MenuItem>
      <MenuItem value="Graduate TrainingInternships">
        Graduate Training & Internships
      </MenuItem>
      <MenuItem value="retail">Retail</MenuItem>
      <MenuItem value="banking">Banking</MenuItem>
      <MenuItem value="healthmedicine">Health & Medicine</MenuItem>
      <MenuItem value="scientific">Scientific</MenuItem>
      <MenuItem value="constructionproperty">Construction & Property</MenuItem>
      <MenuItem value="human resources">Human Resources</MenuItem>
      <MenuItem value="securitysafety">Security & Safety</MenuItem>
      <MenuItem value="customer service">Customer Service</MenuItem>
      <MenuItem value="hospitalitycatering">Hospitality & Catering</MenuItem>
      <MenuItem value="strategyconsultancy">Strategy & Consultancy</MenuItem>
      <MenuItem value="charityvoluntary">Charity & Voluntary</MenuItem>
      <MenuItem value="ittelecoms">IT & Telecoms</MenuItem>
      <MenuItem value="social care">Social Care</MenuItem>
      <MenuItem value="education">Education</MenuItem>
      <MenuItem value="leisuretourism">Leisure & Tourism</MenuItem>
      <MenuItem value="sales">Sales</MenuItem>
      <MenuItem value="engineering">Engineering</MenuItem>
      <MenuItem value="manufacturing">Manufacturing</MenuItem>
      <MenuItem value="transportlogistics">Transport & Logistics</MenuItem>
      <MenuItem value="energy">Energy</MenuItem>
      <MenuItem value="marketingpr">Marketing & PR</MenuItem>
      <MenuItem value="training">Training</MenuItem>
      <MenuItem value="estate agency">Estate Agency</MenuItem>
      <MenuItem value="motoringautomotive">Motoring & Automotive</MenuItem>
      <MenuItem value="legal">Legal</MenuItem>
      <MenuItem value="fmcg">FMCG</MenuItem>
      <MenuItem value="media digital creative">
        Media, Digital & Creative
      </MenuItem>
      <MenuItem value="other">Other</MenuItem>
    </Select>
  );
};
export default React.memo(SpecialJobs);
