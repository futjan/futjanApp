import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./customCss.css";

const BusinessCategory = (props) => {
  return (
    <Select
      className={
        props.errors &&
        props.errors.validation &&
        props.errors.validation.category
          ? "form-control is-invalid"
          : "form-control"
      }
      value={props.category}
      displayEmpty
      onChange={(e) => props.setCategory(e.target.value)}
    >
      <MenuItem value="">Choose Category</MenuItem>
      <MenuItem value="Baked Goods">Baked Goods</MenuItem>
      <MenuItem value="Groceries">Groceries</MenuItem>
      <MenuItem value="Meals">Meals</MenuItem>
      <MenuItem value="Other">Other</MenuItem>
    </Select>
  );
};
export default React.memo(BusinessCategory);
