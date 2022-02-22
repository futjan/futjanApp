import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { State } from "country-state-city";
import "./customCss.css";

const County = (props) => {
  const [county, setCounty] = useState({
    name: "",
    isoCode: "",
  });
  const [options, setOptions] = useState([]);

  // useEffect
  useEffect(() => {
    if (props && props.country && props.country.name) {
      setOptions([
        ...State.getStatesOfCountry(props.country && props.country.isoCode).map(
          (stat) => {
            return {
              name: stat.name,
              isoCode: stat.isoCode,
            };
          }
        ),
      ]);
    } else {
      setOptions([]);
    }
  }, [props && props.country]);
  return (
    <Autocomplete
      className="form-control"
      disablePortal
      id="combo-box-demo"
      options={options}
      getOptionLabel={(option) => (option ? option.name : "")}
      value={props.county}
      onChange={(e, value) => {
        props.setCounty(value);
      }}
      isOptionEqualToValue={(option, value) => {
        return option.name === value.name;
      }}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} placeholder="Choose County" />
      )}
      //   renderOption={(props, option) =>
      //     props.country &&
      //     props.country.name.length > 0 &&
      //     props.country !== null ? (
      //       <li {...props} key={option.key}>
      //         {option.name}
      //       </li>
      //     ) : (
      //       <li {...props}>Please Select Country First</li>
      //     )
      //   }
    />
  );
};

export default County;
