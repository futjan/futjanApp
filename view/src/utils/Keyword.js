import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { getSurplusKeywords } from "../components/actions/surplusAction";
import { Link } from "react-router-dom";
import "./customCss.css";

const Keyword = (props) => {
  const [searchKeyword, setSearchKeyword] = useState({ keyword: "" });
  const keywords = useSelector((state) => state.surplus.keywords);
  const dispatch = useDispatch();

  // const [country, setCountry] = useState({
  //   name: "",
  //   isoCode: "",
  //   phonecode: "",
  // });
  useEffect(() => {
    if (props && props.keyword) {
      setSearchKeyword(props.keyword);
    }
  }, [props && props.keyword]);
  useEffect(() => {
    dispatch(getSurplusKeywords());
  }, []);
  return (
    <Autocomplete
      className="autosearch-input form-control"
      autoHighlight={true}
      disablePortal={true}
      options={keywords}
      getOptionLabel={(option) => (option ? option.keyword : "")}
      value={searchKeyword}
      defaultValue={props.keyword}
      onChange={(e, value) => {
        props.setKeyword({ keyword: value.keyword });
        setSearchKeyword({ keyword: value.keyword });
      }}
      isOptionEqualToValue={(option, value) => {
        return option.keyword === value.keyword;
      }}
      //   sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} placeholder="Keyword" />}
      renderOption={(props, option) => (
        <Link
          to="/surplus"
          key={option._id}
          // className="autoComplete-li"
          state={{ keyword: option }}
        >
          {" "}
          <li {...props}> {option.keyword} </li>
        </Link>
      )}
    />
  );
};

export default React.memo(Keyword);
