import React, { useEffect, useState } from "react";
import jobSkeleton from "../image/catalog/demo/blog/5.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getJobById, createComment } from "../actions/jobAction";
import { useParams } from "react-router-dom";
import fileURL from "../../utils/fileURL";
import capitalizeFirstLetter from "../../utils/captilizeFirstLetter";
import profileThumbNail from "../image/profile-thumbnail.png";
import Skeleton from "react-loading-skeleton";
import "../surplusBusiness/skeleton.css";
import "react-loading-skeleton/dist/skeleton.css";
const JobDetail = () => {
  const [comment, setComment] = useState("");

  // initialize hooks
  const { id } = useParams();
  const dispatch = useDispatch();
  // get state from store
  const job = useSelector((state) => state.job);

  // useEffect
  useEffect(() => {
    dispatch(getJobById(id));
  }, []);

  // create comment
  const createCommentFunc = () => {
    dispatch(
      createComment(
        {
          job: job.job._id,
          comment: comment.toLowerCase(),
        },
        clearState
      )
    );
  };

  const clearState = () => {
    setComment("");
  };
  return (
    <div className="cextension-simple_blog-article ltr layout-1 loaded">
      <div id="wrapper" className="wrapper-fluid banners-effect-10">
        <div className="container">
          <div className="row" style={{ marginTop: "30px" }}>
            <div id="content" className="col-sm-12">
              <div className="rows form-group">
                <div className="article-info">
                  <div className="entry-wrap">
                    <div className="article-image" style={{ width: "100%" }}>
                      {job.loading === true ? (
                        <Skeleton
                          count={1}
                          style={{ width: "400px", height: "400px" }}
                        />
                      ) : job.job &&
                        job.job.images &&
                        job.job.images.length > 0 ? (
                        <img
                          src={fileURL(job.job.images[0])}
                          alt="Baby Came Back! Missed Out? Grab Your"
                        />
                      ) : (
                        <img
                          src={jobSkeleton}
                          alt="Baby Came Back! Missed Out? Grab Your"
                        />
                      )}
                    </div>
                    <div className="article-sub-title">
                      <span className="article-author hidden">
                        <a href="#">Posted by: Tuandt</a>
                      </span>
                      <span className="article-date pull-left">
                        {job.loading === true ? (
                          <Skeleton
                            count={1}
                            style={{ width: "120px", height: "15px" }}
                          />
                        ) : (
                          job.job &&
                          job.job.createdAt &&
                          new Date(job.job.createdAt).toDateString()
                        )}
                      </span>
                      <div className="article-comment pull-right">
                        <span>
                          <i className="fa fa-comments"></i>0 Comments
                        </span>
                      </div>
                    </div>
                    <div className="article-title">
                      {job.loading === true ? (
                        <Skeleton
                          count={1}
                          style={{ height: "23px", width: "200px" }}
                        />
                      ) : (
                        <h3>
                          {job.job &&
                            job.job.title &&
                            capitalizeFirstLetter(job.job.title)}
                        </h3>
                      )}
                    </div>

                    <div
                      className="article-description"
                      style={{ clear: "both" }}
                    >
                      {job.loading === true ? (
                        <Skeleton
                          count={5}
                          style={{ height: "23px", width: "90%" }}
                        />
                      ) : (
                        <p>
                          Morbi tempus, non ullamcorper euismod, erat odio
                          suscipit purus, nec ornare lacus turpis ac purus.
                          Mauris cursus in mi vel dignissim. Morbi mollis elit
                          ipsum, a feugiat lectus gravida non. Aenean molestie
                          justo sed aliquam euismod. Maecenas laoreet bibendum
                          laoreet. Morbi tempor massa sit amet purus lobortis,
                          non porta tellus dignissim. Proin dictum justo a nisl
                          pellentesque egestas.Nulla commodo euismod nisi ac
                          bibendum. Mauris in pellentesque tellus, in cursus
                          magna. Sed volutpat dui bibendum mi molestie, at
                          volutpat nunc dictum. Fusce sagittis massa id eros
                          scelerisque, eget accumsan magna lacinia. Nullam
                          posuere neque at neque dictum interdum
                        </p>
                      )}
                    </div>
                    <div>
                      <strong>Job Category : </strong>{" "}
                      {job.loading === true ? (
                        <Skeleton
                          count={1}
                          style={{ width: "150px", height: "15px" }}
                        />
                      ) : (
                        job.job &&
                        job.job.subCategory &&
                        capitalizeFirstLetter(job.job.subCategory)
                      )}
                    </div>
                    <div>
                      <strong>Gender : </strong>{" "}
                      {job.loading === true ? (
                        <Skeleton
                          count={1}
                          style={{ width: "150px", height: "15px" }}
                        />
                      ) : (
                        job.job &&
                        job.job.gender &&
                        capitalizeFirstLetter(job.job.gender)
                      )}
                    </div>
                    <div>
                      <strong>Job Type : </strong>{" "}
                      {job.loading === true ? (
                        <Skeleton
                          count={1}
                          style={{ width: "150px", height: "15px" }}
                        />
                      ) : (
                        job.job &&
                        job.job.type &&
                        capitalizeFirstLetter(job.job.type)
                      )}
                    </div>
                    {job.job &&
                    job.job.minSalary > 0 &&
                    job.job.maxSalary > 0 ? (
                      <div>
                        {" "}
                        <strong>Salary : </strong>{" "}
                        {job.loading === true ? (
                          <Skeleton
                            count={1}
                            style={{ width: "150px", height: "15px" }}
                          />
                        ) : (
                          job.job &&
                          job.job.minSalary - job.job &&
                          job.job.maxSalary / job.job &&
                          job.job.salaryType
                        )}
                      </div>
                    ) : (
                      <div>
                        <strong>Salary : </strong>{" "}
                        {job.loading === true ? (
                          <Skeleton
                            count={1}
                            style={{ width: "150px", height: "15px" }}
                          />
                        ) : (
                          job.job && job.job.salaryType
                        )}
                      </div>
                    )}
                    {job.job && job.job.qualification && (
                      <div>
                        <strong>Qualification : </strong>{" "}
                        {job.loading === true ? (
                          <Skeleton
                            count={1}
                            style={{ width: "150px", height: "15px" }}
                          />
                        ) : (
                          job.job &&
                          job.job.qualification &&
                          capitalizeFirstLetter(job.job.qualification)
                        )}
                      </div>
                    )}

                    {job.job && job.job.experience && (
                      <div>
                        <strong>Experience : </strong>{" "}
                        {job.loading === true ? (
                          <Skeleton
                            count={1}
                            style={{ width: "150px", height: "15px" }}
                          />
                        ) : (
                          job.job &&
                          job.job.experience &&
                          capitalizeFirstLetter(job.job.experience)
                        )}
                      </div>
                    )}
                    {job.job && job.job.email && (
                      <div>
                        <strong>Email : </strong> {job.job && job.job.email}
                      </div>
                    )}
                    {job.job && job.job.contact && (
                      <div>
                        <strong>Contact : </strong> {job.job && job.job.contact}
                      </div>
                    )}
                  </div>
                  <div className="panel panel-default related-comment">
                    <div className="panel-body">
                      <div className="form-group">
                        <div id="comments" className="blog-comment-info">
                          <div id="comment-list">
                            <div id="review" style={{ margin: "30px 0" }}>
                              {job.job &&
                              job.job.comments &&
                              job.job.comments.length > 0 ? (
                                job.job.comments.map((comment) => (
                                  <div
                                    className="row"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      width: "100%",
                                      margin: "30px 0",
                                    }}
                                  >
                                    <div className="col-xs-2 col-sm-1">
                                      <img
                                        src={profileThumbNail}
                                        width={70}
                                        alt="profile"
                                      />
                                    </div>
                                    <div
                                      className="col"
                                      style={{ padding: "0" }}
                                    >
                                      <p style={{ margin: "0" }}>
                                        <strong>
                                          {comment.user && comment.user.name}
                                        </strong>
                                      </p>
                                      <p style={{ margin: "0" }}>
                                        {comment.comment}
                                      </p>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <h5>There are no comments for this blog.</h5>
                              )}
                            </div>
                          </div>
                          <div id="comment-section"></div>
                          <h2 id="review-title">
                            Leave your comment
                            <i
                              className="fa fa-times-circle fa-lg"
                              id="reply-remove"
                              style={{ display: "none", cursor: "pointer" }}
                            ></i>
                          </h2>
                          <input
                            type="hidden"
                            name="blog_article_reply_id"
                            value="0"
                            id="blog-reply-id"
                          />
                          <div className="form-group contacts-form row">
                            <div className="col-md-12">
                              <b>Comment</b>
                              <br />
                              <textarea
                                name="text"
                                className="form-control"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                              ></textarea>
                              <span style={{ fontSize: "11px" }}>
                                Note: HTML is not translated!
                              </span>
                              <br />
                              <br />
                            </div>
                            <div className="col-md-12"></div>
                          </div>
                          <div className="text-left">
                            <div
                              id="button-comment"
                              className="btn btn-info"
                              onClick={() => createCommentFunc()}
                            >
                              <span>LEAVE A COMMENT</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
