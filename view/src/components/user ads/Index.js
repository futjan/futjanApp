import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fileURL from "../../utils/fileURL";

import { getSurpluses, getSurplusKeywords } from "../actions/surplusAction";
import { getUserAds } from "../actions/userAdsAction";
import Skeleton from "react-loading-skeleton";
import Countries from "../../utils/Countries";
import County from "../../utils/County";
import Cities from "../../utils/cities";
import capitalizeFirstLetter from "../../utils/captilizeFirstLetter";
import { Link, useLocation } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { savePreset, getPreset } from "../actions/userAction";
// import $ from "jquery";
import Pagination from "../../utils/Pagination";
export default function Index() {
  const [businessType, setBusinessType] = useState("");
  const [city, setCity] = useState({
    name: "",
    stateCode: "",
    countryCode: "",
  });
  const [country, setCountry] = useState({
    name: "",
    isoCode: "",
  });
  const [county, setCounty] = useState({
    name: "",
    isoCode: "",
  });
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState("");
  const [keyword, setKeyword] = useState("");
  const [suggustion, setSuggustion] = useState([]);
  const [titlePreset, setTitlePreset] = useState("");
  const [cityPreset, setCityPreset] = useState({
    name: "",
    stateCode: "",
    countryCode: "",
  });
  const [countryPreset, setCountryPreset] = useState({
    name: "",
    isoCode: "",
    phonecode: "",
  });
  const [countyPreset, setCountyPreset] = useState({
    name: "",
    isoCode: "",
  });

  // initialize hooks
  const dispatch = useDispatch();
  const state = useLocation().state;

  // get state from store
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const surplusFromStore = useSelector((state) => state.surplus);
  const ads = useSelector((state) => state.userads);
  const preset = useSelector((state) => state.auth.preset);

  useEffect(() => {
    dispatch(
      getUserAds(
        state.user,
        page,
        limit,
        title.toLowerCase(),
        country !== null && country.name && country.name.length > 0
          ? country.name.toLowerCase()
          : "",
        county !== null && county.name && county.name.length > 0
          ? county.name.toLowerCase()
          : "",
        city !== null && city.name && city.name.length > 0
          ? city.name.toLowerCase()
          : ""
      )
    );
  }, []);

  useEffect(() => {
    if (preset && preset._id) {
      setTitlePreset(preset.title_surplus);
      setCityPreset({
        name: preset.city,
        stateCode: "",
        countryCode: "",
      });
      setCountryPreset({
        name: preset.country,
        isoCode: "",
        phonecode: "",
      });
      setCountyPreset({
        name: preset.county,
        isoCode: "",
      });
    }
  }, [preset && preset._id]);

  // useEffect to run jquery
  // useEffect(() => {
  //   $(".so-filter-heading").on("click", function () {
  //     if ($(this).find(".fa").hasClass("fa-chevron-down")) {
  //       $(this)
  //         .find(".fa-chevron-down")
  //         .addClass("fa-chevron-right", "slow")
  //         .removeClass("fa-chevron-down", "slow");
  //     } else {
  //       $(this)
  //         .find(".fa-chevron-right")
  //         .addClass("fa-chevron-down", "slow")
  //         .removeClass("fa-chevron-right", "slow");
  //     }
  //     $(this).parent().children(".so-filter-content-opts").slideToggle("slow");
  //   });

  //   // side bar filers
  //   $(".open-sidebar").click(function (e) {
  //     e.preventDefault();
  //     $(".sidebar-overlay").toggleClass("show");
  //     $(".sidebar-offcanvas").toggleClass("active");
  //   });

  //   $(".sidebar-overlay").click(function (e) {
  //     e.preventDefault();
  //     $(".sidebar-overlay").toggleClass("show");
  //     $(".sidebar-offcanvas").toggleClass("active");
  //   });
  //   $("#close-sidebar").click(function () {
  //     $(".sidebar-overlay").removeClass("show");
  //     $(".sidebar-offcanvas").removeClass("active");
  //   });
  // }, []);

  // call getSurplusesAction
  const callSurplusesAPI = () => {
    dispatch(
      getUserAds(
        state.user,
        page,
        limit,
        title.toLowerCase(),
        country !== null && country.name && country.name.length > 0
          ? country.name.toLowerCase()
          : "",
        county !== null && county.name && county.name.length > 0
          ? county.name.toLowerCase()
          : "",
        city !== null && city.name && city.name.length > 0
          ? city.name.toLowerCase()
          : ""
      )
    );
  };
  // get Saved Alert
  const getSavedAlert = () => {
    dispatch(
      getSurpluses(
        page,
        limit,
        sort,
        titlePreset.trim(),
        businessType.toLowerCase(),
        category.toLowerCase(),
        keyword.toLowerCase(),
        countryPreset !== null &&
          countryPreset.name &&
          countryPreset.name.length > 0
          ? countryPreset.name.toLowerCase()
          : "",
        countyPreset !== null &&
          countyPreset.name &&
          countyPreset.name.length > 0
          ? countyPreset.name.toLowerCase()
          : "",
        cityPreset !== null && cityPreset.name && cityPreset.name.length > 0
          ? cityPreset.name.toLowerCase()
          : ""
      )
    );
  };

  // clear State
  const clearState = () => {
    setCity({ name: "", stateCode: "", countryCode: "" });
    setBusinessType("");
    setCategory("");
    setKeyword("");
    setCountry({ name: "", isoCode: "" });
    setCounty({ name: "", isoCode: "" });
    setTitlePreset("");
    setCityPreset({ name: "", countryCode: "", stateCode: "" });
    setCountryPreset({ name: "", isoCode: "", phonecode: "" });
    setCountyPreset({ name: "", isoCode: "" });
  };

  return (
    <div className="res layout-1" style={{ marginTop: "20px" }}>
      <div id="wrapper" className="wrapper-fluid banners-effect-10">
        <div className="container product-detail">
          <div className="row">
            <aside className="col-md-3 col-sm-4 col-xs-12 content-aside right_column sidebar-offcanvas">
              <span id="close-sidebar" className="fa fa-times"></span>
              <div className="module so_filter_wrap filter-horizontal">
                <h3 className="modtitle">
                  <span>Search BY</span>
                </h3>
                <div className="modcontent">
                  <ul>
                    <li className="so-filter-options" data-option="search">
                      <div className="so-filter-heading">
                        <div className="so-filter-heading-text">
                          <span>Title</span>
                        </div>
                        <i className="fa fa-chevron-down"></i>
                      </div>

                      <div className="so-filter-content-opts">
                        <div className="so-filter-content-opts-container">
                          <div className="so-filter-option" data-type="search">
                            <div className="so-option-container">
                              <div
                                className="input-group"
                                style={{ width: "100%" }}
                              >
                                <input
                                  type="text"
                                  className="form-control"
                                  name="text_search"
                                  id="text_search"
                                  placeholder="Title"
                                  value={title}
                                  onChange={(e) => setTitle(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="so-filter-options" data-option="search">
                      <div className="so-filter-heading">
                        <div className="so-filter-heading-text">
                          <span>Country</span>
                        </div>
                        <i className="fa fa-chevron-down"></i>
                      </div>

                      <div className="so-filter-content-opts">
                        <div className="so-filter-content-opts-container">
                          <div className="so-filter-option" data-type="search">
                            <div className="so-option-container">
                              <div
                                className="input-group"
                                style={{ width: "100%" }}
                              >
                                <Countries
                                  setCountry={setCountry}
                                  country={country}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="so-filter-options" data-option="search">
                      <div className="so-filter-heading">
                        <div className="so-filter-heading-text">
                          <span>State / County</span>
                        </div>
                        <i className="fa fa-chevron-down"></i>
                      </div>

                      <div className="so-filter-content-opts">
                        <div className="so-filter-content-opts-container">
                          <div className="so-filter-option" data-type="search">
                            <div className="so-option-container">
                              <div
                                className="input-group"
                                style={{ width: "100%" }}
                              >
                                <County
                                  country={country}
                                  setCounty={setCounty}
                                  county={county}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="so-filter-options" data-option="search">
                      <div className="so-filter-heading">
                        <div className="so-filter-heading-text">
                          <span>City</span>
                        </div>
                        <i className="fa fa-chevron-down"></i>
                      </div>

                      <div className="so-filter-content-opts">
                        <div className="so-filter-content-opts-container">
                          <div className="so-filter-option" data-type="search">
                            <div className="so-option-container">
                              <div
                                className="input-group"
                                style={{ width: "100%" }}
                              >
                                <Cities
                                  setCity={setCity}
                                  county={county}
                                  country={country}
                                  city={city}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="clear_filter">
                    <button
                      className="btn btn-default inverse"
                      id="btn_resetAll"
                      onClick={() => callSurplusesAPI(page, limit, sort)}
                    >
                      <span
                        className="hidden fa fa-times"
                        aria-hidden="true"
                      ></span>{" "}
                      Search
                    </button>

                    <button
                      className="btn btn-default inverse"
                      id="btn_resetAll"
                      onClick={() => clearState()}
                    >
                      <span
                        className="hidden fa fa-times"
                        aria-hidden="true"
                      ></span>{" "}
                      Reset All
                    </button>
                  </div>
                </div>
              </div>
            </aside>
            <div className="open-sidebar hidden-lg hidden-md">
              <i className="fa fa-bars"></i>Sidebar
            </div>
            <div
              className="products-category  col-md-9 col-sm-12 col-xs-12"
              style={{ padding: "0", marginTop: "30px" }}
            >
              <div className="form-group clearfix">
                <h3
                  className="title-category "
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>ADS</span>
                  <Link
                    className="clearfix"
                    to="/user-panel"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      fontSize: "14px",
                      fontWeight: "100",
                    }}
                  >
                    <i
                      className="fa fa-thumb-tack"
                      style={{
                        fontSize: "20px",
                        padding: "0",
                        marginBottom: "3px",
                      }}
                    ></i>
                    Post Ad
                  </Link>
                </h3>
              </div>
              <div className="products-category">
                <div className="product-filter filters-panel">
                  <div
                    className="row"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className="col-sm-3 view-mode hidden-sm hidden-xs">
                      {/*
                     <h4 style={{ margin: "0", fontWeight: "100" }}>
                      Category :{" "}
                      <span>
                        {searchedCategory.length > 0
                          ? searchedCategory.toUpperCase()
                          : "All"}
                      </span>
                    </h4> */}
                    </div>
                    {/* <div className="short-by-show form-inline text-right col-md-9  col-sm-11">
                      <div className="form-group short-by">
                        <label className="control-label" htmlFor="input-sort">
                          Sort By:
                        </label>
                        <select
                          id="input-sort"
                          className="form-control"
                          value={sort}
                          onChange={(e) => {
                            setSort(e.target.value);
                          }}
                        >
                          <option value="" selected="selected">
                            Default
                          </option>

                          <option value="originalPrice">
                            Original Price (Low to High)
                          </option>
                          <option value="-originalPrice">
                            Original Price (High to Low)
                          </option>

                          <option value="offeredPrice">
                            Offered Price (Low to High)
                          </option>
                          <option value="-offeredPrice">
                            Offered Price (High to Low)
                          </option>
                          <option value="discount">
                            Discount (Low to High)
                          </option>
                          <option value="-discount">
                            Discount (High to Low)
                          </option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="control-label" htmlFor="input-limit">
                          Show:
                        </label>
                        <select
                          id="input-limit"
                          className="form-control"
                          value={limit}
                          onChange={(e) => {
                            if (
                              page * (e.target.value * 1) >
                              surplusFromStore.totalDocs
                            ) {
                              setLimit(e.target.value * 1);
                              setPage(
                                Math.ceil(
                                  surplusFromStore.totalDocs /
                                    (e.target.value * 1)
                                )
                              );
                             
                            } else {
                              setLimit(e.target.value * 1);
                              // callSurplusesAPI(page, e.target.value, sort);
                            }
                          }}
                        >
                          <option value="10">10</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="show-result-info">
                  <i className="fa fa-rss"></i>
                  <p>{ads.totalDocs > 0 ? ads.totalDocs : 0} results found </p>
                </div>
                {ads.loading === true && ads.ads.length === 0 ? (
                  <div className="row">
                    {["", "", "", "", "", ""].map((num, i) => (
                      <div
                        className="col-lg-4 col-md-4 col-sm-6 col-xs-12"
                        style={{ margin: "20px 0" }}
                        key={i}
                      >
                        <Skeleton count={1} className="skeleton-card" />
                        <Skeleton count={1} className="skeleton-p" />
                        <Skeleton count={1} className="skeleton-price" />
                      </div>
                    ))}
                  </div>
                ) : null}

                <div
                  className="products-list grid row number-col-3 so-filter-gird"
                  style={{ minHeight: "930px" }}
                >
                  {ads.ads.length > 0
                    ? ads.ads.map((sur) => (
                        <div
                          className="product-layout col-lg-4 col-md-4 col-sm-6 col-xs-6"
                          key={sur._id}
                        >
                          <div className="product-item-container">
                            <div className="left-block">
                              <div
                                className="product-image-container  second_img  "
                                style={{
                                  position: "relative",
                                  minHeight: "280px",
                                }}
                              >
                                {sur.adType === "surplus" ? (
                                  <Link
                                    to={`/surplus-detail/${sur._id}`}
                                    title="Lorem Ipsum dolor at vero eos et iusto odi  with Premium "
                                  >
                                    <img
                                      src={
                                        sur.adType === "jobseeker"
                                          ? fileURL(sur && sur.images)
                                          : fileURL(sur.images && sur.images[0])
                                      }
                                      alt={sur.title}
                                      title={sur.title}
                                      className="img-1 img-responsive"
                                    />

                                    {sur.promoteType &&
                                    sur.promoteType.length > 0 ? (
                                      <div className="ad-promote-type-container">
                                        {sur.promoteType.map((promote, i) => (
                                          <div
                                            className={`ad-promote-type ${promote.promote}`}
                                            key={i}
                                          >
                                            {promote.promote}
                                          </div>
                                        ))}
                                      </div>
                                    ) : null}
                                  </Link>
                                ) : null}
                                {sur.adType === "job" ? (
                                  <Link
                                    to={`/job-detail/${sur._id}`}
                                    title="Lorem Ipsum dolor at vero eos et iusto odi  with Premium "
                                  >
                                    <img
                                      src={
                                        sur.adType === "jobseeker"
                                          ? fileURL(sur && sur.images)
                                          : fileURL(sur.images && sur.images[0])
                                      }
                                      alt={sur.title}
                                      title={sur.title}
                                      className="img-1 img-responsive"
                                    />

                                    {sur.promoteType &&
                                    sur.promoteType.length > 0 ? (
                                      <div className="ad-promote-type-container">
                                        {sur.promoteType.map((promote, i) => (
                                          <div
                                            className={`ad-promote-type ${promote.promote}`}
                                            key={i}
                                          >
                                            {promote.promote}
                                          </div>
                                        ))}
                                      </div>
                                    ) : null}
                                  </Link>
                                ) : null}
                                {sur.adType === "jobseeker" ? (
                                  <Link
                                    to={`/job-seeker-detail/${sur._id}`}
                                    title="Lorem Ipsum dolor at vero eos et iusto odi  with Premium "
                                  >
                                    <img
                                      src={
                                        sur.adType === "jobseeker"
                                          ? fileURL(sur && sur.images)
                                          : fileURL(sur.images && sur.images[0])
                                      }
                                      alt={sur.title}
                                      title={sur.title}
                                      className="img-1 img-responsive"
                                    />

                                    {sur.promoteType &&
                                    sur.promoteType.length > 0 ? (
                                      <div className="ad-promote-type-container">
                                        {sur.promoteType.map((promote, i) => (
                                          <div
                                            className={`ad-promote-type ${promote.promote}`}
                                            key={i}
                                          >
                                            {promote.promote}
                                          </div>
                                        ))}
                                      </div>
                                    ) : null}
                                  </Link>
                                ) : null}
                              </div>
                              {/* <div className="countdown_box">
                              <div className="countdown_inner"></div>
                            </div> */}
                              {sur.discount && sur.discount > 0 ? (
                                <div className="box-label">
                                  <span className="label-product label-sale">
                                    Sale
                                  </span>
                                </div>
                              ) : null}
                            </div>

                            <div className="right-block">
                              <div className="caption">
                                <h4>
                                  {sur.adType === "surplus" ? (
                                    <Link to={`/surplus-detail/${sur._id}`}>
                                      {sur.title && sur.title.length > 50
                                        ? capitalizeFirstLetter(
                                            sur.title.substring(0, 50) + "..."
                                          )
                                        : sur.title &&
                                          capitalizeFirstLetter(sur.title)}
                                    </Link>
                                  ) : null}
                                  {sur.adType === "job" ? (
                                    <Link to={`/job-detail/${sur._id}`}>
                                      {sur.title && sur.title.length > 50
                                        ? capitalizeFirstLetter(
                                            sur.title.substring(0, 50) + "..."
                                          )
                                        : sur.title &&
                                          capitalizeFirstLetter(sur.title)}
                                    </Link>
                                  ) : null}
                                  {sur.adType === "jobseeker" ? (
                                    <Link to={`/job-seeker-detail/${sur._id}`}>
                                      {sur.title && sur.title.length > 50
                                        ? capitalizeFirstLetter(
                                            sur.title.substring(0, 50) + "..."
                                          )
                                        : sur.title &&
                                          capitalizeFirstLetter(sur.title)}
                                    </Link>
                                  ) : null}
                                </h4>
                                <div>
                                  <i class="fa fa-tasks"></i>
                                  <small>
                                    {sur.category &&
                                      capitalizeFirstLetter(sur.category)}
                                  </small>
                                </div>
                                <div>
                                  <i class="fa fa-map-marker"></i>
                                  <small>
                                    {sur.country &&
                                      capitalizeFirstLetter(sur.country)}
                                  </small>
                                </div>
                                <div className="total-price">
                                  <div className="price price-left">
                                    <span className="price-new">
                                      {sur.adType === "job"
                                        ? sur.minSalary > 0 && sur.maxSalary > 0
                                          ? sur &&
                                            sur.currency +
                                              " " +
                                              sur.minSalary +
                                              " - " +
                                              sur.maxSalary +
                                              " / " +
                                              sur.salaryType
                                          : sur.salaryType
                                        : null}

                                      {sur.adType === "jobseeker"
                                        ? sur.rate > 0
                                          ? sur && sur.currency + " " + sur.rate
                                          : null
                                        : null}
                                    </span>
                                    {sur.adType === "surplus" ? (
                                      <>
                                        {sur.originalPrice &&
                                        sur.offeredPrice > 0 ? (
                                          <span className="price-new">
                                            {sur && sur.currency}{" "}
                                            {sur.offeredPrice}
                                          </span>
                                        ) : (
                                          <span className="price-new">
                                            {sur && sur.currency}{" "}
                                            {sur.originalPrice}
                                          </span>
                                        )}
                                        {sur.originalPrice &&
                                        sur.offeredPrice > 0 ? (
                                          <span className="price-old">
                                            {sur && sur.currency}{" "}
                                            {sur.originalPrice}
                                          </span>
                                        ) : null}
                                      </>
                                    ) : null}
                                  </div>
                                  {sur.adType === "surplus" &&
                                  sur.discount &&
                                  sur.discount > 0 ? (
                                    <div className="price-sale price-right">
                                      <span className="discount">
                                        -{sur.discount}%<strong>OFF</strong>
                                      </span>
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : null}
                </div>
                {/* <Pagination
                action={() => callSurplusesAPI(page, limit, sort)}
                totalDocs={surplusFromStore.totalDocs}
                currentPage={page}
                setCurrentPage={setPage}
                itemsPerPage={limit}
              /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
