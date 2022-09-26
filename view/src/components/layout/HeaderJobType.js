import React from "react";
import { Link } from "react-router-dom";

import { Stack, Button, styled } from "@mui/material";

const jobTypeLocal = [
  {
    subCategory: "AC Technician",
    title: "AC Technician",
  },
  {
    subCategory: "Cook/Helper",
    title: "Cook/Helper",
  },
  {
    subCategory: "Operator/Technician",
    title: "Operator/Technician",
  },
  {
    subCategory: "Bar Tender",
    title: "Bar Tender",
  },
  {
    subCategory: "Delivery person",
    title: "Delivery person",
  },
  {
    subCategory: "Painter",
    title: "Painter",
  },
  {
    subCategory: "Body Guard",
    title: "Body Guard",
  },
  {
    subCategory: "Driver",
    title: "Driver",
  },
  {
    subCategory: "Plumber",
    title: "Plumber",
  },
  {
    subCategory: "Beautician/Salon",
    title: "Beautician/Salon",
  },
  {
    subCategory: "Data entry/Back office",
    title: "Data entry/Back office",
  },
  {
    subCategory: "BPOTelecaller",
    title: "BPOTelecaller",
  },
  {
    subCategory: "Firefighter",
    title: "Firefighter",
  },
  {
    subCategory: "Sales/Marketing",
    title: "Sales/Marketing",
  },
  {
    subCategory: "Office co-ordinator",
    title: "Office co-ordinator",
  },
  {
    subCategory: "Helper",
    title: "Helper",
  },
  {
    subCategory: "Soldering operator",
    title: "Soldering operator",
  },
  {
    subCategory: "Nanny/Aaya",
    title: "Nanny/Aaya",
  },
  {
    subCategory: "Labour",
    title: "Labour",
  },
  {
    subCategory: "Teacher/Tutor",
    title: "Teacher/Tutor",
  },
  {
    subCategory: "Construction",
    title: "Construction",
  },
  {
    subCategory: "Maid/Servant",
    title: "Maid/Servant",
  },
  {
    subCategory: "Waiter",
    title: "Waiter",
  },
  {
    subCategory: "Control room",
    title: "Control room",
  },
  {
    subCategory: "Metal sheet worker/Welder",
    title: "Metal sheet worker/Welder",
  },
  {
    subCategory: "Washer",
    title: "Washer",
  },
  {
    subCategory: "Office boy/peon",
    title: "Office boy/peon",
  },
  {
    subCategory: "Other",
    title: "Other",
  },
];

const jobTypeSpecial = [
  {
    subCategory: "Apprenticeships",
    title: "Apprenticeships",
  },
  {
    subCategory: "Financial Services",
    title: "Financial Services",
  },
  {
    subCategory: "Purchasing",
    title: "Purchasing",
  },
  {
    subCategory: "Admin, SecretarialPA",
    title: "Admin, SecretarialPA",
  },
  {
    subCategory: "General Insurance",
    title: "General Insurance",
  },
  {
    subCategory: "Recruitment Consultancy",
    title: "Recruitment Consultancy",
  },
  {
    subCategory: "Accountant",
    title: "Accountant",
  },
  {
    subCategory: "Graduate Training Internships",
    title: "Graduate Training Internships",
  },
  {
    subCategory: "Retail",
    title: "Retail",
  },
  {
    subCategory: "Banking",
    title: "Banking",
  },
  {
    subCategory: "HealthMedicine",
    title: "Health & Medicine",
  },
  {
    subCategory: "Scientific",
    title: "Scientific",
  },
  {
    subCategory: "Construction Property",
    title: "Construction & Property",
  },
  {
    subCategory: "Human Resources",
    title: "Human Resources",
  },
  {
    subCategory: "Security Safety",
    title: "Security Safety",
  },
  {
    subCategory: "Customer Service",
    title: "Customer Service",
  },
  {
    subCategory: "Hospitality Catering",
    title: "Hospitality & Catering",
  },
  {
    subCategory: "Strategy Consultancy",
    title: "Strategy & Consultancy",
  },
  {
    subCategory: "Charity Voluntary",
    title: "Charity & Voluntary",
  },
  {
    subCategory: "ITTelecoms",
    title: "IT & Telecoms",
  },
  {
    subCategory: "Social Care",
    title: "Social Care",
  },
  {
    subCategory: "Education",
    title: "Education",
  },
  {
    subCategory: "LeisureTourism",
    title: "Leisure & Tourism",
  },
  {
    subCategory: "Sales",
    title: "Sales",
  },
  {
    subCategory: "Engineering",
    title: "Engineering",
  },
  {
    subCategory: "Manufacturing",
    title: "Manufacturing",
  },
  {
    subCategory: "TransportLogistics",
    title: "Transport & Logistics",
  },
  {
    subCategory: "Energy",
    title: "Energy",
  },
  {
    subCategory: "MarketingPR",
    title: "Marketing & PR",
  },
  {
    subCategory: "Training",
    title: "Training",
  },
  {
    subCategory: "MotoringAutomotive",
    title: "Motoring & Automotive",
  },
  {
    subCategory: "Legal",
    title: "Legal",
  },
  {
    subCategory: "Media, DigitalCreative",
    title: "Media, DigitalCreative",
  },
  {
    subCategory: "Other",
    title: "Other",
  },
];

const HeaderJobType = ({ jobSeach, setJobSearch }) => {
  const CustomSpecialJobBtn = styled(Button)(({ theme }) => ({
    color: "#1976d2",
    fontWeight: jobSeach === "special job" ? "700" : "500",
    backgroundColor:
      jobSeach === "special job" ? "rgba(25, 118, 210 , 0.1)" : "transparent",
    "&:hover": {
      backgroundColor: "rgba(25, 118, 210 , 0.1)",
    },
  }));
  const CustomLocalJobBtn = styled(Button)(({ theme }) => ({
    color: "#1976d2",
    fontWeight: jobSeach === "local job" ? "700" : "500",
    backgroundColor:
      jobSeach === "local job" ? "rgba(25, 118, 210 , 0.1)" : "transparent",
    "&:hover": {
      backgroundColor: "rgba(25, 118, 210 , 0.1)",
    },
  }));

  return (
    <div className="sub-menu" id="sub-menu">
      <div id="sub-menu-content">
        <div>
          <div
            style={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <h4 style={{ padding: "0 15px" }}>Browser by</h4>
            <Stack spacing={2} direction="row">
              <CustomSpecialJobBtn
                style={{ fontSize: "12px" }}
                size="large"
                onClick={() => setJobSearch("special job")}
              >
                Specialist Jobs
              </CustomSpecialJobBtn>
              <CustomLocalJobBtn
                size="large"
                style={{ fontSize: "12px" }}
                onClick={() => setJobSearch("local job")}
              >
                Local Jobs
              </CustomLocalJobBtn>
            </Stack>
          </div>
          {jobSeach === "local job" ? (
            <ul className="row-list">
              {jobTypeLocal.map((type) => (
                <li
                  className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav"
                  key={type.subCategory}
                >
                  <Link
                    className="subcategory_item"
                    to="/job"
                    state={{
                      subCategory: type.subCategory.toLowerCase(),
                      category: "local job",
                    }}
                  >
                    {type.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="row-list">
              {jobTypeSpecial.map((type) => (
                <li
                  className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav"
                  key={type.subCategory}
                >
                  <Link
                    className="subcategory_item"
                    to="/job"
                    state={{
                      subCategory: type.subCategory.toLowerCase(),
                      category: "special job",
                    }}
                  >
                    {type.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeaderJobType);
