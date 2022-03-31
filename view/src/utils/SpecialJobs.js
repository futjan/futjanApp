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
      <MenuItem value="Retail">Retail</MenuItem>
      <MenuItem value="Banking">Banking</MenuItem>
      <MenuItem value="HealthMedicine">Health & Medicine</MenuItem>
      <MenuItem value="Scientific">Scientific</MenuItem>
      <MenuItem value="ConstructionProperty">Construction & Property</MenuItem>
      <MenuItem value="Human Resources">Human Resources</MenuItem>
      <MenuItem value="SecuritySafety">Security & Safety</MenuItem>
      <MenuItem value="Customer Service">Customer Service</MenuItem>
      <MenuItem value="HospitalityCatering">Hospitality & Catering</MenuItem>
      <MenuItem value="StrategyConsultancy">Strategy & Consultancy</MenuItem>
      <MenuItem value="CharityVoluntary">Charity & Voluntary</MenuItem>
      <MenuItem value="ITTelecoms">IT & Telecoms</MenuItem>
      <MenuItem value="Social Care">Social Care</MenuItem>
      <MenuItem value="Education">Education</MenuItem>
      <MenuItem value="LeisureTourism">Leisure & Tourism</MenuItem>
      <MenuItem value="Sales">Sales</MenuItem>
      <MenuItem value="Engineering">Engineering</MenuItem>
      <MenuItem value="Manufacturing">Manufacturing</MenuItem>
      <MenuItem value="TransportLogistics">Transport & Logistics</MenuItem>
      <MenuItem value="Energy">Energy</MenuItem>
      <MenuItem value="MarketingPR">Marketing & PR</MenuItem>
      <MenuItem value="Training">Training</MenuItem>
      <MenuItem value="Estate Agency">Estate Agency</MenuItem>
      <MenuItem value="MotoringAutomotive">Motoring & Automotive</MenuItem>
      <MenuItem value="Legal">Legal</MenuItem>
      <MenuItem value="FMCG">FMCG</MenuItem>
      <MenuItem value="Media, DigitalCreative">
        Media, Digital & Creative
      </MenuItem>
      <MenuItem value="Other">Other</MenuItem>
    </Select>
  );
};
export default React.memo(SpecialJobs);
