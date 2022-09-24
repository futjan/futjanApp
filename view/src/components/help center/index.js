import React, { lazy, Suspense, useState } from "react";
import { Typography, Box, CircularProgress } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Items = lazy(() => import("./Items"));
const Block = lazy(() => import("./block"));
const Buyer = lazy(() => import("./Buyer"));
const Seller = lazy(() => import("./Seller"));
const Account = lazy(() => import("./Account"));
const Payment = lazy(() => import("./Payment"));
const Index = () => {
  const [comp, setComp] = useState("items");
  const [active, setActive] = useState(
    "Items / Services not allowed on FutJan"
  );
  return (
    <>
      <div
        id="wrapper"
        className="wrapper-fluid banners-effect-5 help-center-container"
        style={{ margin: "30px 0" }}
      >
        <div className="main-container container">
          <h3 className="about-title">
            <i>Help Center</i>
          </h3>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <Accordion disableGutters={true}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                >
                  <Typography variant="h5">Items / Services</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ padding: 0, background: "rgba(0, 0, 0, .03)" }}
                >
                  <Typography>
                    <div
                      onClick={() => {
                        setComp("items");
                        setActive("Items / Services not allowed on FutJan");
                      }}
                      className={
                        active === "Items / Services not allowed on FutJan"
                          ? "help-center-detail-link active"
                          : "help-center-detail-link"
                      }
                    >
                      Items / Services not allowed on FutJan
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion disableGutters={true}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5">Messages</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ padding: 0, background: "rgba(0, 0, 0, .03)" }}
                >
                  <Typography>
                    <div
                      onClick={() => {
                        setComp("block");
                        setActive("Block Messages");
                      }}
                      className={
                        active === "Block Messages"
                          ? "help-center-detail-link active"
                          : "help-center-detail-link"
                      }
                    >
                      Block Messages
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion disableGutters={true}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5">Account Management</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ padding: 0, background: "rgba(0, 0, 0, .03)" }}
                >
                  <Typography>
                    <div
                      onClick={() => {
                        setComp("account");
                        setActive("How to login/register and logout?");
                      }}
                      className={
                        active === "How to login/register and logout?"
                          ? "help-center-detail-link active"
                          : "help-center-detail-link"
                      }
                    >
                      How to login/register and logout?
                    </div>
                  </Typography>
                  <Typography>
                    <div
                      onClick={() => {
                        setComp("account");
                        setActive("How to write a review?");
                      }}
                      className={
                        active === "How to write a review?"
                          ? "help-center-detail-link active"
                          : "help-center-detail-link"
                      }
                    >
                      How to write a review?
                    </div>
                  </Typography>
                  <Typography>
                    <div
                      onClick={() => {
                        setComp("account");
                        setActive("How to save or delete favourites?");
                      }}
                      className={
                        active === "How to save or delete favourites?"
                          ? "help-center-detail-link active"
                          : "help-center-detail-link"
                      }
                    >
                      How to save or delete favourites?
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion disableGutters={true}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5">Seller guide</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ padding: 0, background: "rgba(0, 0, 0, .03)" }}
                >
                  <Typography>
                    <div
                      onClick={() => {
                        setComp("seller");
                        setActive("How to post an Ad and photos effective?");
                      }}
                      className={
                        active === "How to post an Ad and photos effective?"
                          ? "help-center-detail-link active"
                          : "help-center-detail-link"
                      }
                    >
                      How to post an Ad and photos effective?
                    </div>
                  </Typography>
                  <Typography>
                    <div
                      onClick={() => {
                        setComp("seller");
                        setActive("How to edit/delete an Ad?");
                      }}
                      className={
                        active === "How to edit/delete an Ad?"
                          ? "help-center-detail-link active"
                          : "help-center-detail-link"
                      }
                    >
                      How to edit/delete an Ad?
                    </div>
                  </Typography>
                  <Typography>
                    <div
                      onClick={() => {
                        setComp("seller");
                        setActive("How to share Ad with friends/Family?");
                      }}
                      className={
                        active === "How to share Ad with friends/Family?"
                          ? "help-center-detail-link active"
                          : "help-center-detail-link"
                      }
                    >
                      How to share Ad with friends/Family?
                    </div>
                  </Typography>
                  <Typography>
                    <div
                      onClick={() => {
                        setComp("seller");
                        setActive("What is Ad active time period?");
                      }}
                      className={
                        active === "What is Ad active time period?"
                          ? "help-center-detail-link active"
                          : "help-center-detail-link"
                      }
                    >
                      What is Ad active time period?
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion disableGutters={true}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5">Buyer Guide</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ padding: 0, background: "rgba(0, 0, 0, .03)" }}
                >
                  <Typography>
                    <div
                      onClick={() => {
                        setComp("buyer");
                        setActive(
                          "How to search for a product based on location?"
                        );
                      }}
                      className={
                        active ===
                        "How to search for a product based on location?"
                          ? "help-center-detail-link active"
                          : "help-center-detail-link"
                      }
                    >
                      How to search for a product based on location?
                    </div>
                  </Typography>
                  <Typography>
                    <div
                      onClick={() => {
                        setComp("buyer");
                        setActive("Can I pay advance pay to the seller?");
                      }}
                      className={
                        active === "Can I pay advance pay to the seller?"
                          ? "help-center-detail-link active"
                          : "help-center-detail-link"
                      }
                    >
                      Can I pay advance pay to the seller?
                    </div>
                  </Typography>
                  <Typography>
                    <div
                      onClick={() => {
                        setComp("buyer");
                        setActive("Where to meet seller?");
                      }}
                      className={
                        active === "Where to meet seller?"
                          ? "help-center-detail-link active"
                          : "help-center-detail-link"
                      }
                    >
                      Where to meet seller?
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion disableGutters={true}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5"> Payments & Promotions</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ padding: 0, background: "rgba(0, 0, 0, .03)" }}
                >
                  <Typography>
                    <div
                      onClick={() => {
                        setComp("payment");
                        setActive("How to promote an Ad");
                      }}
                      className={
                        active === "How to promote an Ad"
                          ? "help-center-detail-link active"
                          : "help-center-detail-link"
                      }
                    >
                      How to promote an Ad
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 help-center-detail-info">
              <Suspense
                fallback={
                  <div>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "400px",
                        width: "100%",
                      }}
                      className="preloader2"
                    >
                      <CircularProgress
                        sx={{ width: "80px", height: "80px", color: "#3b5998" }}
                      />
                    </Box>
                  </div>
                }
              >
                {comp === "items" ? <Items /> : null}
                {comp === "block" ? <Block /> : null}
                {comp === "account" ? <Account /> : null}
                {comp === "seller" ? <Seller /> : null}
                {comp === "buyer" ? <Buyer /> : null}
                {comp === "payment" ? <Payment /> : null}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
