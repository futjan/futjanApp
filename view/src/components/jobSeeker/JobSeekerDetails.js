import React, { useEffect, Suspense } from "react";
import { getJobSeekerById, updateViews } from "../actions/jobSeekersAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fileURL from "../../utils/fileURL";
import capitalizeFirstLetter from "../../utils/captilizeFirstLetter";
import defaultUser from "../image/default.jpg";
import Skeleton from "react-loading-skeleton";
import ReportModal from "../modal/ReportModal";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../surplusBusiness/skeleton.css";
import { createFavourite } from "../actions/favouriteAction";
import CircularProgress from "@mui/material/CircularProgress";
import {
  setNotification,
  clearNotification,
} from "../actions/notificationAction";

const SocialBtn = React.lazy(() => import("../../utils/SocialBtn"));
const MessagePopup = React.lazy(() => import("../../utils/MessagePopup"));

const JobSeekerDetails = () => {
  // initialize hooks
  const dispatch = useDispatch();
  const { id } = useParams();
  // get state from store
  const jobSeeker = useSelector((state) => state.jobSeeker);
  const auth = useSelector((state) => state.auth);
  const favourite = useSelector((state) => state.favourite);
  const currency = useSelector((state) => state.currency);
  const favourites = useSelector((state) => state.favourite.favourites);
  // useEffect
  useEffect(() => {
    dispatch(getJobSeekerById(id));
  }, []);

  //update view
  useEffect(() => {
    if (jobSeeker.jobSeeker && jobSeeker.jobSeeker._id) {
      dispatch(
        updateViews({
          id: jobSeeker.jobSeeker && jobSeeker.jobSeeker._id,
          views:
            jobSeeker.jobSeeker && jobSeeker.jobSeeker.views
              ? jobSeeker.jobSeeker && jobSeeker.jobSeeker.views + 1
              : 1,
        })
      );
    }
  }, [jobSeeker.jobSeeker && jobSeeker.jobSeeker._id]);

  // close report modal
  const closeReportModal = React.useCallback((e) => {
    e.preventDefault();
    if (
      document.getElementById("so_sociallogin_3") &&
      e.target !== document.getElementById("block-popup-login")
    ) {
      document.getElementById("so_sociallogin_3").classList.add("in");
      document.getElementById("so_sociallogin_3").classList.add("d-block");
    }
  }, []);

  const createFavouriteFunc = React.useCallback(() => {
    if (auth.isAuthenticated === true) {
      const data = {
        adId: jobSeeker.jobSeeker && jobSeeker.jobSeeker._id,
        model: "jobseekers",
      };
      dispatch(createFavourite(data));
    } else {
      dispatch(setNotification("Login to add favourite", "error"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  }, [jobSeeker.jobSeeker && jobSeeker.jobSeeker._id]);

  // download file
  const donwloadCV = React.useCallback((fileName) => {
    var element = document.createElement("a");
    element.setAttribute("href", fileURL(fileName));
    element.setAttribute("download", fileName);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }, []);

  return (
    <div className="main-container container" style={{ margin: "20px auto" }}>
      {jobSeeker.loading === false ? (
        jobSeeker.jobSeeker &&
        jobSeeker.jobSeeker.user === auth.user.id ? null : (
          <div className="message-pop-container">
            <Suspense fallback={<div></div>}>
              <MessagePopup
                receiverId={jobSeeker.jobSeeker && jobSeeker.jobSeeker.user}
                title="Chat with Employee"
                adId={jobSeeker.jobSeeker._id}
                adType={`${jobSeeker.jobSeeker.adType}s`}
                image={jobSeeker.jobSeeker.images}
              />
            </Suspense>
          </div>
        )
      ) : null}
      <ReportModal
        modalId1="so_sociallogin_3"
        model="jobseekers"
        id={jobSeeker && jobSeeker.jobSeeker && jobSeeker.jobSeeker._id}
        modalId2="cancel-report-btn_3"
      />
      <div className="row" style={{ padding: "10px 20px " }}>
        <div id="content" className="col-sm-12">
          <div className="about-us about-demo-3">
            <div className="row">
              <div className="col-lg-6 col-md-6 about-image flex-dir-col d-flex justify-content-center align-items-center py-4">
                {" "}
                {jobSeeker.loading === true ? (
                  <Skeleton
                    count={1}
                    className="border-round"
                    height="232px"
                    width="232px"
                  />
                ) : jobSeeker.jobSeeker &&
                  jobSeeker.jobSeeker.images &&
                  jobSeeker.jobSeeker.images.length > 0 ? (
                  <img
                    src={fileURL(jobSeeker.jobSeeker.images)}
                    alt="About Us"
                    width={"40%"}
                    className="mb-5 border-round"
                  />
                ) : (
                  <img
                    src={defaultUser}
                    alt="About Us"
                    width={"40%"}
                    className="mb-5 border-round"
                  />
                )}
                {jobSeeker.loading === true ? (
                  <Skeleton
                    count={1}
                    style={{ height: "20px", width: "180px" }}
                  />
                ) : (
                  <h4 className="m-0">
                    {jobSeeker.jobSeeker &&
                      jobSeeker.jobSeeker.name &&
                      capitalizeFirstLetter(jobSeeker.jobSeeker.name)}
                  </h4>
                )}
                {jobSeeker.loading === true ? (
                  <Skeleton count={1} className="about-text-skeleton mt-2" />
                ) : (
                  <p className="m-0">
                    {jobSeeker.jobSeeker &&
                      jobSeeker.jobSeeker.title &&
                      capitalizeFirstLetter(jobSeeker.jobSeeker.title)}
                  </p>
                )}
                {jobSeeker.loading === true ? (
                  <div className="d-flex justify-content-evenly flex-gap-2 align-items-center">
                    <Skeleton count={1} className="about-text-skeleton" />
                    <Skeleton count={1} className="about-text-skeleton" />
                  </div>
                ) : (
                  <div
                    style={{
                      fontSize: "16px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#858585",
                      width: "100%",
                    }}
                  >
                    <div>
                      <i className="fa fa-map-marker ml-1"></i>
                      <span>
                        {jobSeeker.jobSeeker &&
                          jobSeeker.jobSeeker.country &&
                          capitalizeFirstLetter(jobSeeker.jobSeeker.country)}
                      </span>
                    </div>
                    <div className="ml-4">
                      <i className="fa fa-money mr-1"></i>{" "}
                      <span>
                        {jobSeeker.jobSeeker && currency.symbol}{" "}
                        {jobSeeker.jobSeeker &&
                        jobSeeker.jobSeeker.currency === currency.symbol
                          ? jobSeeker.jobSeeker &&
                            jobSeeker.jobSeeker.rate &&
                            jobSeeker.jobSeeker.rate.toFixed(2)
                          : (
                              jobSeeker.jobSeeker &&
                              jobSeeker.jobSeeker.rate * currency.rate
                            ).toFixed(2)}{" "}
                        {jobSeeker.jobSeeker && jobSeeker.jobSeeker.salaryType}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-lg-6 col-md-6 about-info">
                <h2 className="about-title">
                  About{" "}
                  {jobSeeker.jobSeeker &&
                    jobSeeker.jobSeeker.name &&
                    capitalizeFirstLetter(jobSeeker.jobSeeker.name)}
                </h2>
                <div className="about-text">
                  <div className="about-text-info">
                    <div className="about-text-icon-container date-posted">
                      <i className="fa fa-compass"></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Date Posted</h4>
                      {jobSeeker.loading === true ? (
                        <Skeleton count={1} className="about-text-skeleton" />
                      ) : (
                        <p className="m-0">
                          {jobSeeker.jobSeeker &&
                            jobSeeker.jobSeeker.createdAt &&
                            new Date(
                              jobSeeker.jobSeeker.createdAt
                            ).toDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="about-text-info">
                    <div className="about-text-icon-container business-type">
                      <i className="fa fa-money"></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Salary Type</h4>
                      {jobSeeker.loading === true ? (
                        <Skeleton count={1} className="about-text-skeleton" />
                      ) : (
                        <p className="m-0">
                          {jobSeeker.jobSeeker && currency.symbol}
                          {jobSeeker.jobSeeker && jobSeeker.jobSeeker.rate
                            ? jobSeeker.jobSeeker &&
                              jobSeeker.jobSeeker.currency === currency.symbol
                              ? jobSeeker.jobSeeker &&
                                jobSeeker.jobSeeker.rate &&
                                jobSeeker.jobSeeker.rate.toFixed(2)
                              : (
                                  jobSeeker.jobSeeker &&
                                  jobSeeker.jobSeeker.rate * currency.rate
                                ).toFixed(2) + " / "
                            : " "}{" "}
                          {jobSeeker.jobSeeker && jobSeeker.jobSeeker.salaryType
                            ? jobSeeker.jobSeeker.salaryType &&
                              capitalizeFirstLetter(
                                jobSeeker.jobSeeker.salaryType
                              )
                            : ""}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="about-text-info">
                    <div className="about-text-icon-container location">
                      <i className="fa fa-intersex"></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Gender</h4>
                      {jobSeeker.loading === true ? (
                        <Skeleton count={1} className="about-text-skeleton" />
                      ) : (
                        <p className="m-0">
                          {jobSeeker.jobSeeker &&
                            jobSeeker.jobSeeker.gender &&
                            capitalizeFirstLetter(jobSeeker.jobSeeker.gender)}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="about-text-info">
                    <div className="about-text-icon-container location">
                      <i className="fa fa-thumb-tack"></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Location</h4>
                      {jobSeeker.loading === true ? (
                        <Skeleton count={1} className="about-text-skeleton" />
                      ) : (
                        <p className="m-0">
                          {jobSeeker.jobSeeker && jobSeeker.jobSeeker.country
                            ? jobSeeker.jobSeeker.country &&
                              capitalizeFirstLetter(jobSeeker.jobSeeker.country)
                            : "-------"}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="about-text-info">
                    <div className="about-text-icon-container contact">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Contact</h4>
                      {jobSeeker.loading === true ? (
                        <Skeleton count={1} className="about-text-skeleton" />
                      ) : (
                        <p className="m-0">
                          {jobSeeker.jobSeeker && jobSeeker.jobSeeker.contact
                            ? jobSeeker.jobSeeker && jobSeeker.jobSeeker.contact
                            : "-------"}
                        </p>
                      )}
                    </div>
                  </div>
                  {jobSeeker.jobSeeker && jobSeeker.jobSeeker.cv ? (
                    <div className="about-text-info">
                      <div className="about-text-icon-container business-type">
                        <i className="fa fa-download"></i>
                      </div>
                      <div>
                        <h4 style={{ margin: "0 0 2px 0" }}>CV</h4>
                        {jobSeeker.loading === true ? (
                          <Skeleton count={1} className="about-text-skeleton" />
                        ) : (
                          <p
                            style={{
                              margin: "0",
                              textDecoration: "underline",
                              cursor: "pointer",
                            }}
                            onClick={() => donwloadCV(jobSeeker.jobSeeker.cv)}
                          >
                            Download cv
                          </p>
                        )}
                      </div>
                    </div>
                  ) : null}
                </div>
                {jobSeeker.loading !== true ? (
                  <>
                    {jobSeeker &&
                      jobSeeker.jobSeeker &&
                      jobSeeker.jobSeeker.user && (
                        <Button
                          variant="outlined"
                          size="large"
                          className="seller-other-ads-btn mb-1"
                          component={Link}
                          to="/user-ads"
                          state={{
                            user:
                              jobSeeker.jobSeeker && jobSeeker.jobSeeker.user,
                          }}
                        >
                          See seller other Ads
                        </Button>
                      )}
                    <h3 className="m-0">Share on</h3>
                    <Suspense fallback={<div></div>}>
                      <SocialBtn
                        type="job-seeker-detail"
                        id={jobSeeker.jobSeeker._id}
                      />
                    </Suspense>
                    <div id="product">
                      <div className="box-cart clearfix m-0">
                        <div className="form-group box-info-product">
                          <div className="option quantity">
                            <div className="add-to-links wish_comp">
                              <ul className="blank">
                                {favourite.loading === true ? (
                                  <li className="wishlist ">
                                    <a className="d-flex justify-content-center align-items-center flex-gap-2">
                                      <CircularProgress
                                        sx={{
                                          color: "#ff5e00",
                                        }}
                                      />
                                      Favourite
                                    </a>
                                  </li>
                                ) : (
                                  <li
                                    className="wishlist"
                                    onClick={() => createFavouriteFunc()}
                                  >
                                    <a
                                      className={
                                        favourites &&
                                        favourites.filter(
                                          (fav) =>
                                            fav.ad._id ===
                                            jobSeeker.jobSeeker._id
                                        ).length > 0
                                          ? "favourite-ad-active"
                                          : "favourite-ad"
                                      }
                                    >
                                      <i className="fa fa-heart"></i>
                                      Favourite
                                    </a>
                                  </li>
                                )}

                                <li
                                  className="compare"
                                  onClick={(e) => closeReportModal(e)}
                                >
                                  <a>
                                    <i className="fa fa-exclamation-triangle"></i>
                                    Report
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 skills-description">
                <h2 className="about-title">Description</h2>
                {jobSeeker.loading === true ? (
                  <Skeleton count={5} height="23px" width="90%" />
                ) : (
                  <p>
                    {jobSeeker.jobSeeker &&
                      jobSeeker.jobSeeker.description &&
                      capitalizeFirstLetter(jobSeeker.jobSeeker.description)}
                  </p>
                )}
              </div>
              <div className="col-lg-6 col-md-6">
                <div>
                  <h2 className="about-title">Skills</h2>

                  <div className="job-skill-container">
                    {jobSeeker.loading === true ? (
                      <div className="d-flex align-items-center flex-gap-2">
                        {["a", "b", "c"].map((el, i) => (
                          <Skeleton
                            count={1}
                            borderRadius="20px"
                            width="100px"
                            height="30px"
                            key={el + 1}
                          />
                        ))}
                      </div>
                    ) : (
                      jobSeeker.jobSeeker &&
                      jobSeeker.jobSeeker.skills &&
                      jobSeeker.jobSeeker.skills.map((skill, i) => (
                        <span key={skill + i} className="job-skill">
                          {skill && capitalizeFirstLetter(skill)}
                        </span>
                      ))
                    )}
                  </div>
                </div>
                <div>
                  <h2 className="about-title">Languages</h2>

                  <div className="job-skill-container">
                    {jobSeeker.loading === true ? (
                      <div className="d-flex align-items-center flex-gap-2">
                        {["a", "b", "c"].map((el, i) => (
                          <Skeleton
                            count={1}
                            borderRadius="20px"
                            width="100px"
                            height="30px"
                            key={el + 1}
                          />
                        ))}
                      </div>
                    ) : (
                      jobSeeker.jobSeeker &&
                      jobSeeker.jobSeeker.languages &&
                      jobSeeker.jobSeeker.languages.map((lang, i) => (
                        <span key={lang + i} className="job-skill">
                          {lang && capitalizeFirstLetter(lang)}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobSeekerDetails;
