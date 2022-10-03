import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
function Claims() {
  return (
    <>
      <h4>Claims of Infringements</h4>
      <br />
      <Typography variant="p">
        FutJan is not liable for any infringement of intellectual property
        rights arising out of materials posted on or transmitted through the
        site, or items advertised on the site, by end-users, or any other third
        parties.
        <br />
        <br />
        If you are an owner of intellectual property rights or an agent who is
        fully authorized to act on behalf of the owner of intellectual property
        rights and believe that any Content or other content infringes upon your
        intellectual property right or intellectual property right of the owner
        on whose behalf you are authorized to act, you may submit a notification
        to FutJan together with a request to FutJan to delete the relevant
        Content in good faith in the claims of infringement form available
        <Link
          to="/noc"
          style={{
            textDecoration: "underline",
            color: "#3b5998",
            fontWeight: "bold",
            marginLeft: "4px",
          }}
        >
          here
        </Link>
      </Typography>
    </>
  );
}
export default Claims;
