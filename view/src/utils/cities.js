import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { City } from "country-state-city";
import "./customCss.css";
const Cities = (props) => {
  const [city, setCity] = useState({
    name: "",
    stateCode: "",
    countryCode: "",
  });
  const [options, setOptions] = useState([]);

  // useEffect
  useEffect(() => {
    if (
      props &&
      props.country &&
      props.country.name &&
      props.county &&
      props.county.name
    ) {
      setOptions([
        ...City.getCitiesOfState(
          props.country && props.country.isoCode,
          props.county && props.county.isoCode
        ).map((cit) => {
          return {
            name: cit.name,
            stateCode: cit.stateCode,
            countryCode: cit.countryCode,
          };
        }),
      ]);
    } else {
      setOptions([]);
    }
  }, [props && props.country, props && props.county]);
  return (
    <Autocomplete
      className="form-control"
      disablePortal
      id="combo-box-demo"
      options={options}
      getOptionLabel={(option) => (option ? option.name : "")}
      value={props.city}
      onChange={(e, value) => {
        if (value === null) {
          props.setCity({
            name: "",
            stateCode: "",
            countryCode: "",
          });
        } else {
          props.setCity(value);
        }
      }}
      isOptionEqualToValue={(option, value) => {
        return option.name === value.name;
      }}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} placeholder="Choose City" />
      )}
    />
  );
};

export default Cities;
