import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./customCss.css";

const BusinessType = (props) => {
  return (
    <Select
      className={
        props.errors &&
        props.errors.validation &&
        props.errors.validation.businessType
          ? "form-control is-invalid"
          : "form-control"
      }
      value={props.businessType}
      displayEmpty
      onChange={(e) => props.setBusinessType(e.target.value)}
    >
      <MenuItem value="">Choose type</MenuItem>
      <MenuItem value="Bakery">Bakery</MenuItem>
      <MenuItem value="Beverage Shop">Beverage Shop</MenuItem>
      <MenuItem value="Convenience store">Convenience store</MenuItem>
      <MenuItem value="Cafe">Cafe</MenuItem>
      <MenuItem value="Fruit/Vegetable store">Fruit/Vegetable store</MenuItem>
      <MenuItem value="Hotel">Hotel</MenuItem>
      <MenuItem value="Pastry shop">Pastry shop</MenuItem>
      <MenuItem value="Producers/Manufacturers">
        Producers/Manufacturers
      </MenuItem>
      <MenuItem value="Restaurant">Restaurant</MenuItem>
      <MenuItem value="Supermarkets">Supermarkets</MenuItem>
      <MenuItem value="Takeaway">Takeaway</MenuItem>
      <MenuItem value="Wholesalers">Wholesalers</MenuItem>
      <MenuItem value="Cafe">Cafe</MenuItem>
      <MenuItem value="Other">Other </MenuItem>
    </Select>
  );
};
export default React.memo(BusinessType);
