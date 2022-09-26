import React, { lazy, Suspense, useState } from "react";
import { Typography, Box, CircularProgress } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";

const Payment = lazy(() => import("./Payment"));
const AcceptanceAndAbusing = lazy(() => import("./AcceptanceAndAbusing"));
const FeesPolicy = lazy(() => import("./FeesPolicy"));
const Conduct = lazy(() => import("./Conduct"));
const Paid = lazy(() => import("./Paid"));

const Refunds = lazy(() => import("./Refunds"));
const PostingAgents = lazy(() => import("./PostingAgents"));
const AccessService = lazy(() => import("./AccessService"));
const Claims = lazy(() => import("./Claims"));
const Intellectual = lazy(() => import("./Intellectual"));
const UserSubmission = lazy(() => import("./UserSubmission"));
const Indemnity = lazy(() => import("./Indemnity"));
const NoSpamPolicy = lazy(() => import("./NoSpamPolicy"));
const DealingOrgAndIndi = lazy(() => import("./DealingOrgAndIndi"));
const Disclaimer = lazy(() => import("./Disclaimer"));
const LimitAndLiab = lazy(() => import("./LimitAndLiab"));
const Assignment = lazy(() => import("./Assignment"));
const AbilityToAccept = lazy(() => import("./AbilityToAccept"));
const GeneralInfo = lazy(() => import("./GeneralInfo"));
const PrivacyPolicy = lazy(() => import("./PrivacyPolicy"));
const LimitAndTermi = lazy(() => import("./LimitAndTermi"));

const Index = () => {
  const [comp, setComp] = useState("basic");

  return (
    <>
      <div
        id="wrapper"
        className="wrapper-fluid banners-effect-5 help-center-container term-condition"
        style={{ margin: "30px 0" }}
      >
        <div className="main-container container">
          <h3 className="about-title text-align-center">Futjan Terms of Use</h3>
          <div className="row mt-4" style={{ paddingBottom: "30px" }}>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "Acceptance/Abusing"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("Acceptance/Abusing")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5">
                    Acceptance/Abusing FutJan
                  </Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "Fees"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("Fees")}
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5">
                    Fees, services and content policy
                  </Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "Conduct"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("Conduct")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5">Conduct</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "Paid"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("Paid")}
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5">Paid Services</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "Payment"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("Payment")}
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5">
                    Payment for Paid Services
                  </Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "Refunds"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("Refunds")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5"> Refunds/Cancellation</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "Posting"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("Posting")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5"> Posting Agents</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "Access"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("Access")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5"> Access to the service</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "Claims"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("Claims")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5"> Claims of Infringements</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "Intellectual"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("Intellectual")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5">
                    {" "}
                    Intellectual Property Rights
                  </Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "User"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("User")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5">User Submission</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "Indemnity"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("Indemnity")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5">Indemnity</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "Spam"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("Spam")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5">No Spam Policy</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "Dealings"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("Dealings")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5">
                    Dealings with Organizations and individuals
                  </Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "LimitationTermination"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("LimitationTermination")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5">
                    Limitation and Termination of Service
                  </Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "Disclaimer"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("Disclaimer")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5">Disclaimer of Warranties</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "LimitationsLia"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("LimitationsLia")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5">Limitations of Liability</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "Assignment"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("Assignment")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5">Assignment</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "Ability"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("Ability")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5">
                    Ability to Accept terms of Service
                  </Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "General"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("General")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5">General Information</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion
                disableGutters={true}
                expanded={false}
                className={
                  comp === "Privacy"
                    ? "help-center-detail-link active"
                    : "help-center-detail-link"
                }
                onClick={() => setComp("Privacy")}
              >
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography variant="h5">Privacy Policy</Typography>
                </AccordionSummary>
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
                {comp === "basic" ? (
                  <Typography variant="p" display="block">
                    Terms of use updated on June 24th 2022. Please read
                    carefully and by using this platform you consent your
                    understanding and acceptance of these terms and conditions.
                    <br />
                    <br />
                    These Terms of Use constitute a legally binding agreement
                    between you and FutJan.com. This applied on current users,
                    and upon acceptance for new users.
                    <br />
                    <br />
                    Users accept these Terms of Use by clicking the "Register
                    Account" button when registering a FutJan account and by
                    otherwise accessing FutJan, including posting an ad; or as
                    otherwise indicated on FutJan.
                    <br />
                    <br />
                    In the event of non-compliance with this terms of use,
                    FutJan has the right to limit or terminate your access or
                    usage rights to the platform immediately.
                    <br />
                    <br />
                    Users are solely responsible for all information that submit
                    to FutJan and any consequences that may result from their
                    post. In the event of non-compliance with this terms of use,
                    FutJan has the right to restrict user's usage of FutJan
                    either temporarily or permanently, or refuse a user's
                    registration as the case may be in accordance with the
                    information technology rules 2021. If we believe that users
                    are breaching these Terms of Use in any way and/or behaving
                    suspiciously on FutJan, we may, at our discretion, inform
                    other FutJan users that have been in contact with you and
                    recommend that they exercise caution.
                    <br />
                    <br />
                    By using platform and <b>services</b> of the FutJan you
                    agree to these terms
                  </Typography>
                ) : null}
                {comp === "Acceptance/Abusing" ? (
                  <AcceptanceAndAbusing />
                ) : null}

                {comp === "Fees" ? <FeesPolicy /> : null}
                {comp === "Conduct" ? <Conduct /> : null}
                {comp === "Paid" ? <Paid /> : null}
                {comp === "Payment" ? <Payment /> : null}
                {comp === "Refunds" ? <Refunds /> : null}
                {comp === "Posting" ? <PostingAgents /> : null}
                {comp === "Access" ? <AccessService /> : null}
                {comp === "Claims" ? <Claims /> : null}
                {comp === "Intellectual" ? <Intellectual /> : null}
                {comp === "User" ? <UserSubmission /> : null}
                {comp === "Indemnity" ? <Indemnity /> : null}
                {comp === "Spam" ? <NoSpamPolicy /> : null}
                {comp === "Dealings" ? <DealingOrgAndIndi /> : null}
                {comp === "LimitationsLia" ? <LimitAndLiab /> : null}
                {comp === "LimitationTermination" ? <LimitAndTermi /> : null}
                {comp === "Disclaimer" ? <Disclaimer /> : null}
                {comp === "Assignment" ? <Assignment /> : null}
                {comp === "Ability" ? <AbilityToAccept /> : null}
                {comp === "General" ? <GeneralInfo /> : null}
                {comp === "Privacy" ? <PrivacyPolicy /> : null}
                {/* {comp === "items" ? <Items /> : null}
                {comp === "block" ? <Block /> : null}
                {comp === "account" ? <Account /> : null}
                {comp === "seller" ? <Seller /> : null}
                {comp === "buyer" ? <Buyer /> : null}
                {comp === "payment" ? <Payment /> : null} */}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
