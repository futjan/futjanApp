import React, { useEffect } from "react";
import { getJobSeekerById, updateViews } from "../actions/jobSeekersAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fileURL from "../../utils/fileURL";
import capitalizeFirstLetter from "../../utils/captilizeFirstLetter";
import defaultUser from "../image/default.jpg";
import Skeleton from "react-loading-skeleton";
import ReportModal from "../modal/ReportModal";
import MessagePopup from "../../utils/MessagePopup";
import "../surplusBusiness/skeleton.css";

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
import { createFavourite } from "../actions/favouriteAction";
import CircularProgress from "@mui/material/CircularProgress";
import {
  setNotification,
  clearNotification,
} from "../actions/notificationAction";
const JobSeekerDetails = () => {
  // initialize hooks
  const dispatch = useDispatch();
  const { id } = useParams();
  // get state from store
  const jobSeeker = useSelector((state) => state.jobSeeker);
  const auth = useSelector((state) => state.auth);
  const favourite = useSelector((state) => state.favourite);
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
  const closeReportModal = (e) => {
    e.preventDefault();
    if (
      document.getElementById("so_sociallogin_3") &&
      e.target !== document.getElementById("block-popup-login")
    ) {
      document.getElementById("so_sociallogin_3").classList.add("in");
      document.getElementById("so_sociallogin_3").classList.add("d-block");
      // document.getElementsByTagName("body")[0].classList.add("modal-open");
    }
  };

  const createFavouriteFunc = () => {
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
  };

  const favourites = useSelector((state) => state.favourite.favourites);

  return (
    <div className="main-container container" style={{ margin: "20px auto" }}>
      {jobSeeker.loading === false ? (
        jobSeeker.jobSeeker &&
        jobSeeker.jobSeeker.user === auth.user.id ? null : (
          <div
            style={{
              position: "fixed",
              bottom: "0",
              right: "50px",
              zIndex: "1200",
            }}
          >
            <MessagePopup
              receiverId={jobSeeker.jobSeeker && jobSeeker.jobSeeker.user}
              title="Chat with Employee"
              adId={jobSeeker.jobSeeker._id}
              adType={`${jobSeeker.jobSeeker.adType}s`}
              image={jobSeeker.jobSeeker.images}
            />
          </div>
        )
      ) : null}

      {/* <div
        style={{
          position: "fixed",
          bottom: "0",
          right: "50px",
          zIndex: "1200",
        }}
      >
        <MessagePopup />
      </div> */}
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
                {jobSeeker.loading === true ? (
                  <Skeleton
                    count={1}
                    style={{
                      width: "232px",
                      height: "232px",
                      borderRadius: "50%",
                    }}
                  />
                ) : jobSeeker.jobSeeker &&
                  jobSeeker.jobSeeker.images &&
                  jobSeeker.jobSeeker.images.length > 0 ? (
                  <img
                    src={fileURL(jobSeeker.jobSeeker.images)}
                    alt="About Us"
                    width={"40%"}
                    style={{ borderRadius: "50%", marginBottom: "20px" }}
                  />
                ) : (
                  <img
                    src={defaultUser}
                    alt="About Us"
                    width={"40%"}
                    style={{ borderRadius: "50%", marginBottom: "25px" }}
                  />
                )}
                {jobSeeker.loading === true ? (
                  <Skeleton
                    count={1}
                    style={{ height: "20px", width: "180px" }}
                  />
                ) : (
                  <h4 style={{ margin: "0" }}>
                    {jobSeeker.jobSeeker &&
                      jobSeeker.jobSeeker.name &&
                      capitalizeFirstLetter(jobSeeker.jobSeeker.name)}
                  </h4>
                )}
                {jobSeeker.loading === true ? (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "150px", marginTop: "8px" }}
                  />
                ) : (
                  <p style={{ margin: "0" }}>
                    {jobSeeker.jobSeeker &&
                      jobSeeker.jobSeeker.title &&
                      capitalizeFirstLetter(jobSeeker.jobSeeker.title)}
                  </p>
                )}
                {jobSeeker.loading === true ? (
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
                    <div>
                      <i
                        className="fa fa-map-marker"
                        style={{ marginRight: "5px" }}
                      ></i>
                      <span>
                        {jobSeeker.jobSeeker &&
                          jobSeeker.jobSeeker.country &&
                          capitalizeFirstLetter(jobSeeker.jobSeeker.country)}
                      </span>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                      <i
                        className="fa fa-money"
                        style={{ marginRight: "5px" }}
                      ></i>{" "}
                      <span>
                        {jobSeeker.jobSeeker && jobSeeker.jobSeeker.currency}{" "}
                        {jobSeeker.jobSeeker && jobSeeker.jobSeeker.rate} /{" "}
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
                      }}
                    >
                      <i
                        className="fa fa-compass"
                        style={{ fontSize: "22px" }}
                      ></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Date Posted</h4>
                      {jobSeeker.loading === true ? (
                        <Skeleton
                          count={1}
                          style={{ height: "18px", width: "150px" }}
                        />
                      ) : (
                        <p style={{ margin: "0" }}>
                          {jobSeeker.jobSeeker &&
                            jobSeeker.jobSeeker.createdAt &&
                            new Date(
                              jobSeeker.jobSeeker.createdAt
                            ).toDateString()}
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
                      }}
                    >
                      <i
                        className="fa fa-money"
                        style={{ fontSize: "22px" }}
                      ></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Salary Type</h4>
                      {jobSeeker.loading === true ? (
                        <Skeleton
                          count={1}
                          style={{ height: "18px", width: "150px" }}
                        />
                      ) : (
                        <p style={{ margin: "0" }}>
                          {jobSeeker.jobSeeker && jobSeeker.jobSeeker.rate
                            ? jobSeeker.jobSeeker &&
                              jobSeeker.jobSeeker.rate + " / "
                            : ""}{" "}
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
                      }}
                    >
                      <i
                        className="fa fa-intersex"
                        style={{ fontSize: "22px" }}
                      ></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Gender</h4>
                      {jobSeeker.loading === true ? (
                        <Skeleton
                          count={1}
                          style={{ height: "18px", width: "150px" }}
                        />
                      ) : (
                        <p style={{ margin: "0" }}>
                          {jobSeeker.jobSeeker &&
                            jobSeeker.jobSeeker.gender &&
                            capitalizeFirstLetter(jobSeeker.jobSeeker.gender)}
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
                      }}
                    >
                      <i
                        className="fa fa-thumb-tack"
                        style={{ fontSize: "22px" }}
                      ></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Location</h4>
                      {jobSeeker.loading === true ? (
                        <Skeleton
                          count={1}
                          style={{ height: "18px", width: "150px" }}
                        />
                      ) : (
                        <p style={{ margin: "0" }}>
                          {jobSeeker.jobSeeker && jobSeeker.jobSeeker.country
                            ? jobSeeker.jobSeeker.country &&
                              capitalizeFirstLetter(jobSeeker.jobSeeker.country)
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
                      }}
                    >
                      <i
                        className="fa fa-phone"
                        style={{ fontSize: "22px" }}
                      ></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Contact</h4>
                      {jobSeeker.loading === true ? (
                        <Skeleton
                          count={1}
                          style={{ height: "18px", width: "150px" }}
                        />
                      ) : (
                        <p style={{ margin: "0" }}>
                          {jobSeeker.jobSeeker && jobSeeker.jobSeeker.contact
                            ? jobSeeker.jobSeeker && jobSeeker.jobSeeker.contact
                            : "-------"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {jobSeeker.loading !== true ? (
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
                          url={`http://www.futjan.com/job-seeker-detail/${jobSeeker.jobSeeker._id}`}
                          // quote={title}
                        >
                          <FacebookIcon size={22} round />
                        </FacebookShareButton>
                      </div>
                      <div>
                        <WhatsappShareButton
                          url={`http://www.futjan.com/job-seeker-detail/${jobSeeker.jobSeeker._id}`}
                          // quote={title}
                        >
                          <WhatsappIcon size={22} round />
                        </WhatsappShareButton>
                      </div>
                      <div>
                        <TwitterShareButton
                          url={`http://www.futjan.com/job-seeker-detail/${jobSeeker.jobSeeker._id}`}
                          // quote={title}
                        >
                          <TwitterIcon size={22} round />
                        </TwitterShareButton>
                      </div>
                      <div>
                        <LinkedinShareButton
                          url={`http://www.futjan.com/job-seeker-detail/${jobSeeker.jobSeeker._id}`}
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
                  <Skeleton
                    count={5}
                    style={{ height: "23px", width: "90%" }}
                  />
                ) : (
                  <p>
                    {jobSeeker.jobSeeker &&
                      jobSeeker.jobSeeker.description &&
                      capitalizeFirstLetter(jobSeeker.jobSeeker.description)}
                  </p>
                )}
                {/* {jobSeeker.jobSeeker && jobSeeker.jobSeeker.description && (
                  
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
                  {jobSeeker.loading === true ? (
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
                  ) : (
                    jobSeeker.jobSeeker &&
                    jobSeeker.jobSeeker.skills &&
                    jobSeeker.jobSeeker.skills.map((skill, i) => (
                      <span
                        key={skill + i}
                        style={{
                          padding: "8px 22px",
                          background: "#f6fafd",
                          borderRadius: "30px",
                        }}
                      >
                        {skill && capitalizeFirstLetter(skill)}
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
  );
};
export default JobSeekerDetails;
