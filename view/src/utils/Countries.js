import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Country } from "country-state-city";
import "./customCss.css";
const options = [
  ...Country.getAllCountries()
    .map((count) => {
      return {
        name: count.name,
      };
    })
    .filter(
      (country) =>
        country.name.toLowerCase() === "united kingdom" ||
        country.name.toLowerCase() === "india"
    ),
];

const Countries = (props) => {
  const [country, setCountry] = useState({
    name: "",
    isoCode: "",
    phonecode: "",
  });
  useEffect(() => {
    if (props.for === "update") {
      setCountry({ ...props.country });
    }
  }, []);
  return (
    <Autocomplete
      className={
        props.errors &&
        props.errors.validation &&
        props.errors.validation.country
          ? "form-control is-invalid"
          : "form-control"
      }
      disablePortal
      autoHighlight={true}
      id="combo-box-demo"
      placeholder="Choose Country"
      options={options}
      getOptionLabel={(option) => (option ? option.name : "")}
      value={props.country}
      onChange={(e, value) => {
        if (value === null) {
          props.setCountry({ name: "" });
        } else {
          props.setCountry(value);
        }
      }}
      isOptionEqualToValue={(option, value) => {
        return option.name.toLowerCase() === value.name.toLowerCase();
      }}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} placeholder="Choose Country" />
      )}
    />
  );
};

export default React.memo(Countries);
