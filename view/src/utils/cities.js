import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { City } from "country-state-city";
import "./customCss.css";
const Cities = (props) => {
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
  switch (options.length) {
    case 0:
      return (
        <input
          type="text"
          name="city"
          value={props.city.name}
          onChange={(e) =>
            props.setCity({
              name: e.target.value,
              stateCode: "",
              countryCode: "",
            })
          }
          placeholder="city"
          id="input-website"
          className={
            props.errors &&
            props.errors.validation &&
            props.errors.validation.city
              ? "form-control is-invalid"
              : "form-control"
          }
        />
      );
    default:
      return (
        <Autocomplete
          className="form-control"
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
  }
};

export default React.memo(Cities);
