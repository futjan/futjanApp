import React, { useState, useMemo, useEffect } from "react";
import LOGO from "../image/Logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/authAction";
import { setCurrencyAction } from "../actions/currencyAction";
import { Select } from "@mui/material";
import ukFlag from "../image/flag/uk.png";
import indianFlag from "../image/flag/india.png";
import HeaderSurplusType from "./HeaderSurplusType";
import HeaderJobType from "./HeaderJobType";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import SideBar from "./SideBar";
import AdsType from "../../utils/AdsType";
import "./materialUI.css";

const Header2 = () => {
  const [jobSeach, setJobSearch] = useState("special job");
  const [title, setTitle] = useState("");
  const [adType, setAdType] = useState("surplus");
  const [anchorEl, setAnchorEl] = useState(null);
  const [currency, setCurrency] = useState({
    symbol: "₹",
    to: "GBP",
    code: "INR",
  });

  const [state, setState] = React.useState({
    left: false,
  });
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(setCurrencyAction(currency));
  }, [currency.code]);

  // initialize hooks
  const dispatch = useDispatch();
  const location = useLocation();
  // get state from store
  const auth = useSelector((state) => state.auth);
  // useEffect
  // show side navbar
  // const showSideNavBar = (id, id2) => {
  //   const humburgerMenuIcon = document.getElementById(`${id}`);
  //   if (humburgerMenuIcon) {
  //     humburgerMenuIcon.classList.toggle("so-megamenu-active");
  //     document.getElementById(`${id2}`).classList.toggle("v-visible");
  //   }
  // };
  // close side navBar onclick on cross icon
  const closeSideNavBar = (id, id2) => {
    const humburgerMenuIcon = document.getElementById(`${id}`);
    if (humburgerMenuIcon) {
      humburgerMenuIcon.classList.remove("so-megamenu-active");
      document.getElementById(`${id2}`).classList.remove("v-visible");
    }
  };

  // show sub menu
  // const subMenu = (target, id, id2) => {
  //   if (document.getElementById(id) && document.getElementById(id2)) {
  //     document.getElementById(id).classList.toggle("d-block");
  //     document.getElementById(id2).classList.toggle("d-block");
  //   }
  // };

  const titleInput = useMemo(
    () => (
      <input
        className="autosearch-input form-control"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoComplete="off"
        placeholder="Find clothes, business, jobs, food"
        name="search"
      />
    ),
    [title]
  );
  return (
    // <!-- Header Container  -->
    <header id="header" className="typeheader-4">
      {/* <!-- Header center --> */}
      <div className="header-center">
        {/* {auth.isAuthenticated === true ? (
          <Link to="/adminpanel" style={{ display: "flex" }}>
            Adminpanel
          </Link>
        ) : null} */}
        <ul
          className="top-link list-inline"
          style={{ position: "absolute", top: "0", right: "0" }}
        >
          <li>
            <Select
              value={currency.code}
              onChange={(e) =>
                setCurrency({
                  symbol: e.target.value === "GBP" ? "£" : "₹",
                  code: e.target.value,
                  to: e.target.value === "GBP" ? "INR" : "GBP",
                })
              }
            >
              <MenuItem value="GBP">
                <img src={ukFlag} width="20" alt="gbp" />
              </MenuItem>
              <MenuItem value="INR">
                <img src={indianFlag} width="20" alt="inr" />
              </MenuItem>
            </Select>
          </li>
        </ul>
        <div className="container">
          <div className="row d-sm-block d-flex  justify-content-center">
            <div className="navbar-logo col-lg-2 col-md-2 col-xs-2 col-sm-3 m-0">
              <Link
                to="/"
                className="d-flex align-items-center justify-content-center"
              >
                <img alt="Futjan" width="100" title="Futjan" src={LOGO} />
              </Link>
            </div>
            <div
              className={
                auth.user && auth.user.role === "admin"
                  ? "header-center-right col-lg-6 col-md-6 col-sm-8 col-xs-11"
                  : "header-center-right col-lg-7 col-md-7 col-sm-8 col-xs-11"
              }
            >
              <div className="header_search">
                <div
                  id="sosearchpro"
                  className="sosearchpro-wrapper so-search "
                >
                  <form>
                    <div
                      id="search0"
                      className="search d-grid input-group form-group"
                    >
                      {titleInput}
                      {/* <input
                        className="autosearch-input form-control"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        autoComplete="off"
                        placeholder="Title"
                        name="search"
                      /> */}
                      <div className="select_category filter_type  icon-select">
                        <AdsType adType={adType} setAdType={setAdType} />
                      </div>
                      <span className="input-group-btn">
                        {adType === "surplus" ? (
                          <Link
                            to="/surplus"
                            className="button-search btn btn-default btn-lg align-items-center justify-content-center d-flex"
                            name="submit_search"
                            state={{ title: title.toLowerCase() }}
                          >
                            <i className="fa fa-search"></i>
                            <span className="hidden">Search</span>
                          </Link>
                        ) : null}
                        {adType === "job" ? (
                          <Link
                            to="/job"
                            className="button-search btn btn-default btn-lg align-items-center justify-content-center d-flex"
                            name="submit_search"
                            state={{ searchTitle: title.toLowerCase() }}
                          >
                            <i className="fa fa-search"></i>
                            <span className="hidden">Search</span>
                          </Link>
                        ) : null}
                        {adType === "jobseeker" ? (
                          <Link
                            to="/job-seeker"
                            className="button-search btn btn-default btn-lg align-items-center justify-content-center d-flex"
                            name="submit_search"
                            state={{ title: title.toLowerCase() }}
                          >
                            <i className="fa fa-search"></i>
                            <span className="hidden">Search</span>
                          </Link>
                        ) : null}
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
                                  onClick={() => setState({ left: true })}
                                >
                                  <div>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                  </div>
                                  <span>Menu</span>
                                </div>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* <input type="hidden" name="route" value="product/search" /> */}
                  </form>
                </div>
              </div>
            </div>
            <div
              className={
                auth.user && auth.user.role === "admin"
                  ? "header-cart-phone col-lg-4 col-md-4 col-sm-1 col-xs-1 d-flex m-0 p-0 justify-content-start"
                  : "header-cart-phone col-lg-3 col-md-3 col-sm-1 col-xs-1 d-flex m-0 p-0 justify-content-start"
              }
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
                          onClick={() => setState({ left: true })}
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
                                  className="clearfix align-items-center justify-content-center d-flex flex-dir-col"
                                  to="/user-panel"
                                  state={{ active: "ADD" }}
                                  onClick={() =>
                                    closeSideNavBar(
                                      "megamenu-wrapper-2",
                                      "megamenu-wrapper-2-wrapper"
                                    )
                                  }
                                >
                                  <i className="fa fa-thumb-tack header-icon"></i>
                                  <strong>Post Ad</strong>
                                </NavLink>
                              </li>
                              {auth.isAuthenticated !== true ? (
                                <li className="full-width menu-home with-sub-menu hover">
                                  <p className="close-menu"></p>

                                  <NavLink
                                    className="clearfix align-items-center justify-content-center d-flex flex-dir-col"
                                    to="/login"
                                    state={{ from: location.pathname }}
                                    onClick={() =>
                                      closeSideNavBar(
                                        "megamenu-wrapper-2",
                                        "megamenu-wrapper-2-wrapper"
                                      )
                                    }
                                  >
                                    {" "}
                                    <i className="fa fa-user header-icon"></i>
                                    <strong>Login/Register</strong>
                                  </NavLink>
                                </li>
                              ) : null}
                              {auth.isAuthenticated === true &&
                              auth.user &&
                              auth.user.role === "admin" ? (
                                <li className="full-width menu-home with-sub-menu hover">
                                  <p className="close-menu"></p>

                                  <NavLink
                                    className="clearfix align-items-center justify-content-center d-flex flex-dir-col"
                                    to="/adminpanel"
                                  >
                                    <i className="fa fa-desktop header-icon"></i>
                                    <strong>Adminpanel</strong>
                                  </NavLink>
                                </li>
                              ) : null}
                              {auth.isAuthenticated === true ? (
                                <li className="full-width menu-home  hover menu-link">
                                  <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                  >
                                    <div className="clearfix align-items-center justify-content-center d-flex flex-dir-col line-heigh-2">
                                      <i className="fa fa-bars header-icon"></i>
                                      <strong>Menu</strong>
                                    </div>
                                  </IconButton>
                                  <Menu
                                    id="menu-appbar"
                                    className="material-ui-menu"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                      vertical: "top",
                                      horizontal: "right",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                      vertical: "top",
                                      horizontal: "right",
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    sx={{ padding: "0" }}
                                  >
                                    {auth.user && (
                                      <MenuItem
                                        onClick={handleClose}
                                        component={"div"}
                                        sx={{
                                          // background: "rgba(0, 0, 0, 0.04)",
                                          borderBottom: "1px solid #ddd",
                                          ":hover": {
                                            background: "#fff",
                                          },
                                        }}
                                      >
                                        <div className="d-flex flex-dir-col justify-content-flexstart text-captial">
                                          <p className="m-0">
                                            {auth.user && auth.user.name}
                                          </p>
                                          <small style={{ color: "#a7a7a7" }}>
                                            {auth.user && auth.user.role}
                                          </small>
                                        </div>
                                      </MenuItem>
                                    )}

                                    <MenuItem
                                      onClick={handleClose}
                                      component={Link}
                                      to="/user-panel"
                                      state={{ active: "ACCOUNT" }}
                                    >
                                      <i className="fa fa-user"></i>
                                      &nbsp;&nbsp;&nbsp; My Account
                                    </MenuItem>

                                    <MenuItem
                                      onClick={handleClose}
                                      component={Link}
                                      to="/user-panel"
                                      state={{ active: "SURPLUS" }}
                                    >
                                      <i className="fa fa-archive"></i>
                                      &nbsp;&nbsp;&nbsp; My Ad
                                    </MenuItem>
                                    <MenuItem
                                      onClick={handleClose}
                                      component={Link}
                                      to="/user-panel"
                                      state={{ active: "FAVOURITE" }}
                                    >
                                      <i className="fa fa-heart"></i>
                                      &nbsp;&nbsp;&nbsp; My Favourite
                                    </MenuItem>
                                    <MenuItem
                                      onClick={handleClose}
                                      component={Link}
                                      to="/user-panel"
                                      state={{ active: "ADD" }}
                                    >
                                      <i className="fa fa-thumb-tack"></i>
                                      &nbsp;&nbsp;&nbsp; Post ad
                                    </MenuItem>
                                    <MenuItem
                                      onClick={handleClose}
                                      component={Link}
                                      to="/user-panel"
                                      state={{ active: "MESSAGE" }}
                                    >
                                      <i className="fa fa-envelope"></i>
                                      &nbsp;&nbsp;&nbsp; Message
                                    </MenuItem>
                                    <MenuItem
                                      onClick={() => {
                                        handleClose();
                                        dispatch(logoutUser());
                                      }}
                                    >
                                      <i className="fa fa-power-off"></i>
                                      &nbsp;&nbsp;&nbsp; Logout
                                    </MenuItem>
                                  </Menu>
                                </li>
                              ) : null}
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* <div
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
                      > */}
                      {/* <div
                          className="megamenu-wrapper"
                          id="megamenu-wrapper-2"
                        > */}
                      {/* <span
                            id="remove-megamenu"
                            className="fa fa-times"
                            onClick={() =>
                              closeSideNavBar(
                                "megamenu-wrapper-2",
                                "megamenu-wrapper-2-wrapper"
                              )
                            }
                          ></span> */}
                      {/* <div className="megamenu-pattern"> */}
                      {/* <div className="container"> */}
                      {/* <ul
                                className="megamenu"
                                data-transition="slide"
                                data-animationtime="500"
                              >
                              </ul> */}
                      {/* </div> */}
                      {/* </div> */}
                      {/* </div>
                      </div> */}
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

      <div className="header-bottom">
        <div className="container">
          <ul className="new-design-ul">
            <li>
              <NavLink to="/job" className="type-links">
                <i className="fa fa-briefcase"></i>
                Jobs
              </NavLink>
              <HeaderJobType jobSeach={jobSeach} setJobSearch={setJobSearch} />
            </li>
            <li>
              <NavLink to="/job-seeker" className="type-links">
                <i className="fa fa-user"></i>
                Job Seekers
              </NavLink>
            </li>
            <li className="with-sub-menu">
              <NavLink
                to="/surplus"
                className="type-links"
                style={{ zIndex: "9999" }}
              >
                <i className="fa fa-th-large"></i>
                Surplus
              </NavLink>
              <HeaderSurplusType />
            </li>
          </ul>
        </div>
        <hr className="new-design-hr" />
      </div>
      <SideBar
        state={state}
        setState={setState}
        isAuthenticated={auth.isAuthenticated}
      />
    </header>
  );
};
export default React.memo(Header2);
