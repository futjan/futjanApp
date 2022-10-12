import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurpluses } from "../actions/surplusAction";
import Skeleton from "react-loading-skeleton";
import { Link, useLocation } from "react-router-dom";
import { savePreset, getPreset } from "../actions/userAction";
import $ from "jquery";
import "./skeleton.css";

const BusinessCategory = React.lazy(() =>
  import("../../utils/BusinessCategory")
);
const BusinessType = React.lazy(() => import("../../utils/BusinessType"));
const Pagination = React.lazy(() => import("../../utils/Pagination"));
const Ad = React.lazy(() => import("../index/index utils/Ad"));
const AdCommonFilters = React.lazy(() => import("../../utils/AdCommonFilters"));
const SurplusBusinesses = () => {
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
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState("");
  const [keyword, setKeyword] = useState("");
  const [title, setTitle] = useState("");
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
  const preset = useSelector((state) => state.auth.preset);
  useEffect(() => {
    if (state && state.title) {
      setTitle(state.title);
      callSurplusesAPI(page, limit, sort, state.title, "");
    }
  }, [state && state.title]);

  useEffect(() => {
    if (state && state.type) {
      setBusinessType(state.type);
      callSurplusesAPI(page, limit, sort, "", state && state.type);
    }
  }, [state && state.type]);
  console.log(state && state.type, "Business TYPE");
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

  // useEffect
  useEffect(() => {
    dispatch(getPreset());
  }, [user && user._id]);
  // useEffect
  useEffect(() => {
    callSurplusesAPI(page, limit, sort);
  }, [page, sort, limit]);
  // useEffect to run jquery
  useEffect(() => {
    $(".so-filter-heading").on("click", function () {
      if ($(this).find(".fa").hasClass("fa-chevron-down")) {
        $(this)
          .find(".fa-chevron-down")
          .addClass("fa-chevron-right", "slow")
          .removeClass("fa-chevron-down", "slow");
      } else {
        $(this)
          .find(".fa-chevron-right")
          .addClass("fa-chevron-down", "slow")
          .removeClass("fa-chevron-right", "slow");
      }
      $(this).parent().children(".so-filter-content-opts").slideToggle("slow");
    });

    // side bar filers
    $(".open-sidebar").click(function (e) {
      e.preventDefault();
      $(".sidebar-overlay").toggleClass("show");
      $(".sidebar-offcanvas").toggleClass("active");
    });

    $(".sidebar-overlay").click(function (e) {
      e.preventDefault();
      $(".sidebar-overlay").toggleClass("show");
      $(".sidebar-offcanvas").toggleClass("active");
    });
    $("#close-sidebar").click(function () {
      $(".sidebar-overlay").removeClass("show");
      $(".sidebar-offcanvas").removeClass("active");
    });
  }, []);

  // call getSurplusesAction
  const callSurplusesAPI = (
    page,
    lim,
    sortBy,
    tit = title,
    busType = businessType
  ) => {
    dispatch(
      getSurpluses(
        page,
        lim,
        sortBy,
        tit.length > 0 ? tit.toLowerCase().trim() : "",
        busType.toLowerCase(),
        category.toLowerCase(),
        keyword.toLowerCase(),
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
        title.length > 0
          ? title.toLowerCase().trim()
          : titlePreset.toLowerCase().trim(),
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
  const clearState = React.useCallback(() => {
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
    setTitle("");
  });

  const savePresetFunc = React.useCallback(() => {
    const preset = {
      country: countryPreset.name.toLowerCase(),
      city: cityPreset.name.toLowerCase(),
      county: countyPreset.name.toLowerCase(),
      title_surplus: titlePreset.toLowerCase(),
    };
    dispatch(savePreset(preset));
  }, [countryPreset.name, cityPreset.name, countyPreset.name, titlePreset]);
  return (
    <div className="res layout-1 mt-4">
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
                    <AdCommonFilters
                      title={title}
                      setTitle={setTitle}
                      country={country}
                      setCountry={setCountry}
                      county={county}
                      setCounty={setCounty}
                      city={city}
                      setCity={setCity}
                    />
                    <li className="so-filter-options" data-option="search">
                      <div className="so-filter-heading">
                        <div className="so-filter-heading-text">
                          <span>Business Type</span>
                        </div>
                        <i className="fa fa-chevron-down"></i>
                      </div>

                      <div className="so-filter-content-opts">
                        <div className="so-filter-content-opts-container">
                          <div className="so-filter-option" data-type="search">
                            <div className="so-option-container">
                              <div className="input-group w-100">
                                <BusinessType
                                  setBusinessType={setBusinessType}
                                  businessType={businessType}
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
                              <div className="input-group w-100">
                                <BusinessCategory
                                  category={category}
                                  setCategory={setCategory}
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
                {isAuthenticated === true ? (
                  <>
                    <h3
                      className="modtitle"
                      style={{ borderTop: "1px solid #ddd" }}
                    >
                      <span>Surplus Alert</span>
                    </h3>
                    <div className="modcontent">
                      <ul>
                        <AdCommonFilters
                          title={titlePreset}
                          setTitle={setTitlePreset}
                          country={countryPreset}
                          setCountry={setCountryPreset}
                          county={countyPreset}
                          setCounty={setCountyPreset}
                          city={cityPreset}
                          setCity={setCityPreset}
                        />
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
                          Save surplus alert
                        </button>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </aside>
            <div className="open-sidebar hidden-lg hidden-md">
              <i className="fa fa-bars"></i>Sidebar
            </div>
            <div className="products-category  col-md-9 col-sm-12 col-xs-12 p-0">
              <div className="form-group clearfix">
                <h3 className="title-category d-flex justify-content-between align-items-center">
                  <span>Surplus</span>
                  <Link
                    className="clearfix d-flex justify-content-center align-items-center flex-dir-col font-weight-lighter font-size-14"
                    to="/user-panel"
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
                  <div className="row d-flex align-items-center">
                    <div className="col-sm-3 view-mode hidden-sm hidden-xs">
                      {isAuthenticated === true && preset && preset._id ? (
                        <div
                          className="open-sidebar"
                          onClick={() => getSavedAlert()}
                        >
                          GET SAVED ALERT
                        </div>
                      ) : null}
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
                          <option value="">Default</option>
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
                          onChange={(e) => setLimit(e.target.value * 1)}
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
                    {surplusFromStore.totalDocs > 0
                      ? surplusFromStore.totalDocs
                      : 0}{" "}
                    results found{" "}
                  </p>
                </div>
                {surplusFromStore.loading === true &&
                surplusFromStore.surpluses.length === 0 ? (
                  <div className="row">
                    {["", "", "", "", "", ""].map((num, i) => (
                      <div
                        className="col-lg-4 col-md-4 col-sm-6 col-xs-12 my-4"
                        key={num + i}
                      >
                        {["skeleton-card", "skeleton-p", "skeleton-price"].map(
                          (el) => (
                            <Skeleton key={el} count={1} className={el} />
                          )
                        )}
                      </div>
                    ))}
                  </div>
                ) : null}

                <div
                  className="products-list grid row number-col-3 so-filter-gird"
                  style={{ minHeight: "930px" }}
                >
                  {surplusFromStore.surpluses.length > 0
                    ? surplusFromStore.surpluses.map((sur) => (
                        <Ad
                          key={sur._id}
                          sur={sur}
                          type="surplus"
                          cssStyle="ltabs-item col-lg-4 col-md-4 col-sm-4 col-xs-6"
                        />
                      ))
                    : null}
                </div>
                <Pagination
                  action={() => callSurplusesAPI(page, limit, sort)}
                  totalDocs={surplusFromStore.totalDocs}
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
export default React.memo(SurplusBusinesses);
