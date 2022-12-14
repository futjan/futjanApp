import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getJobSeekers } from "../../actions/jobSeekersAction";
import { useDispatch, useSelector } from "react-redux";

import fileURL from "../../../utils/fileURL";
import capitalizeFirstLetter from "../../../utils/captilizeFirstLetter";
import defaultUser from "../../image/default.jpg";

import Skeleton from "react-loading-skeleton";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const JobSeeker = () => {
  // initialize hooks
  const dispatch = useDispatch();
  // get state from store
  const jobSeeker = useSelector((state) => state.jobSeeker);
  const currency = useSelector((state) => state.currency);
  // useEffect
  useEffect(() => {
    dispatch(getJobSeekers(1, 8, "", "", "", "", "", "", "", ""));
  }, []);
  return (
    <section id="box-link2" className="section-style">
      <div className="container page-builder-ltr mt-4">
        <div className="row row-style row_a2">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_1bi4  col-style block block_5 title_neo2">
            <div className="module so-listing-tabs-ltr default-nav clearfix img-float label-1 home-lt1">
              <div className="form-group clearfix index-jobseeker">
                <Link
                  className="title-category d-flex align-items-center justify-content-between"
                  to="/job-seeker"
                >
                  <span className="mb-1"> Job seeker</span>
                </Link>
              </div>
              <div className="modcontent">
                <div>
                  {jobSeeker.loading === true ? (
                    <div className="d-block overflow-hidden ">
                      {["", "", "", "", "", "", "", ""].map((item, i) => (
                        <div
                          className="col-lg-3 col-md-4 col-sm-4 col-xs-12 p-3 justify-content-center d-flex align-items-center"
                          key={"jobseeker-skeleton" + i}
                        >
                          <Skeleton count={1} width="240px" height="300px" />
                        </div>
                      ))}
                    </div>
                  ) : jobSeeker.jobSeekers.length === 0 ? (
                    <div className="index-page-empty-text">
                      <h5>0 Job Seeker found</h5>
                    </div>
                  ) : null}
                  <div className="products-list grid row number-col-3 so-filter-gird job-seekers">
                    {jobSeeker.jobSeekers.length > 0
                      ? jobSeeker.jobSeekers.map((candidate) => (
                          <div
                            className="product-layout ltabs-item col-lg-3 col-md-4 col-sm-6 col-xs-6"
                            key={candidate._id}
                          >
                            <div className="job-seeker-card">
                              <div className="job-seeker-card-img-container mb-2">
                                {candidate.images ? (
                                  <LazyLoadImage
                                    alt={"user"}
                                    effect="blur"
                                    src={fileURL(candidate.images)}
                                    height="70px"
                                    width="70px"
                                    className="border-round"
                                  />
                                ) : (
                                  <img
                                    src={defaultUser}
                                    alt="user"
                                    width="70"
                                    className="border-round"
                                  />
                                )}
                              </div>
                              <div className="job-seeker-card-name-container d-flex justify-content-center align-items-center flex-dir-col">
                                <p className="job-seeker-card-name">
                                  {candidate.name &&
                                    capitalizeFirstLetter(candidate.name)}
                                </p>
                                <p className="job-seeker-card-jobtitle">
                                  {" "}
                                  {candidate.title &&
                                    capitalizeFirstLetter(candidate.title)}
                                </p>
                              </div>
                              <div className="job-seeker-country-container">
                                <div>
                                  <i className="fa fa-map-marker"></i>
                                  <span>
                                    {candidate.city &&
                                      capitalizeFirstLetter(candidate.city)}
                                  </span>
                                </div>
                                <div>
                                  <i className="fa fa-money"></i>{" "}
                                  <span>
                                    {candidate && currency.symbol}{" "}
                                    {candidate.currency === currency.symbol
                                      ? candidate &&
                                        candidate.rate &&
                                        candidate.rate.toFixed(2)
                                      : (
                                          candidate &&
                                          candidate.rate * currency.rate
                                        ).toFixed(2)}
                                    {/* / {candidate.salaryType} */}
                                  </span>
                                </div>
                              </div>
                              <div className="job-seeker-skills-container">
                                {candidate.skills &&
                                  candidate.skills.map((skill) => (
                                    <span
                                      className="job-seeker-skill-span"
                                      key={skill}
                                    >
                                      {skill && skill.length > 7
                                        ? skill.substring(0, 6) + ".."
                                        : capitalizeFirstLetter(skill)}
                                    </span>
                                  ))}
                              </div>
                              <div className="w-100">
                                <Link
                                  className="job-seeker-view-profile"
                                  to={`/job-seeker-detail/${candidate._id}`}
                                >
                                  view profile
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default React.memo(JobSeeker);
