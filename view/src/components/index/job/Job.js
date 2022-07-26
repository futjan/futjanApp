import React, { useEffect } from "react";
import { getJobs } from "../../actions/jobAction";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import Ad from "../index utils/Ad";
const Job = () => {
  // initialize hooks
  const dispatch = useDispatch();
  // get state from store
  const job = useSelector((state) => state.job);
  // useEffect
  useEffect(() => {
    dispatch(getJobs(1, 8, "", "", "", "", "", "", "", ""));
  }, []);
  return (
    <section id="box-link2" className="section-style">
      <div className="container page-builder-ltr mt-4">
        <div className="row row-style row_a2">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_1bi4  col-style block block_5 title_neo2">
            <div className="module so-listing-tabs-ltr default-nav clearfix img-float label-1 home-lt1">
              <div className="head-title font-ct">
                <h2 className="modtitle">Job</h2>
              </div>
              <div className="modcontent">
                <div className="products-list">
                  {job.loading === true ? (
                    <div className="d-block overflow-hidden">
                      {["", "", "", "", "", "", "", ""].map((item, i) => (
                        <div
                          className="col-lg-3 col-md-4 col-sm-4 col-xs-12 p-3 d-flex justify-content-center align-items-center"
                          key={"job-skeleton" + i}
                        >
                          <Skeleton count={1} width="240px" height="300px" />
                        </div>
                      ))}
                    </div>
                  ) : job.jobs.length === 0 ? (
                    <div className="index-page-empty-text">
                      <h5>0 Jobs found</h5>
                    </div>
                  ) : null}
                  {job.loading === false && job.jobs.length > 0
                    ? job.jobs.map((job) => (
                        <Ad
                          key={job._id}
                          job={job}
                          type="job"
                          cssStyle="ltabs-item col-lg-3 col-md-4 col-sm-6 col-xs-12"
                        />
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default React.memo(Job);
