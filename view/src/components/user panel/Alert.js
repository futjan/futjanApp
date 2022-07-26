import React, { memo, useEffect } from "react";
import { getPreset } from "../actions/userAction";
import capitalizeFirstLetter from "../../utils/captilizeFirstLetter";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
const Alert = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPreset());
  }, []);
  const preset = useSelector((state) => state.auth.preset);
  console.log(preset);
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-dir-col"
      style={{ padding: "30px 20px" }}
    >
      <h2>My Alert</h2>
      <Grid
        container
        sx={{
          fontSize: "16px",
          maxWidth: "500px",
          overflow: "auto",
          borderRadius: "5px",
          padding: "10px",
          boxShadow: "0px 2px 10px #f5f5f5",
        }}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
      >
        <Grid
          item
          xs={6}
          sx={{
            fontSize: "16px",
            borderBottom: "1px solid #f5f5f5",
            borderRight: "1px solid #f5f5f5",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "16px", margin: "0", fontWeight: "700" }}>
            <span>Country</span>
          </p>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            fontSize: "16px",
            borderBottom: "1px solid #f5f5f5",
            padding: "10px",
            textAlign: "center",
          }}
        >
          {preset && preset.country
            ? capitalizeFirstLetter(preset.country)
            : "No Alert For County"}
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            fontSize: "16px",
            padding: "10px",
            borderRight: "1px solid #f5f5f5",
            borderBottom: "1px solid #f5f5f5",
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          <p style={{ fontSize: "16px", margin: "0", fontWeight: "700" }}>
            County / State
          </p>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            fontSize: "16px",
            padding: "10px",
            borderBottom: "1px solid #f5f5f5",
            textAlign: "center",
          }}
        >
          {preset && preset.county
            ? capitalizeFirstLetter(preset.county)
            : "No Alert For County"}
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            fontSize: "16px",
            padding: "10px",
            borderRight: "1px solid #f5f5f5",
            borderBottom: "1px solid #f5f5f5",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "16px", margin: "0", fontWeight: "700" }}>
            City
          </p>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            fontSize: "16px",
            padding: "10px",
            borderBottom: "1px solid #f5f5f5",

            textAlign: "center",
          }}
        >
          {preset && preset.city
            ? capitalizeFirstLetter(preset.city)
            : "No Alert For City"}
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            fontSize: "16px",
            padding: "10px",
            borderRight: "1px solid #f5f5f5",
            borderBottom: "1px solid #f5f5f5",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "16px", margin: "0", fontWeight: "700" }}>
            Surplus Title
          </p>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            fontSize: "16px",
            padding: "10px",
            borderBottom: "1px solid #f5f5f5",
            textAlign: "center",
          }}
        >
          {preset && preset.title_surplus
            ? capitalizeFirstLetter(preset.title_surplus)
            : "No Alert For Surplus Title"}
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            fontSize: "16px",
            padding: "10px",
            borderRight: "1px solid #f5f5f5",
            borderBottom: "1px solid #f5f5f5",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "16px", margin: "0", fontWeight: "700" }}>
            Job Title
          </p>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            fontSize: "16px",
            padding: "10px",
            borderBottom: "1px solid #f5f5f5",
            textAlign: "center",
          }}
        >
          {preset && preset.title_job
            ? capitalizeFirstLetter(preset.title_job)
            : "No Alert For Job Title"}
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            fontSize: "16px",
            padding: "10px",
            borderRight: "1px solid #f5f5f5",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "16px", margin: "0", fontWeight: "700" }}>
            Jobseeker Title
          </p>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            fontSize: "16px",
            padding: "10px",

            textAlign: "center",
          }}
        >
          {preset && preset.title_jobSeeker
            ? capitalizeFirstLetter(preset.title_jobSeeker)
            : "No Alert For Jobseeker Title"}
        </Grid>
      </Grid>
    </div>
  );
};
export default memo(Alert);
