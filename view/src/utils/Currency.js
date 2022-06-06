import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./customCss.css";

const Currency = ({ currency, setCurrency, country, errors }) => {
  useEffect(() => {
    if (country.toLowerCase() === "india") {
      setCurrency("₹");
    } else if (country.toLowerCase() === "united kingdom") {
      setCurrency("£");
    }
  }, [country]);

  return (
    <Select
      className={
        errors && errors.validation && errors.validation.currency
          ? "form-control is-invalid"
          : "form-control"
      }
      value={currency}
      displayEmpty
      onChange={(e) => setCurrency(e.target.value)}
    >
      <MenuItem value="">Choose</MenuItem>
      <MenuItem value="£">£ GBP</MenuItem>
      <MenuItem value="₹">₹ INR</MenuItem>
    </Select>
  );
};
export default React.memo(Currency);
