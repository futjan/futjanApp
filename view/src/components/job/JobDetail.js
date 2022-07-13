import React, { useEffect } from "react";
import { getJobById, updateViews } from "../actions/jobAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fileURL from "../../utils/fileURL";
import capitalizeFirstLetter from "../../utils/captilizeFirstLetter";
import defaultUser from "../image/default.jpg";
import Skeleton from "react-loading-skeleton";
import ReportModal from "../modal/ReportModal";
import MessagePopup from "../../utils/MessagePopup";
import "../surplusBusiness/skeleton.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { createFavourite } from "../actions/favouriteAction";
import CircularProgress from "@mui/material/CircularProgress";
import {
  setNotification,
  clearNotification,
} from "../actions/notificationAction";

import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterIcon,
  TwitterShareButton,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const JobDetail = () => {
  // initialize hooks
  const dispatch = useDispatch();
  const { id } = useParams();
  // get state from store
  const job = useSelector((state) => state.job);
  const auth = useSelector((state) => state.auth);
  const favourite = useSelector((state) => state.favourite);
  const favourites = useSelector((state) => state.favourite.favourites);
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
      // document.getElementsByTagName("body")[0].classList.add("modal-open");
    }
  };

  const createFavouriteFunc = () => {
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
  };
  return (
    <div className="main-container container" style={{ margin: "20px auto" }}>
      {job.loading === false ? (
        <div
          style={{
            position: "fixed",
            bottom: "0",
            right: "50px",
            zIndex: "1200",
          }}
        >
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
              <div
                className="col-lg-6 col-md-6 about-image"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "20px 0",
                }}
              >
                {" "}
                {job.loading === true ? (
                  <Skeleton
                    count={1}
                    style={{
                      width: "232px",
                      height: "232px",
                      borderRadius: "50%",
                    }}
                  />
                ) : job.job && job.job.images && job.job.images.length > 0 ? (
                  // <img

                  //   alt="About Us"
                  //   width={"40%"}

                  // />
                  <LazyLoadImage
                    alt={job.job.title}
                    effect="blur"
                    src={fileURL(job.job.images[0])}
                    style={{
                      borderRadius: "50%",
                      marginBottom: "20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    width="70%"
                  />
                ) : (
                  <img
                    src={defaultUser}
                    alt="About Us"
                    width={"40%"}
                    style={{ borderRadius: "50%", marginBottom: "25px" }}
                  />
                )}
                {job.loading === true ? (
                  <Skeleton
                    count={1}
                    style={{ height: "20px", width: "180px" }}
                  />
                ) : (
                  <h4 style={{ margin: "0" }}>
                    {job.job &&
                      job.job.title &&
                      capitalizeFirstLetter(job.job.title)}
                  </h4>
                )}
                {/* {job.loading === true ? (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "150px", marginTop: "8px" }}
                  />
                ) : (
                  <p style={{ margin: "0" }}>
                    {job.job &&
                      job.job.title &&
                      capitalizeFirstLetter(job.job.title)}
                  </p>
                )} */}
                {job.loading === true ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",

                      gap: "10px",
                    }}
                  >
                    <Skeleton
                      count={1}
                      style={{ height: "18px", width: "100px" }}
                    />
                    <Skeleton
                      count={1}
                      style={{ height: "18px", width: "100px" }}
                    />
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
                        <i
                          className="fa fa-map-marker"
                          style={{ marginRight: "5px" }}
                        ></i>
                        <span>
                          {job.job &&
                            job.job.country &&
                            capitalizeFirstLetter(job.job.country)}
                        </span>
                      </div>
                    )}
                    {/* <div>
                      <i
                        className="fa fa-map-marker"
                        style={{ marginRight: "5px" }}
                      ></i>
                      <span>
                        {job.job &&
                          job.job.country &&
                          capitalizeFirstLetter(job.job.country)}
                      </span>
                    </div> */}
                    <div style={{ marginLeft: "20px" }}>
                      <i
                        className="fa fa-money"
                        style={{ marginRight: "5px" }}
                      ></i>{" "}
                      <span>
                        {job.job && job.job.minSalary
                          ? `${job && job.currency} ${job.job.minSalary} - ${
                              job.job.maxSalary
                            }`
                          : ""}{" "}
                        / {job.job && job.job.salaryType}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-lg-6 col-md-6 about-info">
                <h2 className="about-title">
                  Job Overview{" "}
                  {/* {job.job &&
                    job.job.name &&
                    capitalizeFirstLetter(job.job.name)} */}
                </h2>
                <div className="about-text">
                  <div
                    style={{
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      style={{
                        background: "rgb(255 187 0 / 20%)",
                        padding: "15px 18px",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "55px",
                        height: "55px",
                      }}
                    >
                      <i
                        className="fa fa-compass"
                        style={{ fontSize: "22px" }}
                      ></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Date Posted</h4>
                      {job.loading === true ? (
                        <Skeleton
                          count={1}
                          style={{ height: "18px", width: "150px" }}
                        />
                      ) : (
                        <p style={{ margin: "0" }}>
                          {job.job &&
                            job.job.createdAt &&
                            new Date(job.job.createdAt).toDateString()}
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      style={{
                        background: "rgb(255 0 122 / 20%)",
                        padding: "15px 18px",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "55px",
                        height: "55px",
                      }}
                    >
                      <i
                        className="fa fa-briefcase"
                        style={{ fontSize: "22px" }}
                      ></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Type</h4>
                      {job.loading === true ? (
                        <Skeleton
                          count={1}
                          style={{ height: "18px", width: "150px" }}
                        />
                      ) : (
                        <p style={{ margin: "0" }}>
                          {job.job &&
                            job.job.type &&
                            capitalizeFirstLetter(job.job.type)}
                        </p>
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      style={{
                        background: "rgb(103 135 254 / 20%)",
                        padding: "15px 18px",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "55px",
                        height: "55px",
                      }}
                    >
                      <i
                        className="fa fa-money"
                        style={{ fontSize: "22px" }}
                      ></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Salary Type</h4>
                      {job.loading === true ? (
                        <Skeleton
                          count={1}
                          style={{ height: "18px", width: "150px" }}
                        />
                      ) : (
                        <p style={{ margin: "0" }}>
                          {job.job &&
                            job.job.salaryType &&
                            capitalizeFirstLetter(job.job.salaryType)}
                        </p>
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      style={{
                        background: "rgb(255, 231, 217)",
                        padding: "15px 18px",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "55px",
                        height: "55px",
                      }}
                    >
                      <i
                        className="fa fa-intersex"
                        style={{ fontSize: "22px" }}
                      ></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Gender</h4>
                      {job.loading === true ? (
                        <Skeleton
                          count={1}
                          style={{ height: "18px", width: "150px" }}
                        />
                      ) : (
                        <p style={{ margin: "0" }}>
                          {job.job &&
                            job.job.gender &&
                            capitalizeFirstLetter(job.job.gender)}
                        </p>
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      style={{
                        background: "rgb(208, 242, 255)",
                        padding: "15px 18px",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "55px",
                        height: "55px",
                      }}
                    >
                      <i
                        className="fa fa-thumb-tack"
                        style={{ fontSize: "22px" }}
                      ></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Location</h4>
                      {job.loading === true ? (
                        <Skeleton
                          count={1}
                          style={{ height: "18px", width: "150px" }}
                        />
                      ) : (
                        <p style={{ margin: "0" }}>
                          {job.job && job.job.country
                            ? job.job.country &&
                              capitalizeFirstLetter(job.job.country)
                            : "-------"}
                        </p>
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      style={{
                        background: "rgb(103 135 254 / 20%)",
                        padding: "15px 18px",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "55px",
                        height: "55px",
                      }}
                    >
                      <i
                        className="fa fa-phone"
                        style={{ fontSize: "22px" }}
                      ></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Contact</h4>
                      {job.loading === true ? (
                        <Skeleton
                          count={1}
                          style={{ height: "18px", width: "150px" }}
                        />
                      ) : (
                        <p style={{ margin: "0" }}>
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
                    <h3 style={{ margin: "0" }}>Share on</h3>

                    <div
                      className="socials"
                      style={{
                        marginTop: "8px",
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                      }}
                    >
                      <div>
                        <FacebookShareButton
                          url={`http://www.futjan.com/job-detail/${job.job._id}`}
                          // quote={title}
                        >
                          <FacebookIcon size={22} round />
                        </FacebookShareButton>
                      </div>
                      <div>
                        <WhatsappShareButton
                          url={`http://www.futjan.com/job-detail/${job.job._id}`}
                          // quote={title}
                        >
                          <WhatsappIcon size={22} round />
                        </WhatsappShareButton>
                      </div>
                      <div>
                        <TwitterShareButton
                          url={`http://www.futjan.com/job-detail/${job.job._id}`}
                          // quote={title}
                        >
                          <TwitterIcon size={22} round />
                        </TwitterShareButton>
                      </div>
                      <div>
                        <LinkedinShareButton
                          url={`http://www.futjan.com/job-detail/${job.job._id}`}
                          // quote={title}
                        >
                          <LinkedinIcon size={22} round />
                        </LinkedinShareButton>
                      </div>
                    </div>

                    <div id="product">
                      <div
                        className="box-cart clearfix"
                        style={{ margin: "0" }}
                      >
                        <div className="form-group box-info-product">
                          <div className="option quantity">
                            <div className="add-to-links wish_comp">
                              <ul className="blank">
                                {favourite.loading === true ? (
                                  <li className="wishlist ">
                                    <a
                                      style={{
                                        display: "flex",
                                        gap: "10px",
                                        justifyContent: "center",
                                        alignItems: "center",
                                      }}
                                    >
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
                                          ? "favourite-ad-active"
                                          : "favourite-ad"
                                      }
                                      style={{
                                        display: "flex",
                                        gap: "10px",
                                        justifyContent: "center",
                                        alignItems: "center",
                                      }}
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
                {job.loading === true ? (
                  <Skeleton
                    count={5}
                    style={{ height: "23px", width: "90%" }}
                  />
                ) : (
                  <p>
                    {job.job &&
                      job.job.description &&
                      capitalizeFirstLetter(job.job.description)}
                  </p>
                )}
                {/* {job.job && job.job.description && (
                  
                )} */}
              </div>
              <div className="col-lg-6 col-md-6">
                <h2 className="about-title">Skills</h2>

                <div
                  style={{
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    fontSize: "16px",
                    color: "rgb(133, 133, 133)",
                    gap: "10px",
                  }}
                >
                  {job.loading === true ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Skeleton
                        count={1}
                        style={{
                          height: "30px",
                          width: "100px",
                          borderRadius: "20px",
                        }}
                      />
                      <Skeleton
                        count={1}
                        style={{
                          height: "30px",
                          width: "120px",
                          borderRadius: "20px",
                        }}
                      />
                      <Skeleton
                        count={1}
                        style={{
                          height: "30px",
                          width: "120px",
                          borderRadius: "20px",
                        }}
                      />
                    </div>
                  ) : job.job && job.job.skills && job.job.skills.length > 0 ? (
                    job.job.skills.map((skill, i) => (
                      <span
                        style={{
                          padding: "8px 22px",
                          background: "#f6fafd",
                          borderRadius: "30px",
                        }}
                      >
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
  );
};
export default JobDetail;
