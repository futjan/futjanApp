import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import {
  getSurplusById,
  createReview,
  updateViews,
} from "../actions/surplusAction";

import MessagePopup from "../../utils/MessagePopup";
import "react-multi-carousel/lib/styles.css";
import ReportModal from "../modal/ReportModal";
import profileThumbNail from "../image/profile-thumbnail.png";
import Skeleton from "react-loading-skeleton";
import capitalizeFirstLetter from "../../utils/captilizeFirstLetter";
import { createFavourite } from "../actions/favouriteAction";
import CircularProgress from "@mui/material/CircularProgress";

import {
  setNotification,
  clearNotification,
} from "../actions/notificationAction";
import "./skeleton.css";
const SocialBtn = React.lazy(() => import("../../utils/SocialBtn"));
const SurplusDetailImageSection = React.lazy(() =>
  import("./SurplusDetailImageSection")
);

function DetailSurplus() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState();
  const [tab, setTab] = useState("DESCRIPTION");

  // initialize hooks
  const params = useParams();
  const dispatch = useDispatch();
  // get state from store
  const surplusFromStore = useSelector((state) => state.surplus);
  const auth = useSelector((state) => state.auth);
  const favourite = useSelector((state) => state.favourite);
  const currency = useSelector((state) => state.currency);
  // useEffect
  useEffect(() => {
    dispatch(getSurplusById(params.id));
  }, []);

  // set views
  useEffect(() => {
    if (surplusFromStore.surplus && surplusFromStore.surplus._id) {
      dispatch(
        updateViews({
          id: surplusFromStore.surplus && surplusFromStore.surplus._id,
          views:
            surplusFromStore.surplus && surplusFromStore.surplus.views
              ? surplusFromStore.surplus && surplusFromStore.surplus.views + 1
              : 1,
        })
      );
    }
  }, [surplusFromStore.surplus && surplusFromStore.surplus._id]);
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
      document.getElementById("so_sociallogin_1") &&
      e.target !== document.getElementById("block-popup-login")
    ) {
      document.getElementById("so_sociallogin_1").classList.add("in");
      document.getElementById("so_sociallogin_1").classList.add("d-block");
    }
  };

  const createFavouriteFunc = () => {
    if (auth.isAuthenticated === true) {
      const data = {
        adId: surplusFromStore.surplus && surplusFromStore.surplus._id,
        model: "surplus",
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
    <div className="container product-detail mt-6">
      {surplusFromStore.loading === false ? (
        surplusFromStore.surplus &&
        surplusFromStore.surplus.user === auth.user.id ? null : (
          <div className="message-pop-container ">
            <MessagePopup
              receiverId={
                surplusFromStore.surplus && surplusFromStore.surplus.user
              }
              adId={surplusFromStore.surplus && surplusFromStore.surplus._id}
              adType={
                surplusFromStore.surplus && surplusFromStore.surplus.adType
              }
              image={
                surplusFromStore.surplus.images &&
                surplusFromStore.surplus.images[0]
              }
              title="Chat With Seller"
            />
          </div>
        )
      ) : null}

      <ReportModal
        modalId1="so_sociallogin_1"
        model="surplus"
        id={surplusFromStore.surplus && surplusFromStore.surplus._id}
        modalId2="cancel-report-btn_1"
      />
      <div className="row">
        <div id="content" className="col-md-12 col-sm-12 col-xs-12">
          <div className="product-view product-detail">
            <div className="product-view-inner clearfix">
              {surplusFromStore.loading === true ? (
                <div className="content-product-left  col-md-6 col-sm-6 col-xs-12">
                  <Skeleton count={1} className="skeleton-card-detail" />
                </div>
              ) : (
                <SurplusDetailImageSection />
              )}

              {surplusFromStore.loading === true ? (
                <div className="content-product-right col-md-6 col-sm-6 col-xs-12">
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
                <div className="content-product-right col-md-6 col-sm-6 col-xs-12">
                  <div className="countdown_box">
                    <div className="countdown_inner">
                      <div className="Countdown-1"></div>
                    </div>
                  </div>
                  <div className="title-product">
                    {surplusFromStore.surplus &&
                      surplusFromStore.surplus.title && (
                        <h1>
                          {capitalizeFirstLetter(
                            surplusFromStore.surplus.title
                          )}
                        </h1>
                      )}
                  </div>
                  <div className="box-review">
                    <div className="rating">
                      <div className="rating-box">
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                        </span>
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                        </span>
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                        </span>
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                        </span>
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                        </span>
                      </div>
                    </div>
                    <a className="reviews_button" href="#review">
                      {surplusFromStore.surplus &&
                        surplusFromStore.surplus.reviews &&
                        surplusFromStore.surplus.reviews.length}{" "}
                      reviews
                    </a>{" "}
                    /{" "}
                    <a className="write_review_button" href="#review">
                      Write a review
                    </a>
                  </div>
                  <div className="product_page_price price">
                    {surplusFromStore.surplus.originalPrice &&
                    surplusFromStore.surplus.offeredPrice > 0 ? (
                      <span
                        className="price-old font-weight-lighter "
                        id="price-old"
                      >
                        {currency.symbol}
                        {surplusFromStore.surplus &&
                        surplusFromStore.surplus.currency === currency.symbol
                          ? surplusFromStore.surplus.originalPrice.toFixed(2)
                          : (
                              surplusFromStore.surplus.originalPrice *
                              currency.rate
                            ).toFixed(2)}
                      </span>
                    ) : null}
                    <span
                      className="price-new font-weight-lighter "
                      style={{
                        margin: "0 5px",
                        color: "#494949",
                      }}
                    >
                      {surplusFromStore.surplus.originalPrice &&
                      surplusFromStore.surplus.offeredPrice > 0 ? (
                        <span id="price-special">
                          {currency.symbol}
                          {surplusFromStore.surplus &&
                          surplusFromStore.surplus.currency === currency.symbol
                            ? surplusFromStore.surplus.offeredPrice.toFixed(2)
                            : (
                                surplusFromStore.surplus.offeredPrice *
                                currency.rate
                              ).toFixed(2)}
                        </span>
                      ) : (
                        <span id="price-special">
                          {currency.symbol}
                          {surplusFromStore.surplus &&
                          surplusFromStore.surplus.currency === currency.symbol
                            ? surplusFromStore.surplus.originalPrice.toFixed(2)
                            : (
                                surplusFromStore.surplus.originalPrice *
                                currency.rate
                              ).toFixed(2)}
                        </span>
                      )}
                    </span>
                    {"  "}
                    {surplusFromStore.surplus &&
                    surplusFromStore.surplus.discount &&
                    surplusFromStore.surplus.discount > 0 ? (
                      <span id="price-special" className="font-weight-lighter ">
                        {surplusFromStore.surplus.discount} % OFF
                      </span>
                    ) : null}
                  </div>
                  <div className="about-text">
                    <div className="about-text-info">
                      <div className="about-text-icon-container date-posted">
                        <i className="fa fa-compass"></i>
                      </div>
                      <div>
                        <h4 style={{ margin: "0 0 2px 0" }}>Date Posted</h4>
                        {surplusFromStore.loading === true ? (
                          <Skeleton count={1} className="about-text-skeleton" />
                        ) : (
                          <p className="m-0">
                            {surplusFromStore.surplus &&
                              surplusFromStore.surplus.createdAt &&
                              new Date(
                                surplusFromStore.surplus.createdAt
                              ).toDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="about-text-info">
                      <div className="about-text-icon-container business-type">
                        <i className="fa fa-money"></i>
                      </div>
                      <div>
                        <h4 style={{ margin: "0 0 2px 0" }}>Business Type</h4>
                        {surplusFromStore.loading === true ? (
                          <Skeleton count={1} className="about-text-skeleton" />
                        ) : (
                          <p className="m-0">
                            {surplusFromStore.surplus &&
                              surplusFromStore.surplus.businessType &&
                              capitalizeFirstLetter(
                                surplusFromStore.surplus.businessType
                              )}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="about-text-info">
                      <div className="about-text-icon-container category">
                        <i className="fa fa-th-large"></i>
                      </div>
                      <div>
                        <h4 style={{ margin: "0 0 2px 0" }}>Category</h4>
                        {surplusFromStore.loading === true ? (
                          <Skeleton count={1} className="about-text-skeleton" />
                        ) : (
                          <p className="m-0">
                            {surplusFromStore.surplus &&
                              surplusFromStore.surplus.category &&
                              capitalizeFirstLetter(
                                surplusFromStore.surplus.category
                              )}
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
                        {surplusFromStore.loading === true ? (
                          <Skeleton count={1} className="about-text-skeleton" />
                        ) : (
                          <p className="m-0">
                            {surplusFromStore.surplus &&
                            surplusFromStore.surplus.city
                              ? surplusFromStore.surplus.city &&
                                capitalizeFirstLetter(
                                  surplusFromStore.surplus.city
                                )
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
                        {surplusFromStore.loading === true ? (
                          <Skeleton count={1} className="about-text-skeleton" />
                        ) : (
                          <p className="m-0">
                            {surplusFromStore.surplus &&
                            surplusFromStore.surplus.contact
                              ? surplusFromStore.surplus &&
                                surplusFromStore.surplus.contact
                              : "-------"}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {surplusFromStore &&
                    surplusFromStore.surplus &&
                    surplusFromStore.surplus.user && (
                      <Button
                        variant="outlined"
                        size="large"
                        className="seller-other-ads-btn mb-1"
                        component={Link}
                        to="/user-ads"
                        state={{
                          user:
                            surplusFromStore.surplus &&
                            surplusFromStore.surplus.user,
                        }}
                      >
                        See seller other Ads
                      </Button>
                    )}

                  <h3 className="mt-2">Share on</h3>
                  <SocialBtn
                    type="surplus-detail"
                    id={surplusFromStore.surplus._id}
                  />
                  <div id="product">
                    <div className="box-cart clearfix m-0">
                      <div className="form-group box-info-product">
                        <div className="option quantity">
                          <div className="add-to-links wish_comp">
                            <ul className="blank d-flex">
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
                                        (fav) =>
                                          fav.ad._id ===
                                          surplusFromStore.surplus._id
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
                                <a className="favourite-ad">
                                  <i className="fa fa-exclamation-triangle"></i>
                                  Report
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="product-attribute module">
            <div className="row content-product-midde clearfix">
              <div className="col-xs-12">
                <div className="producttab ">
                  <div className="tabsslider  ">
                    <ul className="nav nav-tabs font-sn">
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

                    <div className="tab-content" id="review">
                      <div
                        className={
                          tab === "DESCRIPTION" ? "tab-pane active" : "tab-pane"
                        }
                        id="tab-description"
                      >
                        <div className="my-6">
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
                        className={
                          tab === "REVIEW" ? "tab-pane active" : "tab-pane"
                        }
                        id="tab-review"
                      >
                        <form className="form-horizontal" id="form-review">
                          <div id="review" className="my-6">
                            {surplusFromStore.surplus &&
                            surplusFromStore.surplus.reviews &&
                            surplusFromStore.surplus.reviews.length > 0 ? (
                              surplusFromStore.surplus.reviews.map((review) => (
                                <div className="row d-flex align-items-center w-100 my-6">
                                  <div className="col-xs-2 col-sm-1">
                                    <img
                                      src={profileThumbNail}
                                      width={70}
                                      alt="profile"
                                    />
                                  </div>
                                  <div className="col p-0">
                                    <p className="m-0">
                                      <strong>
                                        {review.user && review.user.title}
                                      </strong>
                                    </p>
                                    <p className="m-0">{review.review}</p>
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
                              <div className="form-group required">
                                <div className="col-sm-12">
                                  <label
                                    className="control-label"
                                    htmlFor="input-review"
                                  >
                                    Your Review
                                  </label>
                                  <textarea
                                    name="text"
                                    rows="5"
                                    id="input-review"
                                    className="form-control"
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                  ></textarea>
                                  {/* <div className="help-block">
                                    <span className="text-danger">Note:</span>{" "}
                                    HTML is not translated!
                                  </div> */}
                                </div>
                              </div>
                              <div className="form-group required">
                                <div className="col-sm-12">
                                  <label className="control-label">
                                    Rating
                                  </label>
                                  &nbsp;&nbsp;&nbsp; Bad&nbsp;
                                  {[1, 2, 3, 4, 5].map((el) => (
                                    <>
                                      <input
                                        type="radio"
                                        name="rating"
                                        defaultValue={el}
                                        onClick={() => setRating(el)}
                                      />
                                      &nbsp;
                                    </>
                                  ))}
                                  &nbsp;Good
                                </div>
                              </div>
                              <div className="buttons clearfix d-block v-hidden">
                                <div className="pull-right">
                                  <button
                                    type="button"
                                    id="button-review"
                                    data-loading-text="Loading..."
                                    className="btn btn-primary"
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
export default React.memo(DetailSurplus);
