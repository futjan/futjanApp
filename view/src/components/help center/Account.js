import React from "react";
import { Typography } from "@mui/material";
export default function Account() {
  return (
    <>
      <Typography variant="h4">Account Management</Typography>
      <br />
      <Typography variant="h5" id="account-1">
        How to login/register and logout?
      </Typography>
      <br />
      <ol type="1">
        <li>
          <Typography variant="p">
            Click Login/Register at the top of the FutJan homepage.
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            Select Register tab, enter your name, email & password or else you
            can directly login via Facebook, google account or by mobile no.
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            Click register at the bottom of the form
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            After that you will receive a welcome email to the email address. In
            order to activate your account, open the email and click activate.
          </Typography>
        </li>
        <li>
          <Typography variant="p">Now you can login to your account</Typography>
        </li>
        <li>
          <Typography variant="p">
            For logout click on menu from the homepage and select logout.
          </Typography>
        </li>
      </ol>
      <br />
      <Typography variant="h5" id="account-2">
        {" "}
        How to write a review?
      </Typography>
      <br />
      <Typography variant="p" display="block">
        To write a review, click on Ad and there is a section at the top right
        side of the Ad which says write review, click on it and write your
        review about the seller.
      </Typography>
      <br />
      <Typography variant="h5" id="account-3">
        How to save or delete favourites?
      </Typography>
      <br />
      <Typography variant="p">
        To save favourites, click on Ad and there is a section at the bottom
        right side of the Ad which has icon , click on it and it will save. To
        delete favourites, go to menu at homepage and select my favourites.
        Select the one you want to delete and choose option to delete it.
      </Typography>
    </>
  );
}
