import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./customCss.css";

// const Country = window.Country;
// console.log(window);
import { Country } from "country-state-city";

const Countries = (props) => {
  const options = [
    ...Country.getAllCountries()
      .map((count) => {
        return {
          name: count.name,
          isoCode: count.isoCode,
        };
      })
      .filter(
        (country) =>
          country.name.toLowerCase() === "united kingdom" ||
          country.name.toLowerCase() === "india"
      ),
  ];
  const [country, setCountry] = useState({
    name: "",
    isoCode: "",
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
      autoHighlight={true}
      disablePortal={true}
      placeholder="Choose Country"
      options={options}
      getOptionLabel={(option) => (option ? option.name : "")}
      value={props.country}
      onChange={(e, value) => {
        if (value === null) {
          props.setCountry({ name: "", isoCode: "" });
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
