import React, { useState, useEffect } from "react";
import LOGO from "../image/logo2.jpeg";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/authAction";
import { getSurplusKeywords } from "../actions/surplusAction";
// import { City } from "country-state-city";

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
  const showSideNavBar = (id, id2) => {
    const humburgerMenuIcon = document.getElementById(`${id}`);
    if (humburgerMenuIcon) {
      humburgerMenuIcon.classList.toggle("so-megamenu-active");
      document.getElementById(`${id2}`).classList.toggle("v-visible");
    }
  };
  // close side navBar onclick on cross icon
  const closeSideNavBar = (id, id2) => {
    const humburgerMenuIcon = document.getElementById(`${id}`);
    if (humburgerMenuIcon) {
      humburgerMenuIcon.classList.remove("so-megamenu-active");
      document.getElementById(`${id2}`).classList.remove("v-visible");
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
    // let suggustions = [];
    // if (value.trim().length > 0) {
    //   const regex = new RegExp(`^${value}`, "i");
    //   suggustions = City.getAllCities()
    //     .sort()
    //     .filter((v) => regex.test(v.name))
    //     .map((cit) => {
    //       return { name: cit.name, countryCode: cit.countryCode };
    //     });
    // }
    // setCity(value);
    // setSuggustionCities([...suggustions]);
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
        {suggustionCities.map((co, i) => (
          <li
            className="autoComplete-li"
            onClick={() => {
              setCity(co.name);
              setSuggustionCities([]);
            }}
            key={i}
          >
            <Link to="/surplus" state={{ city: co.name }}>
              {co.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  // keyword
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
    if (suggustion.length === 0) {
      return null;
    }

    return (
      <ul className="autoComplete-ul" style={{ width: "90%", top: "40px" }}>
        {suggustion.map((co, i) => (
          <li
            onClick={() => {
              setKeyword(co);
              setSuggustion([]);
            }}
            key={i}
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
    <header id="header" className="typeheader-4">
      {/* <!-- Header center --> */}
      <div className="header-center">
        <div className="container">
          <div
            className="row d-sm-block"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <div
              className="navbar-logo col-lg-2 col-md-2 col-xs-12 col-sm-3"
              style={{ margin: "0" }}
            >
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
                <h3 className="logo-heading">FUTJAN</h3>
              </Link>
            </div>
            <div className="header-center-right col-lg-7 col-md-7 col-sm-8 col-xs-11">
              <div className="header_search">
                <div
                  id="sosearchpro"
                  className="sosearchpro-wrapper so-search "
                >
                  <form method="GET" action="#">
                    <div
                      id="search0"
                      className="search d-grid input-group form-group"
                    >
                      {/* <Keyword setKeyword={setKeyword} /> */}
                      <input
                        className="autosearch-input form-control"
                        type="text"
                        value={keyword}
                        onChange={(e) => onChangeAutoFieldName(e)}
                        autoComplete="off"
                        placeholder="Restaurant, Jobs, Business, Stock "
                        name="search"
                      />
                      {renderNameSuggustion()}
                      <div
                        className="select_category filter_type  icon-select"
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
                            borderRadius: "4px",
                          }}
                        />
                        {renderCitySuggustion()}
                      </div>
                      <span className="input-group-btn">
                        <Link
                          to="/surplus"
                          className="button-search btn btn-default btn-lg"
                          name="submit_search"
                          state={{ keyword, city }}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <i className="fa fa-search"></i>
                          <span className="hidden">Search</span>
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
                                <div
                                  type="button"
                                  id="show-megamenu"
                                  data-toggle="collapse"
                                  className="navbar-toggle"
                                  onClick={() =>
                                    showSideNavBar(
                                      "megamenu-wrapper-1",
                                      "megamenu-wrapper-1-wrapper"
                                    )
                                  }
                                >
                                  <div>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                  </div>
                                  <span>Menu</span>
                                </div>
                              </div>

                              <div
                                style={{
                                  position: "fixed",
                                  width: "100%",
                                  height: "100%",
                                  background: "rgba(0,0,0,0.5)",
                                  top: 0,
                                  left: 0,
                                  zIndex: 1000,
                                  visibility: "hidden",
                                  transition: "all 0.2s linear",
                                  opacity: "0",
                                }}
                                id="megamenu-wrapper-1-wrapper"
                                onClick={(e) => {
                                  if (
                                    e.target ===
                                    document.getElementById(
                                      "megamenu-wrapper-1-wrapper"
                                    )
                                  ) {
                                    closeSideNavBar(
                                      "megamenu-wrapper-1",
                                      "megamenu-wrapper-1-wrapper"
                                    );
                                  }
                                }}
                              >
                                <div
                                  className="megamenu-wrapper"
                                  id="megamenu-wrapper-1"
                                  style={{ zIndex: "1001" }}
                                >
                                  <span
                                    id="remove-megamenu"
                                    className="fa fa-times"
                                    onClick={() =>
                                      closeSideNavBar(
                                        "megamenu-wrapper-1",
                                        "megamenu-wrapper-1-wrapper"
                                      )
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
                                            onClick={() =>
                                              closeSideNavBar(
                                                "megamenu-wrapper-1",
                                                "megamenu-wrapper-1-wrapper"
                                              )
                                            }
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
                                              onClick={() =>
                                                closeSideNavBar(
                                                  "megamenu-wrapper-1",
                                                  "megamenu-wrapper-1-wrapper"
                                                )
                                              }
                                            >
                                              {" "}
                                              <i
                                                className="fa fa-user"
                                                style={{
                                                  fontSize: "20px",
                                                  padding: "0",
                                                }}
                                              ></i>
                                              <strong>Login / Register</strong>
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
                                              <b className="caret"></b>
                                            </div>
                                            <div
                                              className="sub-menu"
                                              style={{ width: "100%" }}
                                              id="sub-menu"
                                            >
                                              <div
                                                className="content"
                                                id="sub-menu-content"
                                              >
                                                <div>
                                                  <ul className="row-list">
                                                    <li>
                                                      <Link
                                                        className="subcategory_item"
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
                                                        className="subcategory_item"
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
                                                        className="subcategory_item"
                                                        to="/user-panel"
                                                        state={{
                                                          active: "ADD",
                                                        }}
                                                      >
                                                        <i className="fa fa-archive"></i>{" "}
                                                        Post ad
                                                      </Link>
                                                    </li>
                                                    <li>
                                                      <Link
                                                        className="subcategory_item"
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
                                                        className="subcategory_item"
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
                                                        className="subcategory_item"
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
                                                        className="subcategory_item"
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
                                                        className="subcategory_item"
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
                                      </ul>
                                    </div>
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
              className="header-cart-phone col-lg-3 col-md-3 col-sm-1 col-xs-1"
              style={{
                display: "flex",
                justifyContent: "start",
                margin: "0",
                padding: "0",
              }}
            >
              <div className="megamenu-style-dev megamenu-dev">
                <div className="responsive">
                  <nav className="navbar-default">
                    <div className="container-megamenu horizontal">
                      <div className="navbar-header">
                        <div
                          type="button"
                          id="show-megamenu"
                          data-toggle="collapse"
                          className="navbar-toggle"
                          onClick={() =>
                            showSideNavBar(
                              "megamenu-wrapper-2",
                              "megamenu-wrapper-2-wrapper"
                            )
                          }
                        >
                          <div>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </div>
                          <span>Menu</span>
                        </div>
                      </div>
                      <div className="megamenu-wrapper" id="megamenu-wrapper-2">
                        <span
                          id="remove-megamenu"
                          className="fa fa-times"
                          onClick={() =>
                            closeSideNavBar(
                              "megamenu-wrapper-2",
                              "megamenu-wrapper-2-wrapper"
                            )
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
                                  onClick={() =>
                                    closeSideNavBar(
                                      "megamenu-wrapper-2",
                                      "megamenu-wrapper-2-wrapper"
                                    )
                                  }
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
                                    onClick={() =>
                                      closeSideNavBar(
                                        "megamenu-wrapper-2",
                                        "megamenu-wrapper-2-wrapper"
                                      )
                                    }
                                  >
                                    {" "}
                                    <i
                                      className="fa fa-user"
                                      style={{
                                        fontSize: "20px",
                                        padding: "0",
                                      }}
                                    ></i>
                                    <strong>Login/Register</strong>
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
                                    <b className="caret"></b>
                                  </div>
                                  <div
                                    className="sub-menu"
                                    style={{ width: "100%" }}
                                    id="sub-menu"
                                  >
                                    <div
                                      className="content"
                                      id="sub-menu-content"
                                    >
                                      <div>
                                        <ul className="row-list">
                                          <li>
                                            <Link
                                              className="subcategory_item"
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
                                              className="subcategory_item"
                                              to="/user-panel"
                                              state={{ active: "SURPLUS" }}
                                            >
                                              <i className="fa fa-archive"></i>{" "}
                                              My Ad
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              className="subcategory_item"
                                              to="/user-panel"
                                              state={{ active: "ADD" }}
                                            >
                                              <i className="fa fa-archive"></i>{" "}
                                              Post ad
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              className="subcategory_item"
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
                                              className="subcategory_item"
                                              to="/user-panel"
                                              state={{ active: "ALERT" }}
                                            >
                                              <i className="fa fa-bell"></i>
                                              My Alerts
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              className="subcategory_item"
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
                                              className="subcategory_item"
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
                                              className="subcategory_item"
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
                      <div
                        style={{
                          position: "fixed",
                          width: "100%",
                          height: "100%",
                          background: "rgba(0,0,0,0.5)",
                          top: 0,
                          left: 0,
                          zIndex: 1000,
                          visibility: "hidden",
                          transition: "all 0.2s linear",
                          opacity: "0",
                        }}
                        id="megamenu-wrapper-2-wrapper"
                        onClick={(e) => {
                          if (
                            e.target ===
                            document.getElementById(
                              "megamenu-wrapper-2-wrapper"
                            )
                          ) {
                            closeSideNavBar(
                              "megamenu-wrapper-2",
                              "megamenu-wrapper-2-wrapper"
                            );
                          }
                        }}
                      >
                        <div
                          className="megamenu-wrapper"
                          id="megamenu-wrapper-2"
                        >
                          <span
                            id="remove-megamenu"
                            className="fa fa-times"
                            onClick={() =>
                              closeSideNavBar(
                                "megamenu-wrapper-2",
                                "megamenu-wrapper-2-wrapper"
                              )
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
                                    onClick={() =>
                                      closeSideNavBar(
                                        "megamenu-wrapper-2",
                                        "megamenu-wrapper-2-wrapper"
                                      )
                                    }
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
                                      onClick={() =>
                                        closeSideNavBar(
                                          "megamenu-wrapper-2",
                                          "megamenu-wrapper-2-wrapper"
                                        )
                                      }
                                    >
                                      {" "}
                                      <i
                                        className="fa fa-user"
                                        style={{
                                          fontSize: "20px",
                                          padding: "0",
                                        }}
                                      ></i>
                                      <strong>Login/Register</strong>
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
                                      <b className="caret"></b>
                                    </div>
                                    <div
                                      className="sub-menu"
                                      style={{ width: "100%" }}
                                      id="sub-menu"
                                    >
                                      <div
                                        className="content"
                                        id="sub-menu-content"
                                      >
                                        <div>
                                          <ul className="row-list">
                                            <li>
                                              <Link
                                                className="subcategory_item"
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
                                                className="subcategory_item"
                                                to="/user-panel"
                                                state={{ active: "SURPLUS" }}
                                              >
                                                <i className="fa fa-archive"></i>{" "}
                                                My Ad
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="subcategory_item"
                                                to="/user-panel"
                                                state={{ active: "ADD" }}
                                              >
                                                <i className="fa fa-archive"></i>{" "}
                                                Post ad
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="subcategory_item"
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
                                                className="subcategory_item"
                                                to="/user-panel"
                                                state={{ active: "ALERT" }}
                                              >
                                                <i className="fa fa-bell"></i>
                                                My Alerts
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="subcategory_item"
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
                                                className="subcategory_item"
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
                                                className="subcategory_item"
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
          padding: "0px 0 15px 0",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div className="container">
          <ul className="new-design-ul">
            <li>
              <NavLink to="/job" className="type-links">
                <i className="fa fa-briefcase"></i>
                JOBS
              </NavLink>
            </li>
            <li>
              <NavLink to="/job" className="type-links">
                <i className="fa fa-handshake-o"></i>
                BUSINESS
              </NavLink>
            </li>
            <li className="with-sub-menu">
              <NavLink
                to="/surplus"
                className="type-links"
                style={{ zIndex: "9999" }}
              >
                <i className="fa fa-th-large"></i>
                SURPLUS
              </NavLink>
              <div className="sub-menu" id="sub-menu">
                {/* <div className="content" id="sub-menu-content"> */}
                <div id="sub-menu-content">
                  <h4 style={{ padding: "0 15px" }}>Business Type</h4>
                  <div>
                    <ul className="row-list">
                      {/* <li className="col-md-3 col-sm-3 col-xs-6 type-ul-li-nav">
                        <Link
                          className="subcategory_item"
                          to="/user-panel"
                          state={{
                            type: "",
                          }}
                        >
                          Choose Type
                        </Link>
                      </li> */}
                      <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                        <Link
                          className="subcategory_item"
                          to="/surplus"
                          state={{
                            type: "Bakery",
                          }}
                        >
                          Bakery
                        </Link>
                      </li>
                      <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                        <Link
                          className="subcategory_item"
                          to="/surplus"
                          state={{ type: "Beverage Shop" }}
                        >
                          Beverage Shop
                        </Link>
                      </li>
                      <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                        <Link
                          className="subcategory_item"
                          to="/surplus"
                          state={{
                            type: "Convenience store",
                          }}
                        >
                          Convenience store
                        </Link>
                      </li>
                      <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                        <Link
                          className="subcategory_item"
                          to="/surplus"
                          state={{
                            type: "Fruit/Vegetable store",
                          }}
                        >
                          Fruit/Vegetable store
                        </Link>
                      </li>
                      <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                        <Link
                          className="subcategory_item"
                          to="/surplus"
                          state={{
                            type: "Hotel",
                          }}
                        >
                          Hotel
                        </Link>
                      </li>
                      <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                        <Link
                          className="subcategory_item"
                          to="/surplus"
                          state={{
                            type: "Pastry shop",
                          }}
                        >
                          Pastry shop
                        </Link>
                      </li>
                      <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                        <Link
                          className="subcategory_item"
                          to="/surplus"
                          state={{
                            type: "Producers/Manufacturers",
                          }}
                        >
                          Producers/Manufacturers
                        </Link>
                      </li>
                      <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                        <Link
                          className="subcategory_item"
                          to="/surplus"
                          state={{ type: "Restaurant" }}
                        >
                          Restaurant
                        </Link>
                      </li>
                      <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                        <Link
                          className="subcategory_item"
                          to="/surplus"
                          state={{ type: "Supermarkets" }}
                        >
                          Supermarkets
                        </Link>
                      </li>

                      <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                        <Link
                          className="subcategory_item"
                          to="/surplus"
                          state={{ type: "Takeaway" }}
                        >
                          Takeaway
                        </Link>
                      </li>
                      <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                        <Link
                          className="subcategory_item"
                          to="/surplus"
                          state={{ type: "Wholesalers" }}
                        >
                          Wholesalers
                        </Link>
                      </li>
                      <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                        <Link
                          className="subcategory_item"
                          to="/surplus"
                          state={{ type: "Other" }}
                        >
                          Other
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <hr className="new-design-hr" />
      </div>
    </header>
  );
};
export default Header2;
