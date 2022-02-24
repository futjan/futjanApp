import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Country } from "country-state-city";
import "./customCss.css";
const options = [
  ...Country.getAllCountries().map((count) => {
    return {
      name: count.name,
      isoCode: count.isoCode,
      phonecode: count.phonecode,
    };
  }),
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
      className="form-control"
      disablePortal
      autoHighlight={true}
      id="combo-box-demo"
      placeholder="Choose Country"
      options={options}
      getOptionLabel={(option) => (option ? option.name : "")}
      value={props.country}
      onChange={(e, value) => {
        props.setCountry(value);
      }}
      isOptionEqualToValue={(option, value) => {
        return option.name === value.name;
      }}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} placeholder="Choose Country" />
      )}
    />
  );
};

export default Countries;
