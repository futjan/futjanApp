import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fileURL from "../../utils/fileURL";
import capitalizeFirstLetter from "../../utils/captilizeFirstLetter";
import defaultUser from "../image/default.jpg";
import { getJobSeekers } from "../actions/jobSeekersAction";
import Skeleton from "react-loading-skeleton";
import Countries from "../../utils/Countries";
// import County from "../../utils/County";
// import Cities from "../../utils/Cities";

import JobCategory from "../../utils/JobCategory";
import LocalJobs from "../../utils/LocalJobs";
import SpecialJobs from "../../utils/SpecialJobs";
import SalaryType from "../../utils/SalaryType";
import { Link, useLocation } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

// import $ from "jquery";

import "../surplusBusiness/skeleton.css";
const Index = () => {
  //   const [businessType, setBusinessType] = useState("");
  const [country, setCountry] = useState({
    name: "",
    isoCode: "",
    phonecode: "",
  });
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [searchedCategory, setSearchedCategory] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [sort, setSort] = useState("");
  const [salaryType, setSalaryType] = useState("");
  // const [lessThanPrice, setLessThanPrice] = useState("");
  // const [greaterThanPrice, setGreaterThanPrice] = useState("");

  // initialize hooks
  const dispatch = useDispatch();
  const state = useLocation().state;
  // get state from store
  const jobSeeker = useSelector((state) => state.jobSeeker);

  // useEffect
  useEffect(() => {
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
          : ""
      )
    );
  }, []);
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
  const callJobSeekersAPI = (page, lim, sortBy) => {
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
          : ""
      )
    );
  };
  // clear State
  const clearState = () => {
    setCategory("");
    setSubCategory("");
    setSalaryType("");
    setCountry({ name: "", isoCode: "", phonecode: "" });
  };

  // pagination UI
  let paginationUI = [];
  while (paginationUI.length <= jobSeeker.totalDocs / limit) {
    paginationUI.push("");
  }

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
                          <span>Payment type</span>
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
                                <SalaryType
                                  salaryType={salaryType}
                                  setSalaryType={setSalaryType}
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
                              {category.length > 0 ? (
                                <div
                                  className="input-group"
                                  style={{ width: "100%" }}
                                >
                                  {category === "Local Job" ? (
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
                              ) : null}
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
                  className="title-category "
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Candidate</span>
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
                            callJobSeekersAPI(page, limit, e.target.value);
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
                              jobSeeker.totalDocs
                            ) {
                              setLimit(e.target.value * 1);
                              setPage(
                                Math.ceil(
                                  jobSeeker.totalDocs / (e.target.value * 1)
                                )
                              );
                              callJobSeekersAPI(
                                Math.ceil(
                                  jobSeeker.totalDocs / (e.target.value * 1)
                                ),
                                e.target.value * 1,
                                sort
                              );
                            } else {
                              setLimit(e.target.value * 1);
                              callJobSeekersAPI(page, e.target.value, sort);
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
                        <div
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
                                {candidate.jobTitle &&
                                  capitalizeFirstLetter(candidate.jobTitle)}
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
                        </div>
                      ))
                    : null}
                </div>

                <div className="product-filter product-filter-bottom filters-panel">
                  <div className="col-sm-6 text-left">
                    <ul className="pagination">
                      {paginationUI.length > 5 && page > 1 ? (
                        <li
                          onClick={() => {
                            if (page > 1) {
                              setPage(page - 1);
                              // callJobSeekersAPI(page - 1, limit, sort);
                            }
                          }}
                        >
                          <a href="#">&lt;</a>
                        </li>
                      ) : null}

                      {paginationUI.length > 0
                        ? paginationUI.map((pag, i) =>
                            i + 1 > 5 ? null : (
                              <li
                                className={i + 1 === page ? "active" : ""}
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  setPage(i + 1);
                                  // callJobSeekersAPI(i + 1, limit, sort);
                                }}
                                key={i}
                              >
                                <span>{i + 1}</span>
                              </li>
                            )
                          )
                        : null}
                      {paginationUI.length > 5 ? (
                        <li
                          onClick={() => {
                            if (page <= jobSeeker.totalDocs / limit) {
                              setPage(page + 1);
                              callJobSeekersAPI(page + 1, limit, sort);
                            }
                          }}
                        >
                          <a href="#">&gt;</a>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                  <div className="col-sm-6 text-right">
                    Showing {page * limit - limit + 1} to{" "}
                    {(page - 1) * limit + limit > jobSeeker.totalDocs
                      ? jobSeeker.totalDocs
                      : (page - 1) * limit + limit}{" "}
                    of {jobSeeker.totalDocs} ({page} Pages)
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
export default Index;
