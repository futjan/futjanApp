import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import surplusImageSkeleton from "../image/catalog/demo/food/1.jpg";
import { getSurplusById, createReview } from "../actions/surplusAction";
import ReportModal from "../modal/ReportModal";
import profileThumbNail from "../image/profile-thumbnail.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./skeleton.css";

function DetailSurplus() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState();
  const [tab, setTab] = useState("DESCRIPTION");
  const [modal, setModal] = useState(false);
  // initialize hooks
  const params = useParams();
  const dispatch = useDispatch();
  // get state from store
  const surplusFromStore = useSelector((state) => state.surplus);
  const auth = useSelector((state) => state.auth);
  // useEffect
  useEffect(() => {
    dispatch(getSurplusById(params.id));
  }, []);

  // create review
  const createReviewFunc = () => {
    const obj = {
      review,
      rating: rating * 1,
      surplus: surplusFromStore.surplus._id,
    };
    dispatch(createReview(obj, clearState));
  };
  // clear state function
  const clearState = () => {
    setRating();
    setReview("");
  };
  // close report modal
  const closeReportModal = (e) => {
    e.preventDefault();
    if (
      document.getElementById("so_sociallogin") &&
      e.target !== document.getElementById("block-popup-login")
    ) {
      document.getElementById("so_sociallogin").classList.add("in");
      document.getElementById("so_sociallogin").classList.add("d-block");
      // document.getElementsByTagName("body")[0].classList.add("modal-open");
    }
  };
  return (
    <div class="container product-detail" style={{ marginTop: "30px" }}>
      <ReportModal />
      <div class="row">
        <div id="content" class="col-md-12 col-sm-12 col-xs-12">
          <div class="product-view product-detail">
            <div class="product-view-inner clearfix">
              {surplusFromStore.loading === true ? (
                <div className="content-product-left  col-md-5 col-sm-6 col-xs-12">
                  <Skeleton count={1} className="skeleton-card-detail" />
                </div>
              ) : (
                <div class="content-product-left  col-md-5 col-sm-6 col-xs-12">
                  <div class="large-image  class-honizol">
                    <div class="box-label"></div>
                    <img
                      class="product-image-zoom"
                      src={surplusImageSkeleton}
                      data-zoom-image="image/catalog/demo/product/electronic/27.jpg"
                      title="Canada Travel One or Two European Facials at  Studio"
                      alt="Canada Travel One or Two European Facials at  Studio"
                    />
                  </div>
                </div>
              )}

              {surplusFromStore.loading === true ? (
                <div className="content-product-right col-md-7 col-sm-6 col-xs-12">
                  <Skeleton count={1} className="skeleton-p" />
                  <Skeleton count={1} className="skeleton-price-detail" />
                  <br />
                  <Skeleton count={1} className="skeleton-price-detail" />
                  <Skeleton count={1} className="skeleton-price-detail" />

                  <br />
                  <br />
                  <Skeleton count={1} className="skeleton-price-detail" />
                  <Skeleton count={1} className="skeleton-price-detail" />
                  <Skeleton count={1} className="skeleton-price-detail" />
                  <Skeleton count={1} className="skeleton-price-detail" />
                  <Skeleton count={1} className="skeleton-price-detail" />
                </div>
              ) : (
                <div class="content-product-right col-md-7 col-sm-6 col-xs-12">
                  <div class="countdown_box">
                    <div class="countdown_inner">
                      <div class="Countdown-1"></div>
                    </div>
                  </div>
                  <div class="title-product">
                    {surplusFromStore.surplus &&
                      surplusFromStore.surplus.name && (
                        <h1>{surplusFromStore.surplus.name}</h1>
                      )}
                  </div>
                  <div class="box-review">
                    <div class="rating">
                      <div class="rating-box">
                        <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-1x"></i>
                        </span>
                        <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-1x"></i>
                        </span>
                        <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-1x"></i>
                        </span>
                        <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-1x"></i>
                        </span>
                        <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-1x"></i>
                        </span>
                      </div>
                    </div>
                    <a
                      class="reviews_button"
                      href="#review"
                      // onclick="$('a[href=\'#tab-review\']').trigger('click'); return false;"
                    >
                      {surplusFromStore.surplus &&
                        surplusFromStore.surplus.reviews &&
                        surplusFromStore.surplus.reviews.length}{" "}
                      reviews
                    </a>{" "}
                    /{" "}
                    <a
                      class="write_review_button"
                      href="#review"
                      // onclick="$('a[href=\'#tab-review\']').trigger('click'); return false;"
                    >
                      Write a review
                    </a>
                  </div>
                  <div
                    class="product_page_price price"
                    itemscope=""
                    itemtype="http://data-vocabulary.org/Offer"
                  >
                    {surplusFromStore.surplus.originalPrice &&
                    surplusFromStore.surplus.offeredPrice > 0 ? (
                      <span
                        class="price-old"
                        id="price-old"
                        style={{ fontWeight: "100" }}
                      >
                        ₹{surplusFromStore.surplus.originalPrice}
                      </span>
                    ) : null}
                    <span
                      class="price-new"
                      style={{
                        margin: "0 5px",
                        color: "#494949",
                        fontWeight: "100",
                      }}
                    >
                      {surplusFromStore.surplus.originalPrice &&
                      surplusFromStore.surplus.offeredPrice > 0 ? (
                        <span id="price-special">
                          ₹ {surplusFromStore.surplus.offeredPrice}
                        </span>
                      ) : (
                        <span id="price-special">
                          ₹ {surplusFromStore.surplus.originalPrice}
                        </span>
                      )}
                    </span>
                    {"  "}
                    {surplusFromStore.surplus &&
                    surplusFromStore.surplus.discount &&
                    surplusFromStore.surplus.discount > 0 ? (
                      <span id="price-special" style={{ fontWeight: "100" }}>
                        {surplusFromStore.surplus.discount} % OFF
                      </span>
                    ) : null}
                  </div>
                  <div class="product-box-desc">
                    <div class="inner-box-desc">
                      <div class="model">
                        <span>Category: </span>{" "}
                        {surplusFromStore.surplus &&
                          surplusFromStore.surplus.category}
                      </div>
                      <div class="model">
                        <span>Type: </span>{" "}
                        {surplusFromStore.surplus &&
                          surplusFromStore.surplus.businessType}
                      </div>
                      <div class="model">
                        <span>Company: </span>{" "}
                        {surplusFromStore.surplus &&
                          surplusFromStore.surplus.company}
                      </div>

                      <div class="model">
                        <span>City: </span>{" "}
                        {surplusFromStore.surplus &&
                          surplusFromStore.surplus.city}
                      </div>

                      <div class="model">
                        <span>Contact: </span>{" "}
                        {surplusFromStore.surplus &&
                          surplusFromStore.surplus.contact}
                      </div>

                      <div class="model">
                        <span>For Collection/Delivery contact seller </span>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="short_description form-group">
                    <h3>OverView</h3>
                  </div>
                  <div id="product">
                    <div class="box-cart clearfix">
                      <div class="form-group box-info-product">
                        <div class="option quantity">
                          <div class="add-to-links wish_comp">
                            <ul class="blank">
                              <li class="wishlist">
                                <a onclick="wishlist.add(108);">
                                  <i class="fa fa-heart"></i>
                                  Favourite
                                </a>
                              </li>

                              <li
                                class="compare"
                                onClick={(e) => closeReportModal(e)}
                              >
                                <a onclick="compare.add(108);">
                                  <i class="fa fa-exclamation-triangle"></i>
                                  Report
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div class="product-attribute module">
            <div class="row content-product-midde clearfix">
              <div class="col-xs-12">
                <div class="producttab ">
                  <div class="tabsslider  ">
                    <ul class="nav nav-tabs font-sn">
                      <li
                        onClick={() => setTab("DESCRIPTION")}
                        className={tab === "DESCRIPTION" ? "active" : ""}
                      >
                        <div className="tab">Description</div>
                      </li>
                      <li
                        onClick={() => setTab("REVIEW")}
                        className={tab === "REVIEW" ? "active" : ""}
                      >
                        <div className="tab">
                          Review (
                          {surplusFromStore.surplus &&
                            surplusFromStore.surplus.reviews &&
                            surplusFromStore.surplus.reviews.length}
                          )
                        </div>
                      </li>
                    </ul>

                    <div class="tab-content" id="review">
                      <div
                        class={
                          tab === "DESCRIPTION" ? "tab-pane active" : "tab-pane"
                        }
                        id="tab-description"
                      >
                        <div style={{ margin: "30px 0" }}>
                          {surplusFromStore.loading === true ? (
                            <>
                              <Skeleton count={1} className="skeleton-p" />
                              <Skeleton count={1} className="skeleton-p" />
                              <Skeleton count={1} className="skeleton-p" />
                            </>
                          ) : null}

                          {surplusFromStore.surplus &&
                            surplusFromStore.surplus.description && (
                              <p>{surplusFromStore.surplus.description}</p>
                            )}
                        </div>
                      </div>
                      <div
                        class={
                          tab === "REVIEW" ? "tab-pane active" : "tab-pane"
                        }
                        id="tab-review"
                      >
                        <form class="form-horizontal" id="form-review">
                          <div id="review" style={{ margin: "30px 0" }}>
                            {surplusFromStore.surplus &&
                            surplusFromStore.surplus.reviews &&
                            surplusFromStore.surplus.reviews.length > 0 ? (
                              surplusFromStore.surplus.reviews.map((review) => (
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
                                  <div className="col" style={{ padding: "0" }}>
                                    <p style={{ margin: "0" }}>
                                      <strong>
                                        {review.user && review.user.name}
                                      </strong>
                                    </p>
                                    <p style={{ margin: "0" }}>
                                      {review.review}
                                    </p>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <p>There are no reviews for this product.</p>
                            )}
                          </div>
                          {auth.isAuthenticated === true ? (
                            <>
                              <h2>Write a review</h2>
                              <div class="form-group required">
                                <div class="col-sm-12">
                                  <label
                                    class="control-label"
                                    for="input-review"
                                  >
                                    Your Review
                                  </label>
                                  <textarea
                                    name="text"
                                    rows="5"
                                    id="input-review"
                                    class="form-control"
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                  ></textarea>
                                  <div class="help-block">
                                    <span class="text-danger">Note:</span> HTML
                                    is not translated!
                                  </div>
                                </div>
                              </div>
                              <div class="form-group required">
                                <div class="col-sm-12">
                                  <label class="control-label">Rating</label>
                                  &nbsp;&nbsp;&nbsp; Bad&nbsp;
                                  <input
                                    type="radio"
                                    name="rating"
                                    value="1"
                                    onClick={() => setRating(1)}
                                  />
                                  &nbsp;
                                  <input
                                    type="radio"
                                    name="rating"
                                    value="2"
                                    onClick={() => setRating(2)}
                                  />
                                  &nbsp;
                                  <input
                                    type="radio"
                                    name="rating"
                                    value="3"
                                    onClick={() => setRating(3)}
                                  />
                                  &nbsp;
                                  <input
                                    type="radio"
                                    name="rating"
                                    value="4"
                                    onClick={() => setRating(4)}
                                  />
                                  &nbsp;
                                  <input
                                    type="radio"
                                    name="rating"
                                    value="5"
                                    onClick={() => setRating(5)}
                                  />
                                  &nbsp;Good
                                </div>
                              </div>
                              <div
                                class="buttons clearfix"
                                style={{
                                  visibility: "hidden",
                                  display: "block",
                                }}
                              >
                                <div class="pull-right">
                                  <button
                                    type="button"
                                    id="button-review"
                                    data-loading-text="Loading..."
                                    class="btn btn-primary"
                                    onClick={() => createReviewFunc()}
                                  >
                                    Continue
                                  </button>
                                </div>
                              </div>
                            </>
                          ) : null}
                        </form>
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
}
export default DetailSurplus;
