import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import Loader from "../../utils/Loader";
import fileURL from "../../utils/fileURL";
import JobType from "../../utils/JobType";
import JobCategory from "../../utils/JobCategory";
import Countries from "../../utils/Countries";
import County from "../../utils/County";
import Cities from "../../utils/cities";
import debounce from "../../utils/debounce";
import LocalJobs from "../../utils/LocalJobs";
import SpecialJobs from "../../utils/SpecialJobs";
import { getJobs } from "../actions/jobAction";
import { getPreset, savePreset } from "../actions/userAction";
import capitalizeFirstLetter from "../../utils/captilizeFirstLetter";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../surplusBusiness/skeleton.css";
import Pagination from "../../utils/Pagination";
const Index = () => {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchedCategory, setSearchedCategory] = useState("");
  const [keyword, setKeyword] = useState("");

  const [sort, setSort] = useState("");
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
  // initialize hooks
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = useLocation();
  // get state from store
  const preset = useSelector((state) => state.auth.preset);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const job = useSelector((state) => state.job);

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
    callJobsAPI(page, limit, sort);
  }, []);

  useEffect(() => {
    callJobsAPI(page, limit, sort);
  }, [
    page,
    limit,
    sort,
    type,
    category,
    subCategory,
    country.name,
    city.name,
    county.name,
    keyword.toLowerCase(),
  ]);
  // useEffect(() => {
  //   if (
  //     location.state &&
  //     location.state.category &&
  //     location.state.subCategory
  //   ) {
  //     dispatch(
  //       getJobs(
  //         page,
  //         limit,
  //         sort,
  //         type.toLowerCase(),
  //         location.state && location.state.category
  //           ? location.state.category.toLowerCase()
  //           : category,
  //         // keyword.toLowerCase(),
  //         location.state && location.state.subCategory
  //           ? location.state.subCategory.toLowerCase()
  //           : subCategory,
  //         country !== null && country.name && country.name.length > 0
  //           ? country.name.toLowerCase()
  //           : "",
  //         county !== null && county.name && county.name.length > 0
  //           ? county.name.toLowerCase()
  //           : "",
  //         city !== null && city.name && city.name.length > 0
  //           ? city.name.toLowerCase()
  //           : "",
  //         setSearchedCategory
  //       )
  //     );

  //   }
  // }, [

  //   location.state && location.state.subCategory,
  // ]);

  useEffect(() => {
    setCategory(
      location.state && location.state.category ? location.state.category : ""
    );
  }, [location.state && location.state.category]);
  // update subCategory State
  useEffect(() => {
    setSubCategory(
      location.state && location.state.subCategory
        ? location.state.subCategory
        : ""
    );
  }, [location.state && location.state.subCategory]);
  // call getjobs api
  // const callJobsAPI = (page, lim, sortBy) => {
  const callJobsAPI = debounce((page, lim, sortBy) => {
    dispatch(
      getJobs(
        page,
        lim,
        sortBy,
        type.toLowerCase(),
        category.toLowerCase(),
        keyword.toLowerCase(),
        subCategory.toLowerCase(),
        country !== null && country.name && country.name.length > 0
          ? country.name.toLowerCase()
          : "",
        county !== null && county.name && county.name.length > 0
          ? county.name.toLowerCase()
          : "",
        city !== null && city.name && city.name.length > 0
          ? city.name.toLowerCase()
          : "",
        setSearchedCategory
      )
    );
  });

  // clear State
  const clearState = () => {
    setCity({ name: "", countryCode: "", stateCode: "" });
    setType("");
    setCategory("");
    setKeyword("");
    setSubCategory("");
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
                      onClick={() => callJobsAPI(page, limit, sort)}
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
            <div className="open-sidebar hidden-lg hidden-md">
              <i className="fa fa-bars"></i>Sidebar
            </div>
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
                      to="/job"
                      className={pathname === "/job" ? "primary-color" : ""}
                    >
                      <span className="span1">Jobs</span>
                    </Link>
                    <Link to="/job-seeker">
                      <span className="span2">Job Seekers</span>
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
                            if (page * (e.target.value * 1) > job.totalDocs) {
                              setLimit(e.target.value * 1);
                              setPage(
                                Math.ceil(job.totalDocs / (e.target.value * 1))
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
                  <p>{job.totalDocs} results found </p>
                </div>
                {job.loading === true && job.jobs.length === 0 ? (
                  <div className="row">
                    {["", "", "", "", "", ""].map((num, i) => (
                      <div
                        className="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                        style={{
                          margin: "10px 0",
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                        key={i}
                      >
                        <Skeleton count={1} className="skeleton-card-round" />
                        {/* <Skeleton count={1} className="skeleton-p" />
                        <Skeleton count={1} className="skeleton-price" /> */}
                      </div>
                    ))}
                  </div>
                ) : null}
                <div
                  className="products-list grid row number-col-3 so-filter-gird"
                  // style={{ minHeight: "130px" }}
                >
                  {job.jobs.length > 0
                    ? job.jobs.map((job) => (
                        <Link
                          to={`/job-detail/${job._id}`}
                          className="product-layout col-lg-6 col-md-6 col-sm-6 col-xs-12"
                          key={job._id}
                        >
                          <div className="job-container">
                            <div className="job-image-container">
                              {job.images.length > 0 ? (
                                <img
                                  src={fileURL(job.images[0])}
                                  alt="logo"
                                  width="55"
                                />
                              ) : null}
                            </div>
                            <div className="job-detail">
                              <h5>
                                {job.title && capitalizeFirstLetter(job.title)}
                              </h5>

                              <p>
                                <i className="fa fa-briefcase"></i>{" "}
                                {job.subCategory &&
                                  capitalizeFirstLetter(job.subCategory)}
                              </p>
                              {job.country ? (
                                job.country && (
                                  <p>
                                    <i class="fa fa-map-marker"></i>
                                    {job.country &&
                                      capitalizeFirstLetter(job.country)}
                                  </p>
                                )
                              ) : (
                                <p>
                                  <i class="fa fa-map-marker"></i>
                                  -------
                                </p>
                              )}
                              <p>
                                {" "}
                                <i className="fa fa-money"></i>
                                {job.minSalary > 0 && job.maxSalary > 0
                                  ? job.minSalary +
                                    " - " +
                                    job.maxSalary +
                                    " / " +
                                    job.salaryType
                                  : job.salaryType}
                              </p>
                              <span className="job-type-span">
                                {job.type && capitalizeFirstLetter(job.type)}
                              </span>
                              {job.promoteType.length > 0
                                ? job.promoteType
                                    .filter(
                                      (type) => type.promote === "FEATURED"
                                    )
                                    .map((type) => (
                                      <span className="job-promotion-type">
                                        {type.promote &&
                                          capitalizeFirstLetter(type.promote)}
                                      </span>
                                    ))
                                : null}
                            </div>
                          </div>
                        </Link>
                      ))
                    : null}
                </div>

                <Pagination
                  action={() => callJobsAPI(page, limit, sort)}
                  totalDocs={job.totalDocs}
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
