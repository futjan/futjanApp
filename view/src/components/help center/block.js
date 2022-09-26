import React from "react";
import { Typography } from "@mui/material";
export default function block() {
  return (
    <>
      <Typography variant="h4">Block Messages</Typography>
      <br />
      <Typography variant="p">
        If you want to block messages of the people and don’t want to
        communicate further, tap the three dots in the top right corner of the
        conversation. Click “block”. Further, if you want to ‘unblock’ click
        unblock in the messages at the bottom of the conversation.
      </Typography>
    </>
  );
}
