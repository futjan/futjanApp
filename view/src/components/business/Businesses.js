import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ad from "../index/index utils/Ad";
import { getBusinesses } from "../actions/businessAction";
import Skeleton from "react-loading-skeleton";
import Countries from "../../utils/Countries";
import County from "../../utils/County";
import Cities from "../../utils/cities";
import BusinessType from "../../utils/BusinessType";
import { Link, useLocation } from "react-router-dom";
import { savePreset, getPreset } from "../actions/userAction";
import $ from "jquery";
import Pagination from "../../utils/Pagination";
import "../surplusBusiness/skeleton.css";
const Businesses = () => {
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
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState("");
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
  const businessFromStore = useSelector((state) => state.business);
  const preset = useSelector((state) => state.auth.preset);
  useEffect(() => {
    if (state && state.title) {
      setTitle(state.title);
      callBusinessAPI(page, limit, sort);
    }
  }, [state && state.title]);
  useEffect(() => {
    if (preset && preset._id) {
      setTitlePreset(preset.title_business);
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
    callBusinessAPI(page, limit, sort);
  }, []);

  useEffect(() => {
    callBusinessAPI(page, limit, sort);
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

  // call getBusinessesAction
  const callBusinessAPI = (page, lim, sortBy) => {
    dispatch(
      getBusinesses(
        page,
        lim,
        sortBy,
        title.length > 0 ? title.toLowerCase().trim() : "",
        businessType.toLowerCase(),
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
      getBusinesses(
        page,
        limit,
        sort,
        title.length > 0
          ? title.toLowerCase().trim()
          : titlePreset.toLowerCase().trim(),
        businessType.toLowerCase(),
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
    setCountry({ name: "", isoCode: "" });
    setCounty({ name: "", isoCode: "" });
    setTitlePreset("");
    setCityPreset({ name: "", countryCode: "", stateCode: "" });
    setCountryPreset({ name: "", isoCode: "", phonecode: "" });
    setCountyPreset({ name: "", isoCode: "" });
    setTitle("");
  };
  const savePresetFunc = () => {
    const preset = {
      country: countryPreset.name.toLowerCase(),
      city: cityPreset.name.toLowerCase(),
      county: countyPreset.name.toLowerCase(),
      title_business: titlePreset.toLowerCase(),
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
                                  placeholder="title"
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
                              <div
                                className="input-group"
                                style={{ width: "100%" }}
                              >
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
                  </ul>
                  <div className="clear_filter">
                    <button
                      className="btn btn-default inverse"
                      id="btn_resetAll"
                      onClick={() => callBusinessAPI(page, limit, sort)}
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
                      <span>Business Alert</span>
                    </h3>
                    <div className="modcontent">
                      <ul>
                        {" "}
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
                          Save business alert
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
                  <span>Business</span>
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
                    {businessFromStore.totalDocs > 0
                      ? businessFromStore.totalDocs
                      : 0}{" "}
                    results found{" "}
                  </p>
                </div>
                {businessFromStore.loading === true &&
                businessFromStore.businesses.length === 0 ? (
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
                  {businessFromStore.businesses.length > 0
                    ? businessFromStore.businesses.map((sur) => (
                        <Ad
                          key={sur._id}
                          sur={sur}
                          type="business"
                          cssStyle="ltabs-item col-lg-4 col-md-4 col-sm-4 col-xs-6"
                        />
                      ))
                    : null}
                </div>
                <Pagination
                  action={() => callBusinessAPI(page, limit, sort)}
                  totalDocs={businessFromStore.totalDocs}
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
export default Businesses;