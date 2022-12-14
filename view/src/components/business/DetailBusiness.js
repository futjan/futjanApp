import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "@mui/material/Button";
import {
  getBusinessById,
  updateViews,
  createReview,
} from "../actions/businessAction";
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
import Carousel from "react-multi-carousel";
import MessagePopup from "../../utils/MessagePopup";
import "react-multi-carousel/lib/styles.css";
import ReportModal from "../modal/ReportModal";
import profileThumbNail from "../image/profile-thumbnail.png";
import fileURL from "../../utils/fileURL";
import Skeleton from "react-loading-skeleton";
import capitalizeFirstLetter from "../../utils/captilizeFirstLetter";
import { createFavourite } from "../actions/favouriteAction";
import CircularProgress from "@mui/material/CircularProgress";
import {
  setNotification,
  clearNotification,
} from "../actions/notificationAction";
import "../surplusBusiness/skeleton.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

function DetailBusiness() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState();
  const [tab, setTab] = useState("DESCRIPTION");
  const [zoomModal, setZoomModal] = useState(false);
  const [zoomImage, setZoomImage] = useState("");
  const [activeImage, setActiveImage] = useState(0);
  const [mapAndImage, setMapAndImage] = useState("image");
  // initialize hooks
  const params = useParams();
  const dispatch = useDispatch();
  // get state from store
  const businessFromStore = useSelector((state) => state.business);
  const auth = useSelector((state) => state.auth);
  const favourite = useSelector((state) => state.favourite);
  const currency = useSelector((state) => state.currency);
  // useEffect
  useEffect(() => {
    dispatch(getBusinessById(params.id));
  }, []);

  // set views
  useEffect(() => {
    if (businessFromStore.business && businessFromStore.business._id) {
      dispatch(
        updateViews({
          id: businessFromStore.business && businessFromStore.business._id,
          views:
            businessFromStore.business && businessFromStore.business.views
              ? businessFromStore.business &&
                businessFromStore.business.views + 1
              : 1,
        })
      );
    }
  }, [businessFromStore.business && businessFromStore.business._id]);
  // create review
  const createReviewFunc = () => {
    const obj = {
      review,
      rating: rating * 1,
      business: businessFromStore.business._id,
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
      // document.getElementsByTagName("body")[0].classList.add("modal-open");
    }
  };

  const createFavouriteFunc = () => {
    if (auth.isAuthenticated === true) {
      const data = {
        adId: businessFromStore.business && businessFromStore.business._id,
        model: "business",
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
    <div className="container product-detail" style={{ marginTop: "30px" }}>
      {businessFromStore.loading === false ? (
        businessFromStore.business &&
        businessFromStore.business.user === auth.user.id ? null : (
          <div
            style={{
              position: "fixed",
              bottom: "0",
              right: "50px",
              zIndex: "1200",
            }}
          >
            <MessagePopup
              receiverId={
                businessFromStore.business && businessFromStore.business.user
              }
              adId={
                businessFromStore.business && businessFromStore.business._id
              }
              adType={
                businessFromStore.business && businessFromStore.business.adType
              }
              image={
                businessFromStore.business.images &&
                businessFromStore.business.images[0]
              }
              title="Chat With Seller"
            />
          </div>
        )
      ) : null}

      <ReportModal
        modalId1="so_sociallogin_1"
        model="surplus"
        id={businessFromStore.business && businessFromStore.business._id}
        modalId2="cancel-report-btn_1"
      />
      <div className="row">
        <div id="content" className="col-md-12 col-sm-12 col-xs-12">
          <div className="product-view product-detail">
            <div className="product-view-inner clearfix">
              {businessFromStore.loading === true ? (
                <div className="content-product-left  col-md-6 col-sm-6 col-xs-12">
                  <Skeleton count={1} className="skeleton-card-detail" />
                </div>
              ) : (
                <div className="content-product-left  col-md-6 col-sm-6 col-xs-12">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        flex: 1,
                        padding: "10px",
                        background:
                          mapAndImage === "image" ? "#fafafa" : "#fff",
                        border: "1px solid #f5f5f5",
                        borderBottom: "none",
                        borderRight: "none",
                        color: "#666",
                        cursor: "pointer",
                      }}
                      onClick={() => setMapAndImage("image")}
                    >
                      Image
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        flex: 1,
                        padding: "10px",
                        background: mapAndImage === "map" ? "#fafafa" : "#fff",
                        border: "1px solid #f5f5f5",
                        borderBottom: "none",
                        color: "#666",
                        cursor: "pointer",
                      }}
                      onClick={() => setMapAndImage("map")}
                    >
                      Map
                    </div>
                  </div>
                  <div
                    className="large-image  class-honizol"
                    style={{
                      padding: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {mapAndImage === "image" ? (
                      <>
                        <LazyLoadImage
                          effect="blur"
                          className="product-image-zoom"
                          src={fileURL(
                            businessFromStore.business.images &&
                              businessFromStore.business.images[activeImage]
                          )}
                          title={
                            businessFromStore.business &&
                            businessFromStore.business.title
                          }
                          alt={
                            businessFromStore.business &&
                            businessFromStore.business.title
                          }
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: "5px",
                            right: "5px",
                            padding: "3px 25px",
                            cursor: "pointer",
                            borderRadius: "3px",
                            background: "rgba(0,0,0,0.6)",
                          }}
                          onClick={() => {
                            setZoomImage(
                              businessFromStore.business.images[activeImage]
                            );
                            setZoomModal(true);
                          }}
                        >
                          <i
                            className="fa fa-search-plus"
                            style={{ color: "#fff", fontSize: "18px" }}
                          ></i>
                        </div>
                      </>
                    ) : (
                      <>
                        <iframe
                          src="https://www.google.com/maps/d/embed?mid=1DfFcv3jAM8NAeioBjW_CHwtKL3A&ehbc=2E312F"
                          width="100%"
                          height="500"
                        ></iframe>
                      </>
                    )}
                  </div>
                  {mapAndImage === "image" ? (
                    <div
                      id="thumb-slider"
                      className="full_slider category-slider-inner products-list yt-content-slider"
                    >
                      {businessFromStore.business &&
                        businessFromStore.business.images && (
                          <Carousel responsive={responsive}>
                            {businessFromStore.business.images &&
                              businessFromStore.business.images.map(
                                (image, i) => (
                                  <div
                                    className="owl2-item "
                                    style={{ padding: "4px" }}
                                    key={i}
                                  >
                                    <LazyLoadImage
                                      effect="blur"
                                      src={fileURL(image)}
                                      className={
                                        i === activeImage
                                          ? "detail-page-slide active"
                                          : "detail-page-slide"
                                      }
                                      onClick={() => setActiveImage(i)}
                                      alt={image}
                                    />
                                    {/* <img
                                      src={fileURL(image)}
                                      className={
                                        i === activeImage
                                          ? "detail-page-slide active"
                                          : "detail-page-slide"
                                      }
                                      onClick={() => setActiveImage(i)}
                                      alt={image}
                                    /> */}
                                  </div>
                                )
                              )}
                          </Carousel>
                        )}
                    </div>
                  ) : null}
                </div>
              )}

              {businessFromStore.loading === true ? (
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
                    {businessFromStore.business &&
                      businessFromStore.business.title && (
                        <h1>
                          {capitalizeFirstLetter(
                            businessFromStore.business.title
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
                    <a
                      className="reviews_button"
                      href="#review"
                      // onclick="$('a[href=\'#tab-review\']').trigger('click'); return false;"
                    >
                      {businessFromStore.business &&
                        businessFromStore.business.reviews &&
                        businessFromStore.business.reviews.length}{" "}
                      reviews
                    </a>{" "}
                    /{" "}
                    <a
                      className="write_review_button"
                      href="#review"
                      // onclick="$('a[href=\'#tab-review\']').trigger('click'); return false;"
                    >
                      Write a review
                    </a>
                  </div>
                  <div className="product_page_price price">
                    {businessFromStore.business.originalPrice &&
                    businessFromStore.business.offeredPrice > 0 ? (
                      <span
                        className="price-old"
                        id="price-old"
                        style={{ fontWeight: "100" }}
                      >
                        {currency.symbol}
                        {businessFromStore.business &&
                        businessFromStore.business.currency === currency.symbol
                          ? businessFromStore.business.originalPrice.toFixed(2)
                          : (
                              businessFromStore.business.originalPrice *
                              currency.rate
                            ).toFixed(2)}

                        {/* {businessFromStore.business &&
                          businessFromStore.business.currency}{" "}
                        {businessFromStore.business.originalPrice} */}
                      </span>
                    ) : null}
                    <span
                      className="price-new"
                      style={{
                        margin: "0 5px",
                        color: "#494949",
                        fontWeight: "100",
                      }}
                    >
                      {businessFromStore.business.originalPrice &&
                      businessFromStore.business.offeredPrice > 0 ? (
                        <span id="price-special">
                          {currency.symbol}
                          {businessFromStore.business &&
                          businessFromStore.business.currency ===
                            currency.symbol
                            ? businessFromStore.business.offeredPrice.toFixed(2)
                            : (
                                businessFromStore.business.offeredPrice *
                                currency.rate
                              ).toFixed(2)}

                          {/* {businessFromStore.business &&
                            businessFromStore.business.currency}{" "}
                          {businessFromStore.business.offeredPrice} */}
                        </span>
                      ) : (
                        <span id="price-special">
                          {currency.symbol}
                          {businessFromStore.business &&
                          businessFromStore.business.currency ===
                            currency.symbol
                            ? businessFromStore.business.originalPrice.toFixed(
                                2
                              )
                            : (
                                businessFromStore.business.originalPrice *
                                currency.rate
                              ).toFixed(2)}
                          {/* {businessFromStore.business &&
                            businessFromStore.business.currency}{" "}
                          {businessFromStore.business.originalPrice} */}
                        </span>
                      )}
                    </span>
                    {"  "}
                    {businessFromStore.business &&
                    businessFromStore.business.discount &&
                    businessFromStore.business.discount > 0 ? (
                      <span id="price-special" style={{ fontWeight: "100" }}>
                        {businessFromStore.business.discount} % OFF
                      </span>
                    ) : null}
                  </div>
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
                        {businessFromStore.loading === true ? (
                          <Skeleton
                            count={1}
                            style={{ height: "18px", width: "150px" }}
                          />
                        ) : (
                          <p style={{ margin: "0" }}>
                            {businessFromStore.business &&
                              businessFromStore.business.createdAt &&
                              new Date(
                                businessFromStore.business.createdAt
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
                        <h4 style={{ margin: "0 0 2px 0" }}>Business Type</h4>
                        {businessFromStore.loading === true ? (
                          <Skeleton
                            count={1}
                            style={{ height: "18px", width: "150px" }}
                          />
                        ) : (
                          <p style={{ margin: "0" }}>
                            {businessFromStore.business &&
                              businessFromStore.business.businessType &&
                              capitalizeFirstLetter(
                                businessFromStore.business.businessType
                              )}
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
                        {businessFromStore.loading === true ? (
                          <Skeleton
                            count={1}
                            style={{ height: "18px", width: "150px" }}
                          />
                        ) : (
                          <p style={{ margin: "0" }}>
                            {businessFromStore.business &&
                            businessFromStore.business.city
                              ? businessFromStore.business.city &&
                                capitalizeFirstLetter(
                                  businessFromStore.business.city
                                )
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
                          background: "rgb(209, 233, 252)",
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
                        {businessFromStore.loading === true ? (
                          <Skeleton
                            count={1}
                            style={{ height: "18px", width: "150px" }}
                          />
                        ) : (
                          <p style={{ margin: "0" }}>
                            {businessFromStore.business &&
                            businessFromStore.business.contact
                              ? businessFromStore.business &&
                                businessFromStore.business.contact
                              : "-------"}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {businessFromStore &&
                    businessFromStore.business &&
                    businessFromStore.business.user && (
                      <Button
                        variant="outlined"
                        size="large"
                        sx={{
                          color: "#3b5998",
                          border: "2px solid #3b5998",
                          fontSize: "14px",
                          paddingRight: "8px",
                          paddingLeft: "8px",
                          marginBottom: "10px",
                          fontWeight: "600",
                          "&:hover": {
                            color: "#3b5998",
                            border: "2px solid #3b5998",
                            fontSize: "14px",
                            paddingRight: "8px",
                            paddingLeft: "8px",
                            marginBottom: "10px",
                            fontWeight: "600",
                          },
                        }}
                        component={Link}
                        to="/user-ads"
                        state={{
                          user:
                            businessFromStore.business &&
                            businessFromStore.business.user,
                        }}
                      >
                        See seller other Ads
                      </Button>
                    )}
                  {/* <div className="product-box-desc">
                    <div className="inner-box-desc">
                      <div className="model">
                        <span>Category: </span>{" "}
                        {businessFromStore.business &&
                          businessFromStore.business.category &&
                          capitalizeFirstLetter(
                            businessFromStore.business.category
                          )}
                      </div>
                      <div className="model">
                        <span>Type: </span>{" "}
                        {businessFromStore.business &&
                          businessFromStore.business.businessType &&
                          capitalizeFirstLetter(
                            businessFromStore.business.businessType
                          )}
                      </div>
                      <div className="model">
                        <span>Company: </span>{" "}
                        {businessFromStore.business &&
                          businessFromStore.business.company &&
                          capitalizeFirstLetter(
                            businessFromStore.business.company
                          )}
                      </div>

                      <div className="model">
                        <span>City: </span>{" "}
                        {businessFromStore.business &&
                          businessFromStore.business.city &&
                          capitalizeFirstLetter(businessFromStore.business.city)}
                      </div>

                      <div className="model">
                        <span>Contact: </span>{" "}
                        {businessFromStore.business &&
                          businessFromStore.business.contact}
                      </div>

                      <div className="model">
                        <span>For Collection/Delivery contact seller </span>{" "}
                      </div>
                    </div>
                  </div> */}

                  {/* <h3 style={{ marginBottom: "8px" }}>location</h3> */}

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
                    {/* <i
                      className="fa fa-brands fa-facebook-square"
                      style={{
                        fontSize: "25px",
                        marginRight: "8px",
                        cursor: "pointer",
                        color: "rgba(20,110,190,1)",
                      }}
                    ></i> */}
                    <div>
                      <FacebookShareButton
                        url={`http://www.futjan.com/business-detail/${businessFromStore.business._id}`}
                        // quote={title}
                      >
                        <FacebookIcon size={22} round />
                      </FacebookShareButton>
                    </div>
                    <div>
                      <WhatsappShareButton
                        url={`http://www.futjan.com/business-detail/${businessFromStore.business._id}`}
                        // quote={title}
                      >
                        <WhatsappIcon size={22} round />
                      </WhatsappShareButton>
                    </div>
                    <div>
                      <TwitterShareButton
                        url={`http://www.futjan.com/business-detail/${businessFromStore.business._id}`}
                        // quote={title}
                      >
                        <TwitterIcon size={22} round />
                      </TwitterShareButton>
                    </div>
                    <div>
                      <LinkedinShareButton
                        url={`http://www.futjan.com/business-detail/${businessFromStore.business._id}`}
                        // quote={title}
                      >
                        <LinkedinIcon size={22} round />
                      </LinkedinShareButton>
                    </div>
                  </div>
                  {/* <div className="short_description form-group">
                    <h3>OverView</h3>
                  </div> */}
                  <div id="product">
                    <div className="box-cart clearfix" style={{ margin: "0" }}>
                      <div className="form-group box-info-product">
                        <div className="option quantity">
                          <div className="add-to-links wish_comp">
                            <ul className="blank d-flex">
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
                                          businessFromStore.business._id
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
              {/* <div id="product">
                <div className="box-cart clearfix" style={{ margin: "0" }}>
                  <div className="form-group box-info-product">
                    <div className="option quantity">
                      <div className="add-to-links wish_comp">
                        <ul className="blank">
                          <li className="wishlist">
                            <a>
                              <i className="fa fa-heart"></i>
                              Favourite
                            </a>
                          </li>

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
              </div> */}
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
                    </ul>

                    <div className="tab-content" id="review">
                      <div
                        className={
                          tab === "DESCRIPTION" ? "tab-pane active" : "tab-pane"
                        }
                        id="tab-description"
                      >
                        <div style={{ margin: "30px 0" }}>
                          {businessFromStore.loading === true ? (
                            <>
                              <Skeleton count={1} className="skeleton-p" />
                              <Skeleton count={1} className="skeleton-p" />
                              <Skeleton count={1} className="skeleton-p" />
                            </>
                          ) : null}

                          {businessFromStore.business &&
                            businessFromStore.business.description && (
                              <p>{businessFromStore.business.description}</p>
                            )}
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

      {zoomModal === true ? (
        <div
          className={
            zoomImage === true
              ? " zoom-modal modal-opacity-0"
              : "zoom-modal modal-opacity-1"
          }
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <i
            className="fa fa-times"
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              color: "#fff",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={() => setZoomModal(false)}
          ></i>
          <LazyLoadImage
            effect="blur"
            src={fileURL(zoomImage)}
            alt={zoomImage}
          />
          {/* <img /> */}
        </div>
      ) : null}
    </div>
  );
}
export default React.memo(DetailBusiness);
