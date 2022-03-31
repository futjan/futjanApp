import React, { useEffect } from "react";
// import spa1 from "../../image/catalog/demo/product/spa/5-270x270.jpg";
import { Link } from "react-router-dom";
import { getJobs } from "../../actions/jobAction";
import { useDispatch, useSelector } from "react-redux";
import fileURL from "../../../utils/fileURL";
import capitalizeFirstLetter from "../../../utils/captilizeFirstLetter";
const Job = () => {
  // initialize hooks
  const dispatch = useDispatch();
  // get state from store
  const job = useSelector((state) => state.job);
  // useEffect
  useEffect(() => {
    dispatch(
      getJobs(
        1,
        8,
        "",
        "",
        "",
        // keyword.toLowerCase(),
        "",
        "",
        "",
        ""
      )
    );
  }, []);

  console.log(job);
  return (
    <section id="box-link2" className="section-style">
      <div className="container page-builder-ltr" style={{ marginTop: "20px" }}>
        <div className="row row-style row_a2">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_1bi4  col-style block block_5 title_neo2">
            <div className="module so-listing-tabs-ltr default-nav clearfix img-float label-1 home-lt1">
              <div className="head-title font-ct">
                <h2 className="modtitle">Job</h2>
              </div>
              <div className="modcontent">
                <div>
                  {job.jobs.length > 0
                    ? job.jobs.map((job) => (
                        <div className="ltabs-item col-lg-3 col-md-4 col-sm-4 col-xs-12">
                          <div className="item-inner product-layout transition product-grid">
                            <div className="product-item-container">
                              <div className="left-block">
                                <div className="image product-image-container ">
                                  <Link
                                    to={`/job-detail/${job._id}`}
                                    title="Lorem Ipsum dolor at vero eos et iusto odi  with Premium "
                                  >
                                    <img
                                      src={fileURL(job.images && job.images[0])}
                                      alt={job.title}
                                    />
                                  </Link>
                                </div>
                              </div>
                              <div className="right-block">
                                <div className="caption">
                                  <h4>
                                    <Link to={`/job-detail/${job._id}`}>
                                      {job.title && job.title.length > 50
                                        ? capitalizeFirstLetter(
                                            job.title.substring(0, 50) + "..."
                                          )
                                        : job.title &&
                                          capitalizeFirstLetter(job.title)}
                                    </Link>
                                  </h4>
                                  <div>
                                    <i className="fa fa-briefcase"></i>
                                    <small>
                                      {job.subCategory &&
                                        capitalizeFirstLetter(job.subCategory)}
                                    </small>
                                  </div>
                                  <div>
                                    <i className="fa fa-money"></i>
                                    <small>
                                      {job.minSalary > 0 && job.maxSalary > 0
                                        ? job.minSalary +
                                          " - " +
                                          job.maxSalary +
                                          " / " +
                                          job.salaryType
                                        : job.salaryType}
                                    </small>
                                  </div>

                                  <div
                                    className="clearfix"
                                    style={{ minHeight: "35px" }}
                                  >
                                    <span className="job-type-span">
                                      {job.type &&
                                        capitalizeFirstLetter(job.type)}
                                    </span>
                                  </div>
                                </div>
                              </div>
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
    </section>
  );
};
export default React.memo(Job);
