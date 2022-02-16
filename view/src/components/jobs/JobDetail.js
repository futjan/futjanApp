import React from "react";
import jobSkeleton from "../image/catalog/demo/blog/5.jpg";
const JobDetail = () => {
  return (
    <div className="cextension-simple_blog-article ltr layout-1 loaded">
      <div id="wrapper" className="wrapper-fluid banners-effect-10">
        <div className="container">
          <div className="row" style={{ marginTop: "30px" }}>
            <div id="content" className="col-sm-12">
              <div className="rows form-group">
                <div className="article-info">
                  <div className="entry-wrap">
                    <div className="article-image">
                      <img
                        src={jobSkeleton}
                        alt="Baby Came Back! Missed Out? Grab Your"
                      />
                    </div>
                    <div className="article-sub-title">
                      <span className="article-author hidden">
                        <a href="#">Posted by: Tuandt</a>
                      </span>
                      <span className="article-date pull-left">
                        <b>17</b> Oct
                      </span>
                      <div className="article-comment pull-right">
                        <span>
                          <i className="fa fa-comments"></i>0 Comments
                        </span>
                      </div>
                    </div>
                    <div className="article-title">
                      <h3>Baby Came Back! Missed Out? Grab Your</h3>
                    </div>
                    <div
                      className="article-description"
                      style={{ clear: "both" }}
                    >
                      <p>
                        Morbi tempus, non ullamcorper euismod, erat odio
                        suscipit purus, nec ornare lacus turpis ac purus. Mauris
                        cursus in mi vel dignissim. Morbi mollis elit ipsum, a
                        feugiat lectus gravida non. Aenean molestie justo sed
                        aliquam euismod. Maecenas laoreet bibendum laoreet.
                        Morbi tempor massa sit amet purus lobortis, non porta
                        tellus dignissim. Proin dictum justo a nisl pellentesque
                        egestas.Nulla commodo euismod nisi ac bibendum. Mauris
                        in pellentesque tellus, in cursus magna. Sed volutpat
                        dui bibendum mi molestie, at volutpat nunc dictum. Fusce
                        sagittis massa id eros scelerisque, eget accumsan magna
                        lacinia. Nullam posuere neque at neque dictum interdum
                      </p>
                    </div>
                  </div>
                  <div className="panel panel-default related-comment">
                    <div className="panel-body">
                      <div className="form-group">
                        <div id="comments" className="blog-comment-info">
                          <div id="comment-list">
                            <h5>There are no comments for this blog.</h5>
                          </div>
                          <div id="comment-section"></div>
                          <h2 id="review-title">
                            Leave your comment
                            <i
                              className="fa fa-times-circle fa-lg"
                              id="reply-remove"
                              style={{ display: "none", cursor: "pointer" }}
                              onClick="removeCommentId();"
                            ></i>
                          </h2>
                          <input
                            type="hidden"
                            name="blog_article_reply_id"
                            value="0"
                            id="blog-reply-id"
                          />
                          <div className="form-group contacts-form row">
                            <div className="col-md-6">
                              <b>Name</b>
                              <br />
                              <input
                                type="text"
                                name="name"
                                value=""
                                className="form-control"
                              />
                              <br />
                            </div>
                            <div className="col-md-12">
                              <b>Comment</b>
                              <br />
                              <textarea
                                name="text"
                                className="form-control"
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
                            <a id="button-comment" className="btn btn-info">
                              <span>LEAVE A COMMENT</span>
                            </a>
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
