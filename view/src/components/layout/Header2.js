import React, { useState, useEffect } from "react";
import LOGO from "../image/logo2.jpeg";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { City } from "country-state-city";
import { logoutUser } from "../actions/authAction";
import { getSurplusKeywords } from "../actions/surplusAction";

const Header2 = () => {
  const [keyword, setKeyword] = useState("");
  const [suggustion, setSuggustion] = useState([]);
  const [city, setCity] = useState("");
  const [suggustionCities, setSuggustionCities] = useState([]);
  // initialize hooks
  const dispatch = useDispatch();
  // get state from store
  const surplusFromStore = useSelector((state) => state.surplus);
  const auth = useSelector((state) => state.auth);
  // useEffect
  useEffect(() => {
    dispatch(getSurplusKeywords());
  }, []);

  // show side navbar
  const showSideNavBar = (id) => {
    const humburgerMenuIcon = document.getElementById(`${id}`);
    if (humburgerMenuIcon) {
      humburgerMenuIcon.classList.toggle("so-megamenu-active");
    }
  };
  // close side navBar onclick on cross icon
  const closeSideNavBar = (id) => {
    const humburgerMenuIcon = document.getElementById(`${id}`);
    if (humburgerMenuIcon) {
      humburgerMenuIcon.classList.remove("so-megamenu-active");
    }
  };

  // show sub menu
  const subMenu = () => {
    if (
      document.getElementById("sub-menu") &&
      document.getElementById("sub-menu-content")
    )
      document.getElementById("sub-menu").classList.toggle("d-none");
    document.getElementById("sub-menu-content").classList.toggle("d-none");
  };

  // cities
  const onChangeAutoFieldCities = (e) => {
    const value = e.target.value;
    let suggustions = [];
    if (value.trim().length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggustions = City.getAllCities()
        .sort()
        .filter((v) => regex.test(v.name))
        .map((cit) => {
          return { name: cit.name, countryCode: cit.countryCode };
        });
    }
    setCity(value);
    setSuggustionCities([...suggustions]);
  };
  const renderCitySuggustion = () => {
    if (suggustionCities.length === 0) {
      return null;
    }
    return (
      <ul
        className="autoComplete-ul"
        style={{ top: "40px", left: "0", width: "100%" }}
      >
        {suggustionCities.map((co) => (
          <li
            className="autoComplete-li"
            onClick={() => {
              setCity(co.name);
              setSuggustionCities([]);
            }}
          >
            {co.name}
          </li>
        ))}
      </ul>
    );
  };
  // keyword
  const onChangeAutoFieldName = (e) => {
    const value = e.target.value;
    let suggustions = [];
    if (value.trim().length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      if (surplusFromStore.keywords.length > 0) {
        suggustions = surplusFromStore.keywords

          .map((v) => v.keyword)
          .filter(
            (keyword, i, keywordArray) => keywordArray.indexOf(keyword) === i
          )
          .sort()
          .filter((v) => regex.test(v));
      }
    }
    setKeyword(value);

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
            onClick={() => {
              setKeyword(co);
              setSuggustion([]);
            }}
          >
            <Link
              to="/surplus"
              className="autoComplete-li"
              state={{ keyword: co }}
            >
              {co}
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  return (
    // <!-- Header Container  -->
    <header id="header" class="typeheader-4">
      {/* <!-- Header Top --> */}

      <div class="header-top hidden-compact">
        <div class="container">
          <div class="row">
            <div class="header-top-left  col-lg-6  col-sm-8 col-md-6 col-xs-8">
              <div class="list-contact">
                <span class="hidden-xs"> welcome to FUTJAN! </span>{" "}
                <Link class="link-lg" to="/signup">
                  Join Free
                </Link>{" "}
                or{" "}
                <Link class="link-lg" to="/login">
                  Sign in
                </Link>
              </div>
            </div>
            <div class="header-top-right collapsed-block col-lg-6 col-sm-4 col-md-6 col-xs-4 ">
              <div class="tabBlock" id="TabBlock-1">
                <ul class="top-link list-inline">
                  <li>
                    <div class="pull-left">
                      <form
                        // action="#"
                        // method="post"
                        // enctype="multipart/form-data"
                        id="form-language"
                      >
                        <div class="btn-group">
                          <button
                            class="btn-link dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <svg
                              // xmlns="http://www.w3.org/2000/svg"
                              // xmlns:xlink="http://www.w3.org/1999/xlink"
                              id="flag-icons-in"
                              viewBox="0 0 640 480"
                              style={{ width: "14px", marginRight: "5px" }}
                            >
                              <path fill="#f93" d="M0 0h640v160H0z" />
                              <path fill="#fff" d="M0 160h640v160H0z" />
                              <path fill="#128807" d="M0 320h640v160H0z" />
                              <g transform="matrix(3.2 0 0 3.2 320 240)">
                                <circle r="20" fill="#008" />
                                <circle r="17.5" fill="#fff" />
                                <circle r="3.5" fill="#008" />
                                <g id="d">
                                  <g id="c">
                                    <g id="b">
                                      <g id="a" fill="#008">
                                        <circle
                                          r=".9"
                                          transform="rotate(7.5 -8.8 133.5)"
                                        />
                                        <path d="M0 17.5.6 7 0 2l-.6 5L0 17.5z" />
                                      </g>
                                      <use
                                        // xlink:href="#a"
                                        width="100%"
                                        height="100%"
                                        transform="rotate(15)"
                                      />
                                    </g>
                                    <use
                                      // xlink:href="#b"
                                      width="100%"
                                      height="100%"
                                      transform="rotate(30)"
                                    />
                                  </g>
                                  <use
                                    // xlink:href="#c"
                                    width="100%"
                                    height="100%"
                                    transform="rotate(60)"
                                  />
                                </g>
                                <use
                                  // xlink:href="#d"
                                  width="100%"
                                  height="100%"
                                  transform="rotate(120)"
                                />
                                <use
                                  // xlink:href="#d"
                                  width="100%"
                                  height="100%"
                                  transform="rotate(-120)"
                                />
                              </g>
                            </svg>
                            <span class="hidden-xs hidden-sm hidden-md">
                              India
                            </span>
                            {/* &nbsp;<i class="fa fa-angle-down"></i> */}
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <button
                                class="btn-block language-select"
                                type="button"
                                name="ar-ar"
                              >
                                <svg
                                  // xmlns="http://www.w3.org/2000/svg"
                                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                                  id="flag-icons-in"
                                  viewBox="0 0 640 480"
                                >
                                  <path fill="#f93" d="M0 0h640v160H0z" />
                                  <path fill="#fff" d="M0 160h640v160H0z" />
                                  <path fill="#128807" d="M0 320h640v160H0z" />
                                  <g transform="matrix(3.2 0 0 3.2 320 240)">
                                    <circle r="20" fill="#008" />
                                    <circle r="17.5" fill="#fff" />
                                    <circle r="3.5" fill="#008" />
                                    <g id="d">
                                      <g id="c">
                                        <g id="b">
                                          <g id="a" fill="#008">
                                            <circle
                                              r=".9"
                                              transform="rotate(7.5 -8.8 133.5)"
                                            />
                                            <path d="M0 17.5.6 7 0 2l-.6 5L0 17.5z" />
                                          </g>
                                          <use
                                            // xlink:href="#a"
                                            width="100%"
                                            height="100%"
                                            transform="rotate(15)"
                                          />
                                        </g>
                                        <use
                                          // xlink:href="#b"
                                          width="100%"
                                          height="100%"
                                          transform="rotate(30)"
                                        />
                                      </g>
                                      <use
                                        // xlink:href="#c"
                                        width="100%"
                                        height="100%"
                                        transform="rotate(60)"
                                      />
                                    </g>
                                    <use
                                      // xlink:href="#d"
                                      width="100%"
                                      height="100%"
                                      transform="rotate(120)"
                                    />
                                    <use
                                      // xlink:href="#d"
                                      width="100%"
                                      height="100%"
                                      transform="rotate(-120)"
                                    />
                                  </g>
                                </svg>
                                Arabic
                              </button>
                            </li>
                            <li>
                              <button
                                class="btn-block language-select"
                                type="button"
                                name="en-gb"
                              >
                                <img
                                  src="image/catalog/flags/gb.png"
                                  alt="English"
                                  title="English"
                                />{" "}
                                English
                              </button>
                            </li>
                          </ul>
                        </div>
                        <input type="hidden" name="code" value="" />
                        <input type="hidden" name="redirect" value="#" />
                      </form>
                    </div>
                  </li>
                  <li class="currency">
                    <div class="pull-left">
                      <form
                        // action="#"
                        // method="post"
                        // enctype="multipart/form-data"
                        id="form-currency"
                      >
                        <div class="btn-group">
                          <button
                            class="btn-link dropdown-toggle"
                            // data-toggle="dropdown"
                          >
                            ₹<span class="hidden-xs"> Rupee</span>
                            {/* <i class="fa fa-angle-down"></i> */}
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <button
                                class="currency-select btn-block"
                                type="button"
                                name="EUR"
                              >
                                ₹ Rupee
                              </button>
                            </li>
                          </ul>
                        </div>
                        <input type="hidden" name="code" value="" />
                        <input type="hidden" name="redirect" value="#" />
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- //Header Top -->
    <!-- Header center --> */}
      <div class="header-center">
        <div class="container">
          <div class="row">
            <div class="navbar-logo col-lg-3 col-md-2 col-xs-12 col-sm-3">
              <Link
                to="/"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  alt="Your Store"
                  style={{ width: "30px", height: "40px" }}
                  title="Your Store"
                  src={LOGO}
                />
                <h3 className="logo-heading">
                  FUTJ<span>AN</span>
                </h3>
              </Link>
            </div>
            <div class="header-center-right col-lg-6 col-md-7 col-sm-8 col-xs-11">
              <div class="header_search">
                <div id="sosearchpro" class="sosearchpro-wrapper so-search ">
                  <form method="GET" action="#">
                    <div
                      id="search0"
                      class="search d-grid input-group form-group"
                    >
                      <input
                        class="autosearch-input form-control"
                        type="text"
                        value={keyword}
                        onChange={(e) => onChangeAutoFieldName(e)}
                        autocomplete="off"
                        placeholder="eg Restaurant, Jobs, Business, Stock "
                        name="search"
                      />
                      {renderNameSuggustion()}
                      <div
                        class="select_category filter_type  icon-select"
                        // style={{ display: "none" }}
                      >
                        <input
                          className="form-control no-border"
                          name="category_id"
                          placeholder="Location"
                          onChange={(e) => onChangeAutoFieldCities(e)}
                          value={city}
                          style={{
                            width: "100%",
                            height: "100%",
                            background: "#fff",
                            paddingLeft: "0",
                          }}
                        />
                        {renderCitySuggustion()}
                      </div>
                      <span class="input-group-btn">
                        <Link
                          to="/surplus"
                          class="button-search btn btn-default btn-lg"
                          name="submit_search"
                          state={{ keyword, city }}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <i class="fa fa-search"></i>
                          <span class="hidden">Search</span>
                        </Link>
                      </span>
                      <div
                        className="megamenu-style-dev megamenu-dev mobile-burger-menu-show"
                        style={{ display: "none" }}
                      >
                        <div className="responsive">
                          <nav className="navbar-default">
                            <div className="container-megamenu horizontal">
                              <div className="navbar-header">
                                <button
                                  type="button"
                                  id="show-megamenu"
                                  data-toggle="collapse"
                                  className="navbar-toggle"
                                  onClick={() =>
                                    showSideNavBar("megamenu-wrapper-1")
                                  }
                                >
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                                </button>
                              </div>
                              <div
                                className="megamenu-wrapper"
                                id="megamenu-wrapper-1"
                              >
                                <span
                                  id="remove-megamenu"
                                  className="fa fa-times"
                                  onClick={() =>
                                    closeSideNavBar("megamenu-wrapper-1")
                                  }
                                ></span>
                                <div className="megamenu-pattern">
                                  <div className="container">
                                    <ul
                                      className="megamenu"
                                      data-transition="slide"
                                      data-animationtime="500"
                                    >
                                      <li className="full-width menu-home with-sub-menu hover">
                                        <p className="close-menu"></p>

                                        <NavLink
                                          className="clearfix"
                                          to="/user-panel"
                                          state={{ active: "ADD" }}
                                          style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "column",
                                          }}
                                        >
                                          <i
                                            className="fa fa-thumb-tack"
                                            style={{
                                              fontSize: "20px",
                                              padding: "0",
                                            }}
                                          ></i>
                                          <strong>Post Ad</strong>
                                        </NavLink>
                                      </li>
                                      {auth.isAuthenticated !== true ? (
                                        <li className="full-width menu-home with-sub-menu hover">
                                          <p className="close-menu"></p>

                                          <NavLink
                                            className="clearfix"
                                            to="/login"
                                            style={{
                                              display: "flex",
                                              justifyContent: "center",
                                              alignItems: "center",
                                              flexDirection: "column",
                                            }}
                                            // onClick={() => closeSideNavBar()}
                                          >
                                            {" "}
                                            <i
                                              className="fa fa-user"
                                              style={{
                                                fontSize: "20px",
                                                padding: "0",
                                              }}
                                            ></i>
                                            <strong>Login</strong>
                                          </NavLink>
                                        </li>
                                      ) : null}
                                      {auth.isAuthenticated === true ? (
                                        <li className="full-width menu-home with-sub-menu hover menu-link">
                                          <p className="close-menu"></p>

                                          <div
                                            className="clearfix"
                                            style={{
                                              display: "flex",
                                              justifyContent: "center",
                                              alignItems: "center",
                                              flexDirection: "column",
                                            }}
                                            onClick={() => subMenu()}
                                          >
                                            {" "}
                                            <i
                                              className="fa fa-bars"
                                              style={{
                                                fontSize: "20px",
                                                padding: "0",
                                              }}
                                            ></i>
                                            <strong>Menu</strong>
                                            <b class="caret"></b>
                                          </div>
                                          <div
                                            class="sub-menu"
                                            style={{ width: "100%" }}
                                            id="sub-menu"
                                          >
                                            <div
                                              class="content"
                                              id="sub-menu-content"
                                            >
                                              <div>
                                                <ul class="row-list">
                                                  <li>
                                                    <Link
                                                      class="subcategory_item"
                                                      to="/user-panel"
                                                      state={{
                                                        active: "ACCOUNT",
                                                      }}
                                                    >
                                                      <i
                                                        className="fa fa-user"
                                                        // style={{ fontSize: "20px", padding: "0" }}
                                                      ></i>{" "}
                                                      My Account
                                                    </Link>
                                                  </li>
                                                  <li>
                                                    <Link
                                                      class="subcategory_item"
                                                      to="/user-panel"
                                                      state={{
                                                        active: "SURPLUS",
                                                      }}
                                                    >
                                                      <i className="fa fa-archive"></i>{" "}
                                                      My Ad
                                                    </Link>
                                                  </li>
                                                  <li>
                                                    <Link
                                                      class="subcategory_item"
                                                      to="/user-panel"
                                                      state={{ active: "ADD" }}
                                                    >
                                                      <i className="fa fa-archive"></i>{" "}
                                                      Post ad
                                                    </Link>
                                                  </li>
                                                  <li>
                                                    <Link
                                                      class="subcategory_item"
                                                      to="/user-panel"
                                                      state={{
                                                        active: "MESSAGE",
                                                      }}
                                                    >
                                                      <i
                                                        className="fa fa-envelope"
                                                        // style={{ fontSize: "20px", padding: "0" }}
                                                      ></i>{" "}
                                                      Message
                                                    </Link>
                                                  </li>
                                                  <li>
                                                    <Link
                                                      class="subcategory_item"
                                                      to="/user-panel"
                                                      state={{
                                                        active: "ALERT",
                                                      }}
                                                    >
                                                      <i className="fa fa-bell"></i>
                                                      My Alerts
                                                    </Link>
                                                  </li>
                                                  <li>
                                                    <Link
                                                      class="subcategory_item"
                                                      to="/user-panel"
                                                      state={{
                                                        active: "FAVOURITE",
                                                      }}
                                                    >
                                                      <i
                                                        className="fa fa-heart"
                                                        // style={{ fontSize: "20px", padding: "0" }}
                                                      ></i>{" "}
                                                      My Favourites
                                                    </Link>
                                                  </li>
                                                  <li>
                                                    <Link
                                                      class="subcategory_item"
                                                      to="/user-panel"
                                                    >
                                                      <i
                                                        className="fa fa-question-circle"
                                                        // style={{ fontSize: "20px", padding: "0" }}
                                                      ></i>{" "}
                                                      Help
                                                    </Link>
                                                  </li>
                                                  <li>
                                                    <Link
                                                      class="subcategory_item"
                                                      to="/"
                                                      onClick={() =>
                                                        dispatch(logoutUser())
                                                      }
                                                    >
                                                      <i
                                                        className="fa fa-power-off"
                                                        // style={{ fontSize: "20px", padding: "0" }}
                                                      ></i>
                                                      Logout
                                                    </Link>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      ) : null}
                                      {/* {auth.isAuthenticated === true ? (
                                <li className="full-width menu-home with-sub-menu hover">
                                  <p className="close-menu"></p>
                                  <a
                                    className="clearfix"
                                   
                                  >
                                    <strong>LOGOUT</strong>
                                    <span className="labelopencart"></span>
                                  </a>
                                </li>
                              ) : null} */}

                                      {/* <li className="deal-h5 hidden">
                              <p className="close-menu"></p>
                              <a href="#" className="clearfix">
                                <strong>
                                  <img src="image/catalog/demo/menu/hot-block.png" alt="">Buy This Theme! 
                                </strong>
                              </a>
                            </li> */}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <input type="hidden" name="route" value="product/search" />
                  </form>
                </div>
              </div>
            </div>
            <div
              class="header-cart-phone col-lg-3 col-md-3 col-sm-1 col-xs-1"
              style={{ display: "flex", justifyContent: "end", margin: "0" }}
            >
              <div className="megamenu-style-dev megamenu-dev">
                <div className="responsive">
                  <nav className="navbar-default">
                    <div className="container-megamenu horizontal">
                      <div className="navbar-header">
                        <button
                          type="button"
                          id="show-megamenu"
                          data-toggle="collapse"
                          className="navbar-toggle"
                          onClick={() => showSideNavBar("megamenu-wrapper-2")}
                        >
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                        </button>
                      </div>
                      <div className="megamenu-wrapper" id="megamenu-wrapper-2">
                        <span
                          id="remove-megamenu"
                          className="fa fa-times"
                          onClick={() => closeSideNavBar("megamenu-wrapper-2")}
                        ></span>
                        <div className="megamenu-pattern">
                          <div className="container">
                            <ul
                              className="megamenu"
                              data-transition="slide"
                              data-animationtime="500"
                            >
                              <li className="full-width menu-home with-sub-menu hover">
                                <p className="close-menu"></p>

                                <NavLink
                                  className="clearfix"
                                  to="/user-panel"
                                  state={{ active: "ADD" }}
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                  }}
                                >
                                  <i
                                    className="fa fa-thumb-tack"
                                    style={{ fontSize: "20px", padding: "0" }}
                                  ></i>
                                  <strong>Post Ad</strong>
                                </NavLink>
                              </li>
                              {auth.isAuthenticated !== true ? (
                                <li className="full-width menu-home with-sub-menu hover">
                                  <p className="close-menu"></p>

                                  <NavLink
                                    className="clearfix"
                                    to="/login"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      flexDirection: "column",
                                    }}
                                    // onClick={() => closeSideNavBar()}
                                  >
                                    {" "}
                                    <i
                                      className="fa fa-user"
                                      style={{ fontSize: "20px", padding: "0" }}
                                    ></i>
                                    <strong>Login</strong>
                                  </NavLink>
                                </li>
                              ) : null}
                              {auth.isAuthenticated === true ? (
                                <li className="full-width menu-home with-sub-menu hover menu-link">
                                  <p className="close-menu"></p>

                                  <div
                                    className="clearfix"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      flexDirection: "column",
                                    }}
                                    onClick={() => subMenu()}
                                  >
                                    {" "}
                                    <i
                                      className="fa fa-bars"
                                      style={{ fontSize: "20px", padding: "0" }}
                                    ></i>
                                    <strong>Menu</strong>
                                    <b class="caret"></b>
                                  </div>
                                  <div
                                    class="sub-menu"
                                    style={{ width: "100%" }}
                                    id="sub-menu"
                                  >
                                    <div class="content" id="sub-menu-content">
                                      <div>
                                        <ul class="row-list">
                                          <li>
                                            <Link
                                              class="subcategory_item"
                                              to="/user-panel"
                                              state={{ active: "ACCOUNT" }}
                                            >
                                              <i
                                                className="fa fa-user"
                                                // style={{ fontSize: "20px", padding: "0" }}
                                              ></i>{" "}
                                              My Account
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              class="subcategory_item"
                                              to="/user-panel"
                                              state={{ active: "SURPLUS" }}
                                            >
                                              <i className="fa fa-archive"></i>{" "}
                                              My Ad
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              class="subcategory_item"
                                              to="/user-panel"
                                              state={{ active: "ADD" }}
                                            >
                                              <i className="fa fa-archive"></i>{" "}
                                              Post ad
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              class="subcategory_item"
                                              to="/user-panel"
                                              state={{ active: "MESSAGE" }}
                                            >
                                              <i
                                                className="fa fa-envelope"
                                                // style={{ fontSize: "20px", padding: "0" }}
                                              ></i>{" "}
                                              Message
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              class="subcategory_item"
                                              to="/user-panel"
                                              state={{ active: "ALERT" }}
                                            >
                                              <i className="fa fa-bell"></i>
                                              My Alerts
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              class="subcategory_item"
                                              to="/user-panel"
                                              state={{ active: "FAVOURITE" }}
                                            >
                                              <i
                                                className="fa fa-heart"
                                                // style={{ fontSize: "20px", padding: "0" }}
                                              ></i>{" "}
                                              My Favourites
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              class="subcategory_item"
                                              to="/user-panel"
                                            >
                                              <i
                                                className="fa fa-question-circle"
                                                // style={{ fontSize: "20px", padding: "0" }}
                                              ></i>{" "}
                                              Help
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              class="subcategory_item"
                                              to="/"
                                              onClick={() =>
                                                dispatch(logoutUser())
                                              }
                                            >
                                              <i
                                                className="fa fa-power-off"
                                                // style={{ fontSize: "20px", padding: "0" }}
                                              ></i>
                                              Logout
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ) : null}
                              {/* {auth.isAuthenticated === true ? (
                                <li className="full-width menu-home with-sub-menu hover">
                                  <p className="close-menu"></p>
                                  <a
                                    className="clearfix"
                                   
                                  >
                                    <strong>LOGOUT</strong>
                                    <span className="labelopencart"></span>
                                  </a>
                                </li>
                              ) : null} */}

                              {/* <li className="deal-h5 hidden">
                              <p className="close-menu"></p>
                              <a href="#" className="clearfix">
                                <strong>
                                  <img src="image/catalog/demo/menu/hot-block.png" alt="">Buy This Theme! 
                                </strong>
                              </a>
                            </li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- //Header center -->
    <!-- Heaader bottom --> */}

      <div
        style={{
          position: "relative",
          background: "#fff",
          padding: "30px 0",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div className="container">
          <ul className="new-design-ul">
            <li>
              <NavLink to="/jobs">
                <i className="fa fa-briefcase"></i>
                JOBS
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobs">
                <i className="fa fa-handshake-o"></i>
                BUSINESS
              </NavLink>
            </li>
            <li>
              <NavLink to="/surplus">
                <i className="fa fa-th-large"></i>
                SURPLUS
              </NavLink>
            </li>
          </ul>
        </div>
        <hr className="new-design-hr" />
      </div>
    </header>
  );
};
export default Header2;
