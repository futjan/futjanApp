import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import surplusImageSkeleton from "../image/catalog/demo/food/1.jpg";
import { getSurpluses, getSurplusNames } from "../actions/surplusAction";
import Skeleton from "react-loading-skeleton";
import cities from "../../utils/cities";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

import $ from "jquery";

import "./skeleton.css";
const SurplusBusinesses = () => {
  const [businessType, setBusinessType] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [sort, setSort] = useState("");
  const [name, setName] = useState("");
  const [suggustion, setSuggustion] = useState([]);
  const [suggustionCities, setSuggustionCities] = useState([]);
  // const [lessThanPrice, setLessThanPrice] = useState("");
  // const [greaterThanPrice, setGreaterThanPrice] = useState("");

  // initialize hooks
  const dispatch = useDispatch();
  // get state from store
  const surplusFromStore = useSelector((state) => state.surplus);
  // useEffect
  useEffect(() => {
    dispatch(
      getSurpluses(
        page,
        limit,
        sort,
        businessType.toLowerCase(),
        category.toLowerCase(),
        name.toLowerCase(),
        city.toLowerCase()
      )
    );
  }, []);

  useEffect(() => {
    dispatch(getSurplusNames());
  }, []);

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
  const callSurplusesAPI = (page, lim, sortBy) => {
    dispatch(
      getSurpluses(
        page,
        lim,
        sortBy,
        businessType.toLowerCase(),
        category.toLowerCase(),
        name.toLowerCase(),
        city.toLowerCase()
      )
    );
  };
  // clear State
  const clearState = () => {
    setCity("");
    setBusinessType("");
    setCategory("");
  };

  // pagination UI
  let paginationUI = [];
  while (paginationUI.length <= surplusFromStore.totalDocs / limit) {
    paginationUI.push("");
  }

  // autoComplete function
  const onChangeAutoFieldCities = (e) => {
    const value = e.target.value;
    let suggustions = [];
    if (value.trim().length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggustions = cities.sort().filter((v) => regex.test(v));
    }
    setCity(value);
    setSuggustionCities([...suggustions]);
  };
  const onChangeAutoFieldName = (e) => {
    const value = e.target.value;
    let suggustions = [];
    if (value.trim().length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      if (surplusFromStore.names.length > 0) {
        suggustions = surplusFromStore.names

          .map((v) => v.name)
          .sort()
          .filter((v) => regex.test(v));
      }
    }
    setName(value);

    setSuggustion([...suggustions]);
  };
  const renderNameSuggustion = () => {
    if (suggustion.length === 0) {
      return null;
    }
    return (
      <ul className="autoComplete-ul" style={{ width: "90%", top: "40px" }}>
        {suggustion.map((co) => (
          <li
            className="autoComplete-li"
            onClick={() => {
              setName(co);
              setSuggustion([]);
            }}
            style={{ display: "block", width: "100%" }}
          >
            {co}
          </li>
        ))}
      </ul>
    );
  };
  const renderCitySuggustion = () => {
    if (suggustionCities.length === 0) {
      return null;
    }
    return (
      <ul className="autoComplete-ul" style={{ width: "90%", top: "40px" }}>
        {suggustionCities.map((co) => (
          <li
            className="autoComplete-li"
            onClick={() => {
              setCity(co);
              setSuggustionCities([]);
            }}
            style={{ display: "block", width: "100%" }}
          >
            {co}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="res layout-1" style={{ marginTop: "30px" }}>
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
                    <li class="so-filter-options" data-option="search">
                      <div class="so-filter-heading">
                        <div class="so-filter-heading-text">
                          <span>Name</span>
                        </div>
                        <i class="fa fa-chevron-down"></i>
                      </div>

                      <div class="so-filter-content-opts">
                        <div class="so-filter-content-opts-container">
                          <div class="so-filter-option" data-type="search">
                            <div class="so-option-container">
                              <div
                                class="input-group"
                                style={{ width: "100%" }}
                              >
                                <input
                                  type="text"
                                  class="form-control"
                                  name="text_search"
                                  id="text_search"
                                  value={name}
                                  onChange={(e) => onChangeAutoFieldName(e)}
                                />
                                {renderNameSuggustion()}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="so-filter-options" data-option="search">
                      <div class="so-filter-heading">
                        <div class="so-filter-heading-text">
                          <span>City</span>
                        </div>
                        <i class="fa fa-chevron-down"></i>
                      </div>

                      <div class="so-filter-content-opts">
                        <div class="so-filter-content-opts-container">
                          <div class="so-filter-option" data-type="search">
                            <div class="so-option-container">
                              <div
                                class="input-group"
                                style={{ width: "100%" }}
                              >
                                <input
                                  type="text"
                                  class="form-control"
                                  name="text_search"
                                  id="text_search"
                                  value={city}
                                  onChange={(e) => onChangeAutoFieldCities(e)}
                                />
                                {renderCitySuggustion()}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="so-filter-options" data-option="search">
                      <div className="so-filter-heading">
                        <div className="so-filter-heading-text">
                          <span>Type</span>
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
                                <select
                                  className="form-control"
                                  onChange={(e) =>
                                    setBusinessType(e.target.value)
                                  }
                                  value={businessType}
                                >
                                  <option value="">Choose type</option>
                                  <option value="Bakery">Bakery</option>
                                  <option value="Beverage Shop">
                                    Beverage Shop
                                  </option>
                                  <option value="Convenience store">
                                    Convenience store
                                  </option>
                                  <option value="Cafe">Cafe</option>
                                  <option value="Fruit/Vegetable store">
                                    Fruit/Vegetable store
                                  </option>
                                  <option value="Hotel">Hotel</option>
                                  <option value="Pastry shop">
                                    Pastry shop
                                  </option>
                                  <option value="Producers/Manufacturers">
                                    Producers/Manufacturers
                                  </option>
                                  <option value="Restaurant">Restaurant</option>
                                  <option value="Supermarkets">
                                    Supermarkets
                                  </option>
                                  <option value="Takeaway">Takeaway</option>
                                  <option value="Wholesalers">
                                    Wholesalers
                                  </option>
                                  <option value="Other">Other </option>
                                </select>
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
                                <select
                                  className="form-control"
                                  onChange={(e) => setCategory(e.target.value)}
                                  value={category}
                                >
                                  <option value="">Choose Category</option>
                                  <option value="Baked Goods">
                                    Baked Goods
                                  </option>
                                  <option value="Groceries">Groceries</option>
                                  <option value="Meals">Meals</option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* <li className="so-filter-options" data-option="search">
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
                                <input
                                  type="text"
                                  className="form-control"
                                  value={city}
                                  onChange={(e) => setCity(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li> */}
                    {/* <li className="so-filter-options" data-option="Price">
                      <div className="so-filter-heading">
                        <div className="so-filter-heading-text">
                          <span>Price</span>
                        </div>
                        <i className="fa fa-chevron-down"></i>
                      </div>
                      <div className="so-filter-content-opts">
                        <div className="so-filter-content-opts-container">
                          <div className="so-filter-content-wrapper so-filter-iscroll">
                            <div className="so-filter-options">
                              <div className="so-filter-option so-filter-price">
                                <div className="content_min_max">
                                  <div className="put-min put-min_max">
                                    ${" "}
                                    <input
                                      type="number"
                                      className="input_min form-control"
                                      value={lessThanPrice}
                                      onChange={(e) =>
                                        setLessThanPrice(e.target.value * 1)
                                      }
                                      min="0"
                                      // max="1202"
                                    />
                                  </div>
                                  <div className="put-max put-min_max">
                                    ${" "}
                                    <input
                                      type="number"
                                      className="input_max form-control"
                                      value="1202"
                                      min="74"
                                      max="1202"
                                    />
                                  </div>
                                </div>
                                <div className="content_scroll">
                                  <div
                                    id="slider-range"
                                    className="noUi-target noUi-ltr noUi-horizontal noUi-background"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li> */}
                  </ul>
                  <div className="clear_filter">
                    <a
                      href="javascript:;"
                      className="btn btn-default inverse"
                      id="btn_resetAll"
                      onClick={() => callSurplusesAPI(page, limit, sort)}
                    >
                      <span
                        className="hidden fa fa-times"
                        aria-hidden="true"
                      ></span>{" "}
                      Search
                    </a>

                    <a
                      href="javascript:;"
                      className="btn btn-default inverse"
                      id="btn_resetAll"
                      onClick={() => clearState()}
                    >
                      <span
                        className="hidden fa fa-times"
                        aria-hidden="true"
                      ></span>{" "}
                      Reset All
                    </a>
                  </div>
                </div>
              </div>
            </aside>
            <a
              href="javascript:void(0)"
              class="open-sidebar hidden-lg hidden-md"
            >
              <i class="fa fa-bars"></i>Sidebar
            </a>
            <div
              className="products-category  col-md-9 col-sm-12 col-xs-12"
              style={{ padding: "0" }}
            >
              <div className="form-group clearfix">
                <h3 className="title-category ">Surplus</h3>
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
                        <span>{category.length > 0 ? category : "All"}</span>
                      </h4>
                      {/* <div className="list-view">
                        <button
                          className="btn btn-default grid active"
                          data-view="grid"
                          data-toggle="tooltip"
                          data-original-title="Grid"
                        >
                          <i className="fa fa-th"></i>
                        </button>
                        <button
                          className="btn btn-default list"
                          data-view="list"
                          data-toggle="tooltip"
                          data-original-title="List"
                        >
                          <i className="fa fa-th-list"></i>
                        </button>
                      </div> */}
                    </div>

                    <div className="short-by-show form-inline text-right col-md-9  col-sm-11">
                      <div className="form-group short-by">
                        <label className="control-label" for="input-sort">
                          Sort By:
                        </label>
                        <select
                          id="input-sort"
                          className="form-control"
                          value={sort}
                          onChange={(e) => {
                            setSort(e.target.value);
                            callSurplusesAPI(page, limit, e.target.value);
                          }}
                        >
                          <option value="" selected="selected">
                            Default
                          </option>

                          <option value="originalPrice">
                            Original Price (Low &gt; High)
                          </option>
                          <option value="-originalPrice">
                            Original Price (High &gt; Low)
                          </option>

                          <option value="offeredPrice">
                            Offered Price (Low &gt; High)
                          </option>
                          <option value="-offeredPrice">
                            Offered Price (High &gt; Low)
                          </option>
                          <option value="discount">
                            Discount (Low &gt; High)
                          </option>
                          <option value="-discount">
                            Discount (High &gt; Low)
                          </option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="control-label" for="input-limit">
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
                              callSurplusesAPI(
                                Math.ceil(
                                  surplusFromStore.totalDocs /
                                    (e.target.value * 1)
                                ),
                                e.target.value * 1,
                                sort
                              );
                            } else {
                              setLimit(e.target.value * 1);
                              callSurplusesAPI(page, e.target.value, sort);
                            }
                          }}
                        >
                          {/* <option value="" selected="selected">
                            1
                          </option> */}
                          <option value="5">5</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                      {/* <div className="form-group product-compare">
                        <a
                          id="compare-total"
                          className="btn btn-default"
                          onClick={() => callSurplusesAPI()}
                        >
                          Search
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
                {surplusFromStore.loading === true ? (
                  <div className="row">
                    {["", "", "", "", "", ""].map((num) => (
                      <div
                        className="col-lg-4 col-md-4 col-sm-6 col-xs-12"
                        style={{ margin: "20px 0" }}
                      >
                        <Skeleton count={1} className="skeleton-card" />
                        <Skeleton count={1} className="skeleton-p" />
                        <Skeleton count={1} className="skeleton-price" />
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="products-list grid row number-col-3 so-filter-gird">
                  {surplusFromStore.surpluses.length > 0
                    ? surplusFromStore.surpluses.map((sur) => (
                        <div className="product-layout col-lg-4 col-md-4 col-sm-6 col-xs-6">
                          <div className="product-item-container">
                            <div className="left-block">
                              <div className="product-image-container  second_img  ">
                                <a
                                  href="#"
                                  title="Lorem Ipsum dolor at vero eos et iusto odi  with Premium "
                                >
                                  <img
                                    src={surplusImageSkeleton}
                                    alt="Lorem Ipsum dolor at vero eos et iusto odi  with Premium "
                                    title="Lorem Ipsum dolor at vero eos et iusto odi  with Premium "
                                    className="img-1 img-responsive"
                                  />
                                  <img
                                    src={surplusImageSkeleton}
                                    alt="Lorem Ipsum dolor at vero eos et iusto odi  with Premium "
                                    title="Lorem Ipsum dolor at vero eos et iusto odi  with Premium "
                                    className="img-2 img-responsive"
                                  />
                                </a>
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
                                  <Link to={`/surplus-detail/${sur._id}`}>
                                    {sur.description &&
                                    sur.description.length > 50
                                      ? sur.description.substring(0, 50) + "..."
                                      : sur.description}
                                  </Link>
                                </h4>
                                <div className="total-price">
                                  <div className="price price-left">
                                    {sur.originalPrice &&
                                    sur.offeredPrice > 0 ? (
                                      <span className="price-new">
                                        ${sur.offeredPrice}
                                      </span>
                                    ) : (
                                      <span className="price-new">
                                        ${sur.originalPrice}
                                      </span>
                                    )}{" "}
                                    {sur.originalPrice &&
                                    sur.offeredPrice > 0 ? (
                                      <span className="price-old">
                                        ${sur.originalPrice}
                                      </span>
                                    ) : null}
                                  </div>
                                  {sur.discount && sur.discount > 0 ? (
                                    <div className="price-sale price-right">
                                      <span className="discount">
                                        -{sur.discount}%<strong>OFF</strong>
                                      </span>
                                    </div>
                                  ) : null}
                                </div>
                                {/* <div className="description item-desc hidden">
                                  <p>
                                    The 30-inch Apple Cinema HD Display delivers
                                    an amazing 2560 x 1600 pixel resolution.
                                    Designed specifically for the creative
                                    professional, this display provides more
                                    space for easier access to all the..{" "}
                                  </p>
                                </div> */}
                                {/* <div className="list-block hidden">
                                  <button
                                    className="addToCart"
                                    type="button"
                                    data-toggle="tooltip"
                                    title=""
                                    onclick="cart.add('30 ', '1 ');"
                                    data-original-title="Add to Cart "
                                  >
                                    <span>Add to Cart </span>
                                  </button>
                                  <button
                                    className="wishlist btn-button"
                                    type="button"
                                    data-toggle="tooltip"
                                    title=""
                                    onclick="wishlist.add('30 ');"
                                    data-original-title="Add to Wish List "
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </button>
                                  <button
                                    className="compare btn-button"
                                    type="button"
                                    data-toggle="tooltip"
                                    title=""
                                    onclick="compare.add('30 ');"
                                    data-original-title="Compare this Product "
                                  >
                                    <i className="fa fa-retweet"></i>
                                  </button>
                                </div> */}
                              </div>
                              {/* <div className="button-group">
                                <a
                                  className="quickview iframe-link visible-lg btn-button"
                                  data-fancybox-type="iframe"
                                  href="quickview.html"
                                >
                                  {" "}
                                  <i className="fa fa-search"></i>{" "}
                                </a>
                                <button
                                  className="wishlist btn-button"
                                  type="button"
                                  data-toggle="tooltip"
                                  title=""
                                  onclick="wishlist.add('105');"
                                  data-original-title="Add to Wish List"
                                >
                                  <i className="fa fa-heart-o"></i>
                                </button>
                                <button
                                  className="compare btn-button"
                                  type="button"
                                  data-toggle="tooltip"
                                  title=""
                                  onclick="compare.add('105');"
                                  data-original-title="Compare this Product"
                                >
                                  <i className="fa fa-retweet"></i>
                                </button>
                                <button
                                  className="addToCart btn-button"
                                  type="button"
                                  data-toggle="tooltip"
                                  title=""
                                  onclick="cart.add('105', '2');"
                                  data-original-title="Add to Cart"
                                >
                                  <span className="hidden">Add to Cart </span>
                                </button>
                              </div> */}
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
                              callSurplusesAPI(page - 1, limit, sort);
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
                                  callSurplusesAPI(i + 1, limit, sort);
                                }}
                              >
                                <span>{i + 1}</span>
                              </li>
                            )
                          )
                        : null}
                      {paginationUI.length > 5 ? (
                        <li
                          onClick={() => {
                            if (page <= surplusFromStore.totalDocs / limit) {
                              setPage(page + 1);
                              callSurplusesAPI(page + 1, limit, sort);
                            }
                          }}
                        >
                          <a href="#">&gt;</a>
                        </li>
                      ) : null}
                      {/* <li className="active">
                        <span>1</span>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">&gt;</a>
                      </li>
                      <li>
                        <a href="#">&gt;|</a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="col-sm-6 text-right">
                    Showing {page * limit - limit + 1} to{" "}
                    {(page - 1) * limit + limit > surplusFromStore.totalDocs
                      ? surplusFromStore.totalDocs
                      : (page - 1) * limit + limit}{" "}
                    of {surplusFromStore.totalDocs} ({page} Pages)
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
export default SurplusBusinesses;
