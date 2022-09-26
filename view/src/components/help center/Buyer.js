import React from "react";
import { Typography } from "@mui/material";

export default function Buyer() {
  return (
    <>
      <Typography variant="h4">Buyer Guide</Typography>
      <br />
      <Typography variant="h5" id="buyer-1">
        How to search for a product based on location?
      </Typography>
      <br />
      <ol type="1">
        <li>
          <Typography variant="p">
            First select a category from the homepage and it take you to the
            category page and there at the left side bar you search the items
            either based on Keyword, country, state, city, Business type,
            category.
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            You can also save your alert from the bottom left page and you will
            start getting emails related to your preference.
          </Typography>
        </li>
      </ol>
      <br />
      <Typography variant="h5" id="buyer-2">
        {" "}
        Can I pay advance pay to the seller?
      </Typography>
      <br />
      <Typography variant="p">
        {" "}
        Although we invest significantly in ensuring only genuine users are
        active on the platform, your safety is just as much your responsibility
        as it is ours. If seller urge you to make advance please go through
        secure system so if you didn’t get service/product you can get your
        money back. Do not scan any QR codes as this may lead to deduct money
        from your account. FutJan is not responsible for any delivery services
        or paid delivery. Buyer and seller have to arrange themselves.
      </Typography>
      <br />
      <Typography variant="h5" id="buyer-3">
        How to search for a product based on location?
      </Typography>
      <br />
      <Typography variant="p" display="block">
        Meet seller at secure & public location wherever possible and also try
        to have someone accompany you in order to close any deal.{" "}
      </Typography>
      <br />
      <Typography variant="h5" id="buyer-4">
        {" "}
        Where to meet seller?
      </Typography>
      <br />
      <Typography variant="p">
        Meet seller at secure & public location wherever possible and also try
        to have someone accompany you in order to close any deal.{" "}
      </Typography>
    </>
  );
}
