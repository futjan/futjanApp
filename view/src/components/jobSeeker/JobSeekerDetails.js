import React, { useEffect } from "react";
import user12 from "../image/user-12.jpg";
import { getJobSeekerById } from "../actions/jobSeekersAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fileURL from "../../utils/fileURL";
import capitalizeFirstLetter from "../../utils/captilizeFirstLetter";
import defaultUser from "../image/default.jpg";

const JobSeekerDetails = () => {
  // initialize hooks
  const dispatch = useDispatch();
  const { id } = useParams();
  // get state from store
  const jobSeeker = useSelector((state) => state.jobSeeker);
  // useEffect
  useEffect(() => {
    dispatch(getJobSeekerById(id));
  }, []);
  return (
    <div class="main-container container" style={{ margin: "20px auto" }}>
      <div class="row" style={{ padding: "10px 20px " }}>
        <div id="content" class="col-sm-12">
          <div class="about-us about-demo-3">
            <div class="row">
              <div
                class="col-lg-6 col-md-6 about-image"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "20px 0",
                }}
              >
                {" "}
                {jobSeeker.jobSeeker &&
                jobSeeker.jobSeeker.photo &&
                jobSeeker.jobSeeker.photo.length > 0 ? (
                  <img
                    src={fileURL(jobSeeker.jobSeeker.photo)}
                    alt="About Us"
                    width={"40%"}
                    style={{ borderRadius: "50%", marginBottom: "20px" }}
                  />
                ) : (
                  <img
                    src={defaultUser}
                    alt="About Us"
                    width={"40%"}
                    style={{ borderRadius: "50%", marginBottom: "20px" }}
                  />
                )}
                <h4 style={{ margin: "0" }}>
                  {jobSeeker.jobSeeker &&
                    jobSeeker.jobSeeker.name &&
                    capitalizeFirstLetter(jobSeeker.jobSeeker.name)}
                </h4>
                <p style={{ margin: "0" }}>
                  {jobSeeker.jobSeeker &&
                    jobSeeker.jobSeeker.jobTitle &&
                    capitalizeFirstLetter(jobSeeker.jobSeeker.jobTitle)}
                </p>
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
                      {jobSeeker.jobSeeker && jobSeeker.jobSeeker.rate} /{" "}
                      {jobSeeker.jobSeeker && jobSeeker.jobSeeker.salaryType}
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 about-info">
                <h2 class="about-title">
                  About{" "}
                  {jobSeeker.jobSeeker &&
                    jobSeeker.jobSeeker.name &&
                    capitalizeFirstLetter(jobSeeker.jobSeeker.name)}
                </h2>
                <div class="about-text">
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
                        className="fa fa-intersex"
                        style={{ fontSize: "22px" }}
                      ></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Gender</h4>
                      <p style={{ margin: "0" }}>
                        {jobSeeker.jobSeeker &&
                          jobSeeker.jobSeeker.gender &&
                          capitalizeFirstLetter(jobSeeker.jobSeeker.gender)}
                      </p>
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
                        background: "rgb(255 187 0 / 20%)",
                        padding: "15px 18px",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <i class="fa fa-compass" style={{ fontSize: "22px" }}></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Location</h4>
                      <p style={{ margin: "0" }}>
                        {jobSeeker.jobSeeker &&
                          jobSeeker.jobSeeker.country &&
                          capitalizeFirstLetter(jobSeeker.jobSeeker.country)}
                      </p>
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
                      }}
                    >
                      <i
                        class="fa fa-language"
                        style={{ fontSize: "22px" }}
                      ></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Languages</h4>
                      <p style={{ margin: "0" }}>English</p>
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
                      <i class="fa fa-phone" style={{ fontSize: "22px" }}></i>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0" }}>Contact</h4>
                      <p style={{ margin: "0" }}>
                        {jobSeeker.jobSeeker && jobSeeker.jobSeeker.contact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 skills-description">
                <h2 class="about-title">Description</h2>

                {jobSeeker.jobSeeker && jobSeeker.jobSeeker.description && (
                  <p>
                    {jobSeeker.jobSeeker &&
                      jobSeeker.jobSeeker.description &&
                      capitalizeFirstLetter(jobSeeker.jobSeeker.description)}
                  </p>
                )}
              </div>
              <div class="col-lg-6 col-md-6">
                <h2 class="about-title">Skills</h2>

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
                  {jobSeeker.jobSeeker &&
                    jobSeeker.jobSeeker.skills &&
                    jobSeeker.jobSeeker.skills.map((skill, i) => (
                      <span
                        style={{
                          padding: "8px 22px",
                          background: "#f6fafd",
                          borderRadius: "30px",
                        }}
                      >
                        {skill && capitalizeFirstLetter(skill)}
                      </span>
                    ))}
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
