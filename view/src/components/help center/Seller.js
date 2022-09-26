import React from "react";
import { Typography } from "@mui/material";
export default function Seller() {
  return (
    <>
      <Typography variant="h4">Seller guide</Typography>
      <br />
      <Typography variant="h5" id="seller-1">
        How to post an Ad and photos effective?
      </Typography>
      <br />
      <Typography variant="h5">
        For posting an ad for surplus and business you need to register your
        account and then:
      </Typography>
      <br />
      <ol type="1">
        <li>
          <Typography variant="p">
            Click the Post Ad button at the top of the Page or at the category
            page
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            Type Name/Company, Contact, address, postcode, country,
            State/county, Business type, category, website, Title name,
            description, keyword, original price, offered price, upload images,
            choose if you want to promote Ad, finally click on Post my Ad
          </Typography>
        </li>
      </ol>
      <br />
      <Typography variant="h5">
        For posting an ad for Job you need to register your account and then:
      </Typography>
      <br />
      <ol type="1">
        <li>
          <Typography variant="p">
            Click the Post Ad button at the top of the Page or at the category
            page
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            Type Job title, select category, Subcategory, Job type, Gender,
            Salary type, country, state/county, city, experience, qualification,
            contact, email, address, description, keyword, min salary, Max
            salary, upload image, choose if you want to promote Ad, finally
            click on Post my Ad
          </Typography>
        </li>
      </ol>
      <br />
      <Typography variant="h5">
        For posting an ad for Job seeker you need to register your account and
        then:
      </Typography>
      <br />
      <ol type="1">
        <li>
          <Typography variant="p">
            Click the Post Ad button at the top of the Page or at the category
            page
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            Type Name, Job title, select category, Subcategory, Job type,
            Gender, Salary type, country, state/county, city, experience,
            qualification, contact, email, address, description, skills, rate,
            DOB, age, upload profile, upload CV, choose if you want to promote
            Ad, finally click on Post my Ad.
          </Typography>
        </li>
      </ol>
      <br />
      <Typography variant="h5" id="seller-2">
        {" "}
        How to edit/delete an Ad?
      </Typography>
      <br />
      <ol type="1">
        <li>
          <Typography variant="p">
            For edit and delete an Ad, you need to login to your account and
            click on menu at the top of the page.
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            Select My Ads, find the Ad you want to edit and edit your section at
            right side under the action column.
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            Then go the any section of the page you want to change and
            add/remove information as needed
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            For editing photos, click delete X in the corner of the image and
            then rearrange the photos in the order you want them to appear
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            Finally when everything ready to post the changes, click Update my
            Ad.
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            For deleting an Ad, select My Ads and select delete at the right
            side under action column.
          </Typography>
        </li>
      </ol>
      <br />
      <Typography variant="h5" id="seller-3">
        How to share Ad with friends/Family?
      </Typography>
      <br />
      <Typography variant="p" display="block">
        To share an Ad, go to Ad and select Share on section at the right side
        of the Ad and select to share an Ad via Facebook, whatsApp, twitter,
        LinkedIn
      </Typography>
      <br />
      <Typography variant="h5" id="seller-4">
        {" "}
        What is Ad active time period?
      </Typography>
      <br />
      <Typography variant="p">
        Ad will be active for 30 days and after that either you need to renew it
        or if items is sold you can delete it
      </Typography>
    </>
  );
}
