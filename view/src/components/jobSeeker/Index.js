import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fileURL from "../../utils/fileURL";
import capitalizeFirstLetter from "../../utils/captilizeFirstLetter";
import defaultUser from "../image/default.jpg";
import { getJobSeekers } from "../actions/jobSeekersAction";
import { getPreset, savePreset } from "../actions/userAction";
import Skeleton from "react-loading-skeleton";
import Countries from "../../utils/Countries";
import debounce from "../../utils/debounce";

import JobType from "../../utils/JobType";
import JobCategory from "../../utils/JobCategory";
import County from "../../utils/County";
import Cities from "../../utils/cities";
import SpecialJobs from "../../utils/SpecialJobs";
import LocalJobs from "../../utils/LocalJobs";
import { Link, useLocation } from "react-router-dom";

import Pagination from "../../utils/Pagination";

// import $ from "jquery";

import "../surplusBusiness/skeleton.css";
const Index = () => {
  const [type, setType] = useState("");
  const [city, setCity] = useState({
    name: "",
    stateCode: "",
    countryCode: "",
  });
  const [country, setCountry] = useState({
    name: "",
    isoCode: "",
    phonecode: "",
  });
  const [county, setCounty] = useState({
    name: "",
    isoCode: "",
  });
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [title, setTitle] = useState("");
  const [sort, setSort] = useState("");
  const [salaryType, setSalaryType] = useState("");
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

  const { pathname } = useLocation();
  const location = useLocation();
  // get state from store
  const jobSeeker = useSelector((state) => state.jobSeeker);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const preset = useSelector((state) => state.auth.preset);

  useEffect(() => {
    if (location && location.state && location.state.title) {
      setTitle(location && location.state && location.state.title);
      callJobSeekersAPI(page, limit, sort);
    }
  }, [location && location.state && location.state.title]);
  useEffect(() => {
    dispatch(getPreset());
  }, [user && user._id]);

  useEffect(() => {
    if (preset && preset._id) {
      setTitlePreset(preset.title_jobSeeker);
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
  // useEffect
  useEffect(() => {
    callJobSeekersAPI(page, limit, sort);
  }, []);

  useEffect(() => {
    callJobSeekersAPI(page, limit, sort);
  }, [page, sort, limit]);
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
  const callJobSeekersAPI = debounce((page) => {
    dispatch(
      getJobSeekers(
        page,
        limit,
        sort,
        title.length > 0 ? title.toLowerCase().trim() : "",
        salaryType.toLowerCase(),
        category.toLowerCase(),
        subCategory.toLowerCase(),
        country !== null || (country.name && country.name.length > 0)
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
  });

  // get Saved Alert
  const getSavedAlert = () => {
    dispatch(
      getJobSeekers(
        page,
        limit,
        sort,
        titlePreset.trim(),
        salaryType.toLowerCase(),
        category.toLowerCase(),
        subCategory.toLowerCase(),
        countryPreset !== null ||
          (countryPreset.name && countryPreset.name.length > 0)
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
    setTitle("");
    setCategory("");
    setSubCategory("");
    setSalaryType("");
    setCity({ name: "", countryCode: "", stateCode: "" });
    setCountry({ name: "", isoCode: "", phonecode: "" });
    setCounty({ name: "", isoCode: "" });
    setTitlePreset("");
    setType("");
    setCityPreset({ name: "", countryCode: "", stateCode: "" });
    setCountryPreset({ name: "", isoCode: "", phonecode: "" });
    setCountyPreset({ name: "", isoCode: "" });
  };

  const savePresetFunc = () => {
    const preset = {
      country: countryPreset.name.toLowerCase(),
      city: cityPreset.name.toLowerCase(),
      county: countyPreset.name.toLowerCase(),
      title_jobSeeker: titlePreset.toLowerCase(),
    };
    dispatch(savePreset(preset));
  };
  const onChangeAutoFieldName = (e) => {
    const value = e.target.value;
    let suggustions = [];
    // if (value.trim().length > 0) {
    //   const regex = new RegExp(`^${value}`, "i");
    //   if (surplusFromStore.keywords.length > 0) {
    //     suggustions = surplusFromStore.keywords

    //       .map((v) => v.keyword)
    //       .filter(
    //         (keyword, i, keywordArray) => keywordArray.indexOf(keyword) === i
    //       )
    //       .sort()
    //       .filter((v) => regex.test(v));
    //   }
    // }
    // setKeyword(value);

    // setSuggustion([...suggustions]);
  };
  const renderNameSuggustion = () => {
    // if (suggustion.length === 0) {
    //   return null;
    // }
    return (
      <ul className="autoComplete-ul" style={{ width: "90%", top: "40px" }}>
        {/* {suggustion.map((co, i) => (
          <li
            className="autoComplete-li"
            onClick={() => {
              setKeyword(co);
              setSuggustion([]);
            }}
            style={{ display: "block", width: "100%" }}
            key={i}
          >
            {co}
          </li>
        ))} */}
      </ul>
    );
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
                                  value={title}
                                  // onChange={(e) => onChangeAutoFieldName(e)}
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
                    <li className="so-filter-options" data-option="search">
                      <div className="so-filter-heading">
                        <div className="so-filter-heading-text">
                          <span>Job Type</span>
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
                                <JobType type={type} setType={setType} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="so-filter-options" data-option="search">
                      <div className="so-filter-heading">
                        <div className="so-filter-heading-text">
                          <span>Category</span>
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
                                <JobCategory
                                  category={category}
                                  setCategory={setCategory}
                                />
                              </div>

                              <div
                                className="input-group"
                                style={{ width: "100%" }}
                              >
                                {category === "local job" ? (
                                  <LocalJobs
                                    subCategory={subCategory}
                                    setSubCategory={setSubCategory}
                                  />
                                ) : (
                                  <SpecialJobs
                                    subCategory={subCategory}
                                    setSubCategory={setSubCategory}
                                  />
                                )}
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
                      onClick={() => callJobSeekersAPI(page, limit, sort)}
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
                {isAuthenticated === true ? (
                  <>
                    <h3 className="modtitle">
                      <span>Job Seeker Alert</span>
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
                              <div
                                className="so-filter-option"
                                data-type="search"
                              >
                                <div className="so-option-container">
                                  <div
                                    className="input-group"
                                    style={{ width: "100%" }}
                                  >
                                    <input
                                      type="text"
                                      name="titlePreset"
                                      value={titlePreset}
                                      onChange={(e) =>
                                        setTitlePreset(e.target.value)
                                      }
                                      placeholder="title"
                                      className="form-control"
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
                              <div
                                className="so-filter-option"
                                data-type="search"
                              >
                                <div className="so-option-container">
                                  <div
                                    className="input-group"
                                    style={{ width: "100%" }}
                                  >
                                    <Countries
                                      setCountry={setCountryPreset}
                                      country={countryPreset}
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
                              <div
                                className="so-filter-option"
                                data-type="search"
                              >
                                <div className="so-option-container">
                                  <div
                                    className="input-group"
                                    style={{ width: "100%" }}
                                  >
                                    <County
                                      country={countryPreset}
                                      setCounty={setCountyPreset}
                                      county={countyPreset}
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
                              <div
                                className="so-filter-option"
                                data-type="search"
                              >
                                <div className="so-option-container">
                                  <div
                                    className="input-group"
                                    style={{ width: "100%" }}
                                  >
                                    <Cities
                                      setCity={setCityPreset}
                                      county={countyPreset}
                                      country={countryPreset}
                                      city={cityPreset}
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
                          onClick={() => savePresetFunc()}
                        >
                          <span
                            className="hidden fa fa-times"
                            aria-hidden="true"
                          ></span>{" "}
                          Save job seeker alert
                        </button>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </aside>
            <a href="#" className="open-sidebar hidden-lg hidden-md">
              <i className="fa fa-bars"></i>Sidebar
            </a>
            <div
              className="products-category  col-md-9 col-sm-12 col-xs-12"
              style={{ padding: "0" }}
            >
              <div className="form-group clearfix">
                <h3
                  className="title-category-job "
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <Link
                      to="/job-seeker"
                      style={
                        pathname === "/job-seeker"
                          ? {
                              height: "100%",
                              padding: "11px",
                              fontSize: "16px",
                              color: "#ddd",
                              background: "#3b5998",
                              borderRadius: "4px",
                            }
                          : {}
                      }
                    >
                      <span className="span2">Job Seekers</span>
                    </Link>
                    <Link to="/job">
                      <span className="span1">Jobs</span>
                    </Link>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
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
                      Job Seeker ad
                    </Link>
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
                      Job ad
                    </Link>
                  </div>
                </h3>
              </div>
              <div className="products-category">
                <div className="product-filter filters-panel">
                  <div
                    className="row"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className="col-sm-3 view-mode hidden-sm hidden-xs">
                      {isAuthenticated === true && preset && preset._id ? (
                        <div
                          className="open-sidebar"
                          style={{
                            cursor: "pointer",
                            margin: "0",
                            fontWeight: 600,
                          }}
                          onClick={() => getSavedAlert()}
                        >
                          GET SAVED ALERT
                        </div>
                      ) : null}
                      {/* <h4 style={{ margin: "0", fontWeight: "100" }}>
                        Category :{" "}
                        <span>
                          {searchedCategory.length > 0
                            ? searchedCategory.toUpperCase()
                            : "All"}
                        </span>
                      </h4> */}
                    </div>
                    <div className="short-by-show form-inline text-right col-md-9  col-sm-11">
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

                          <option value="createdAt">Newest</option>
                          <option value="-createdAt">Oldest</option>
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
                              jobSeeker.totalDocs
                            ) {
                              setLimit(e.target.value * 1);
                              setPage(
                                Math.ceil(
                                  jobSeeker.totalDocs / (e.target.value * 1)
                                )
                              );
                            } else {
                              setLimit(e.target.value * 1);
                            }
                          }}
                        >
                          <option value="10">10</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="show-result-info">
                  <i className="fa fa-rss"></i>
                  <p>
                    {jobSeeker.totalDocs > 0 ? jobSeeker.totalDocs : 0} results
                    found{" "}
                  </p>
                </div>
                {jobSeeker.loading === true &&
                jobSeeker.jobSeekers.length === 0 ? (
                  <div className="row">
                    {["", "", "", "", "", ""].map((num, i) => (
                      <div
                        className="col-lg-4 col-md-4 col-sm-6 col-xs-12"
                        style={{ margin: "20px 0" }}
                        key={i}
                      >
                        <Skeleton count={1} className="skeleton-card" />
                        {/* <Skeleton count={1} className="skeleton-p" />
                        <Skeleton count={1} className="skeleton-price" /> */}
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="products-list grid row number-col-3 so-filter-gird job-seekers">
                  {jobSeeker.jobSeekers.length > 0
                    ? jobSeeker.jobSeekers.map((candidate) => (
                        <Link
                          to={`/job-seeker-detail/${candidate._id}`}
                          className="product-layout col-lg-4 col-md-4 col-sm-6 col-xs-6"
                          key={candidate._id}
                        >
                          <div className="job-seeker-card">
                            <div
                              style={{ marginBottom: "10px" }}
                              className="job-seeker-card-img-container"
                            >
                              {candidate.photo && candidate.photo.length > 0 ? (
                                <img
                                  src={fileURL(candidate.photo)}
                                  alt="user"
                                  width="70"
                                  style={{ borderRadius: "50%" }}
                                />
                              ) : (
                                <img
                                  src={defaultUser}
                                  alt="user"
                                  width="70"
                                  style={{ borderRadius: "50%" }}
                                />
                              )}
                            </div>
                            <div
                              className="job-seeker-card-name-container"
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                              }}
                            >
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
                                  {candidate.country &&
                                    capitalizeFirstLetter(candidate.country)}
                                </span>
                              </div>
                              <div>
                                <i className="fa fa-money"></i>{" "}
                                <span>
                                  {candidate && candidate.currency}{" "}
                                  {candidate.rate} / {candidate.salaryType}
                                </span>
                              </div>
                            </div>
                            <div className="job-seeker-skills-container">
                              {candidate.skills &&
                                candidate.skills.map((skill) => (
                                  <span className="job-seeker-skill-span">
                                    {skill && skill.length > 7
                                      ? skill.substring(0, 6) + ".."
                                      : capitalizeFirstLetter(skill)}
                                  </span>
                                ))}
                            </div>
                            <div style={{ width: "100%" }}>
                              <Link
                                className="job-seeker-view-profile"
                                to={`/job-seeker-detail/${candidate._id}`}
                              >
                                view profile
                              </Link>
                            </div>
                          </div>
                        </Link>
                      ))
                    : null}
                </div>

                <Pagination
                  action={() => callJobSeekersAPI(page, limit, sort)}
                  totalDocs={jobSeeker.totalDocs}
                  currentPage={page}
                  setCurrentPage={setPage}
                  itemsPerPage={limit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
