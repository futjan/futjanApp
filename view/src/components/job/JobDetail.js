import React, { useEffect } from "react";
import { getJobById, updateViews } from "../actions/jobAction";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import fileURL from "../../utils/fileURL";
import capitalizeFirstLetter from "../../utils/captilizeFirstLetter";
import defaultUser from "../image/default.jpg";
import Skeleton from "react-loading-skeleton";
import ReportModal from "../modal/ReportModal";
import "../surplusBusiness/skeleton.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { createFavourite } from "../actions/favouriteAction";
import CircularProgress from "@mui/material/CircularProgress";

import {
  setNotification,
  clearNotification,
} from "../actions/notificationAction";

const SocialBtn = React.lazy(() => import("../../utils/SocialBtn"));
const MessagePopup = React.lazy(() => import("../../utils/MessagePopup"));
const JobDetail = () => {
  // initialize hooks
  const dispatch = useDispatch();
  const { id } = useParams();
  // get state from store
  const job = useSelector((state) => state.job);
  const auth = useSelector((state) => state.auth);
  const favourite = useSelector((state) => state.favourite);
  const favourites = useSelector((state) => state.favourite.favourites);
  const currency = useSelector((state) => state.currency);
  // useEffect
  useEffect(() => {
    dispatch(getJobById(id));
  }, []);
  //update view
  useEffect(() => {
    if (job.job && job.job._id) {
      dispatch(
        updateViews({
          id: job.job && job.job._id,
          views: job.job && job.job.views ? job.job && job.job.views + 1 : 1,
        })
      );
    }
  }, [job.job && job.job._id]);
  // close report modal
  const closeReportModal = (e) => {
    e.preventDefault();
    if (
      document.getElementById("so_sociallogin_2") &&
      e.target !== document.getElementById("block-popup-login")
    ) {
      document.getElementById("so_sociallogin_2").classList.add("in");
      document.getElementById("so_sociallogin_2").classList.add("d-block");
    }
  };

  const createFavouriteFunc = React.useCallback(() => {
    if (auth.isAuthenticated === true) {
      const data = {
        adId: job.job && job.job._id,
        model: "jobs",
      };
      dispatch(createFavourite(data));
    } else {
      dispatch(setNotification("Login to add favourite", "error"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  }, []);
  return (
    <div className="main-container container" style={{ margin: "20px auto" }}>
      {job.loading === false ? (
        <div className="message-pop-container">
          <MessagePopup
            receiverId={job.job.user}
            title="Chat with Employer"
            adId={job.job._id}
            adType={`${job.job.adType}s`}
            image={job.job.images && job.job.images[0]}
          />
        </div>
      ) : null}
      <ReportModal
        modalId1="so_sociallogin_2"
        model="jobs"
        id={job && job.job && job.job._id}
        modalId2="cancel-report-btn_2"
      />
      <div className="row" style={{ padding: "10px 20px " }}>
        <div id="content" className="col-sm-12">
          <div className="about-us about-demo-3">
            <div className="row">
              <div className="col-lg-6 col-md-6 about-image flex-dir-col d-flex justify-content-center align-items-center py-4">
                {" "}
                {job.loading === true ? (
                  <Skeleton
                    count={1}
                    className="border-round"
                    height="232px"
                    width="232px"
                  />
                ) : job.job && job.job.images && job.job.images.length > 0 ? (
                  <LazyLoadImage
                    alt={job.job.title}
                    effect="blur"
                    src={fileURL(job.job.images[0])}
                    className="d-flex justify-content-center mb-4 border-round"
                    width="70%"
                  />
                ) : (
                  <img
                    src={defaultUser}
                    alt="About Us"
                    width={"40%"}
                    className="mb-5 border-round"
                  />
                )}
                {job.loading === true ? (
                  <Skeleton count={1} className="about-text-skeleton" />
                ) : (
                  <h4 className="m-0">
                    {job.job &&
                      job.job.title &&
                      capitalizeFirstLetter(job.job.title)}
                  </h4>
                )}
                {job.loading === true ? (
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
                    {job.job && job.job.country && (
                      <div>
                        <i className="fa fa-map-marker ml-1"></i>
                        <span>
                          {job.job &&
                            job.job.country &&
                            capitalizeFirstLetter(job.job.country)}
                        </span>
                      </div>
                    )}
                    <div className="ml-4">
                      <i className="fa fa-money mr-1"></i>{" "}
                      <span>
                        {job.job && job.job.minSalary
                          ? ` ${job.job && currency.symbol} ${
                              job.job.currency === currency.symbol
                                ? job.job.minSalary.toFixed(2)
                                : (job.job.minSalary * currency.rate).toFixed(2)
                            } - ${
                              job.job.currency === currency.symbol
                                ? job.job.maxSalary.toFixed(2)
                                : (job.job.maxSalary * currency.rate).toFixed(2)
                            }`
                          : ""}{" "}
                        / {job.job && job.job.salaryType}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-lg-6 col-md-6 about-info">
                <h2 className="about-title">Job Overview </h2>
                <div className="about-text">
                  <div className="about-text-info">
                    <div className="about-text-icon-container date-posted">
                      <i className="fa fa-compass"></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Date Posted</h4>
                      {job.loading === true ? (
                        <Skeleton count={1} className="about-text-skeleton" />
                      ) : (
                        <p className="m-0">
                          {job.job &&
                            job.job.createdAt &&
                            new Date(job.job.createdAt).toDateString()}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="about-text-info">
                    <div className="about-text-icon-container business-type">
                      <i className="fa fa-briefcase"></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Type</h4>
                      {job.loading === true ? (
                        <Skeleton count={1} className="about-text-skeleton" />
                      ) : (
                        <p className="m-0">
                          {job.job &&
                            job.job.type &&
                            capitalizeFirstLetter(job.job.type)}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="about-text-info">
                    <div className="about-text-icon-container category">
                      <i className="fa fa-money"></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Salary Type</h4>
                      {job.loading === true ? (
                        <Skeleton count={1} className="about-text-skeleton" />
                      ) : (
                        <p className="m-0">
                          {job.job &&
                            job.job.salaryType &&
                            capitalizeFirstLetter(job.job.salaryType)}
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
                      {job.loading === true ? (
                        <Skeleton count={1} className="about-text-skeleton" />
                      ) : (
                        <p className="m-0">
                          {job.job &&
                            job.job.gender &&
                            capitalizeFirstLetter(job.job.gender)}
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
                      {job.loading === true ? (
                        <Skeleton count={1} className="about-text-skeleton" />
                      ) : (
                        <p className="m-0">
                          {job.job && job.job.country
                            ? job.job.country &&
                              capitalizeFirstLetter(job.job.country)
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
                      {job.loading === true ? (
                        <Skeleton count={1} className="about-text-skeleton" />
                      ) : (
                        <p className="m-0">
                          {job.job && job.job.contact
                            ? job.job && job.job.contact
                            : "-------"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {job.loading !== true ? (
                  <>
                    {job && job.job && job.job.user && (
                      <Button
                        variant="outlined"
                        size="large"
                        className="seller-other-ads-btn mb-1"
                        component={Link}
                        to="/user-ads"
                        state={{
                          user: job.job && job.job.user,
                        }}
                      >
                        See seller other Ads
                      </Button>
                    )}
                    <h3 className="m-0">Share on</h3>
                    <SocialBtn type="job-detail" id={job.job._id} />
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
                                          (fav) => fav.ad._id === job.job._id
                                        ).length > 0
                                          ? "favourite-ad-active d-flex justify-content-center align-items-center flex-gap-2"
                                          : "favourite-ad d-flex justify-content-center align-items-center flex-gap-2"
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
                <div>
                  <h2 className="about-title">Description</h2>
                  {job.loading === true ? (
                    <Skeleton count={5} height="23px" width="90%" />
                  ) : (
                    <p>
                      {job.job &&
                        job.job.description &&
                        capitalizeFirstLetter(job.job.description)}
                    </p>
                  )}
                </div>
                <div className="col-lg-6 col-md-6">
                  <h2 className="about-title">Skills</h2>

                  <div className="job-skill-container">
                    {job.loading === true ? (
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
                    ) : job.job &&
                      job.job.skills &&
                      job.job.skills.length > 0 ? (
                      job.job.skills.map((skill, i) => (
                        <span className="job-skill">
                          {skill && capitalizeFirstLetter(skill)}
                        </span>
                      ))
                    ) : (
                      "No option"
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
export default JobDetail;
