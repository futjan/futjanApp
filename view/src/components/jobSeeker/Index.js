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
import "react-loading-skeleton/dist/skeleton.css";
import Pagination from "../../utils/Pagination";

// import $ from "jquery";

import "../surplusBusiness/skeleton.css";
const Index = () => {
  const [type, setType] = useState("");

  const [keyword, setKeyword] = useState("");
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
  const [searchedCategory, setSearchedCategory] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState("");
  const [salaryType, setSalaryType] = useState("");
  // const [lessThanPrice, setLessThanPrice] = useState("");
  // const [greaterThanPrice, setGreaterThanPrice] = useState("");

  // initialize hooks
  const dispatch = useDispatch();
  console.log(useLocation());
  const { pathname } = useLocation();
  // get state from store
  const jobSeeker = useSelector((state) => state.jobSeeker);
  const preset = useSelector((state) => state.auth.preset);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // useEffect
  useEffect(() => {
    dispatch(getPreset());
  }, []);
  useEffect(() => {
    if (preset && preset.city) {
      setCity({ name: preset.city, countryCode: "", stateCode: "" });
    }
    if (preset && preset.county) {
      setCounty({ name: preset.county });
    }
    if (preset && preset.country) {
      setCountry({ name: preset.country });
    }

    if (preset && preset.category) {
      setCategory(preset.category);
    }
  }, [
    preset && preset.country,
    preset && preset.city,
    preset && preset.county,
    preset && preset.category,
  ]);

  useEffect(() => {
    callJobSeekersAPI(page, limit, sort);
  }, []);

  useEffect(() => {
    callJobSeekersAPI(page, limit, sort);
  }, [
    page,
    limit,
    sort,
    salaryType,
    category,
    subCategory,
    country.name,
    city.name,
    county.name,
  ]);
  //   useEffect(() => {
  //     if (
  //       (state && state.keyword) ||
  //       (state && state.city) ||
  //       (state && state.type)
  //     ) {
  //       dispatch(
  //         getSurpluses(
  //           page,
  //           limit,
  //           sort,
  //           state && state.type && state.type.length > 0
  //             ? state.type.toLowerCase()
  //             : businessType.toLowerCase(),
  //           category.toLowerCase(),

  //           state && state.keyword
  //             ? state.keyword.toLowerCase()
  //             : keyword.toLowerCase(),

  //           country !== null && country.name && country.name.length > 0
  //             ? country.name.toLowerCase()
  //             : "",
  //           county !== null && county.name && county.name.length > 0
  //             ? county.name.toLowerCase()
  //             : "",
  //           state && state.city && state.city.length > 0
  //             ? state.city.toLowerCase()
  //             : "",

  //           setSearchedCategory
  //         )
  //       );

  //       if (state && state.keyword) {
  //         setKeyword(state && state.keyword ? state.keyword : "");
  //       }
  //       if (state && state.city) {
  //         setCity(
  //           state && state.city && state.city.length > 0
  //             ? { name: state.city, countryCode: "", stateCode: "" }
  //             : ""
  //         );
  //       }
  //       if (state && state.type) {
  //         setBusinessType(state && state.type ? state.type : "");
  //       }
  //     }
  //   }, [
  //     state ||
  //       (state && state.keyword) ||
  //       (state && state.city) ||
  //       (state && state.type),
  //   ]);
  //   useEffect(() => {
  //     dispatch(getSurplusKeywords());
  //   }, []);

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
  // clear State
  const clearState = () => {
    setCategory("");
    setSubCategory("");
    setSalaryType("");
    setCity({ name: "", countryCode: "", stateCode: "" });
    setCountry({ name: "", isoCode: "", phonecode: "" });
    setCounty({ name: "", isoCode: "" });
  };
  const savePresetFunc = () => {
    const preset = {
      country: country.name.toLowerCase(),
      city: city.name.toLowerCase(),
      county: county.name.toLowerCase(),
      category: category.toLowerCase(),
      subCategory: subCategory.toLowerCase(),
      type: type.toLowerCase(),
      keyword: keyword.toLowerCase(),
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
                          <span>Keyword</span>
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
                                  value={keyword}
                                  // onChange={(e) => onChangeAutoFieldName(e)}
                                  onChange={(e) => setKeyword(e.target.name)}
                                />
                                {/* {renderNameSuggustion()} */}
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
                    {isAuthenticated === true ? (
                      <button
                        className="btn btn-default inverse"
                        id="btn_resetAll"
                        onClick={() => savePresetFunc()}
                      >
                        <span
                          className="hidden fa fa-times"
                          aria-hidden="true"
                        ></span>{" "}
                        Save Preset
                      </button>
                    ) : (
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
                    )}
                    {/* <button
                      className="btn btn-default inverse"
                      id="btn_resetAll"
                      onClick={() => clearState()}
                    >
                      <span
                        className="hidden fa fa-times"
                        aria-hidden="true"
                      ></span>{" "}
                      Reset All
                    </button> */}
                  </div>
                </div>
              </div>
            </aside>
            <a
              href="javascript:void(0)"
              className="open-sidebar hidden-lg hidden-md"
            >
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
                      className={
                        pathname === "/job-seeker" ? "primary-color" : ""
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
                      <h4 style={{ margin: "0", fontWeight: "100" }}>
                        Category :{" "}
                        <span>
                          {searchedCategory.length > 0
                            ? searchedCategory.toUpperCase()
                            : "All"}
                        </span>
                      </h4>
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
                                  {candidate.rate} / {candidate.salaryType}
                                </span>
                              </div>
                            </div>
                            <div className="job-seeker-skills-container">
                              {candidate.skills &&
                                candidate.skills.map((skill) => (
                                  <span className="job-seeker-skill-span">
                                    {skill && capitalizeFirstLetter(skill)}
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
