import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Preloader2() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "500px",
        width: "100%",
      }}
      className="preloader2"
    >
      <CircularProgress
        sx={{ width: "80px", height: "80px", color: "#3b5998" }}
      />
    </Box>
  );
}
