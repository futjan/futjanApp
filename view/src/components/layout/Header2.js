import React, { useState, useEffect } from "react";
import LOGO from "../image/Logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/authAction";
import { getSurplusKeywords } from "../actions/surplusAction";
import { Select } from "@mui/material";
import ukFlag from "../image/flag/uk.png";
import indianFlag from "../image/flag/india.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import SideBar from "./SideBar";
import Keyword from "../../utils/Keyword";
import AdsType from "../../utils/AdsType";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import { City } from "country-state-city";
import "./materialUI.css";

const Header2 = () => {
  const [keyword, setKeyword] = useState("");
  const [suggustion, setSuggustion] = useState([]);
  const [city, setCity] = useState("");
  const [suggustionCities, setSuggustionCities] = useState([]);
  const [currency, setCurrency] = useState("india");
  const [country, setCountry] = useState("india");
  const [jobSeach, setJobSearch] = useState("special job");
  const [title, setTitle] = useState("");
  const [adType, setAdType] = useState("surplus");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [state, setState] = React.useState({
    left: false,
  });
  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // initialize hooks
  const dispatch = useDispatch();
  const location = useLocation();
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
  const subMenu = (target, id, id2) => {
    if (document.getElementById(id) && document.getElementById(id2)) {
      document.getElementById(id).classList.toggle("d-block");
      document.getElementById(id2).classList.toggle("d-block");
    }
  };

  // cities
  const onChangeAutoFieldCities = (e) => {
    // const value = e.target.value;
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
  // const renderCitySuggustion = () => {
  //   if (suggustionCities.length === 0) {
  //     return null;
  //   }
  //   return (
  //     <ul
  //       className="autoComplete-ul"
  //       style={{ top: "40px", left: "0", width: "100%" }}
  //     >
  //       {suggustionCities.map((co, i) => (
  //         <li
  //           className="autoComplete-li"
  //           onClick={() => {
  //             setCity(co.name);
  //             setSuggustionCities([]);
  //           }}
  //           key={i}
  //         >
  //           <Link to="/surplus" state={{ city: co.name }}>
  //             {co.name}
  //           </Link>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };
  // keyword
  // const onChangeAutoFieldName = (e) => {
  //   const value = e.target.value;
  //   let suggustions = [];
  //   if (value.trim().length > 0) {
  //     const regex = new RegExp(`^${value}`, "i");
  //     if (surplusFromStore.keywords.length > 0) {
  //       suggustions = surplusFromStore.keywords
  //         .map((v) => v.keyword)
  //         .filter(
  //           (keyword, i, keywordArray) => keywordArray.indexOf(keyword) === i
  //         )
  //         .sort()
  //         .filter((v) => regex.test(v));
  //     }
  //   }
  //   setKeyword(value);
  //   setSuggustion([...suggustions]);
  // };

  // const renderNameSuggustion = () => {
  //   if (suggustion.length === 0) {
  //     return null;
  //   }

  //   return (
  //     <ul className="autoComplete-ul" style={{ width: "90%", top: "40px" }}>
  //       {suggustion.map((co, i) => (
  //         <li
  //           onClick={() => {
  //             setKeyword(co);
  //             setSuggustion([]);
  //           }}
  //           key={i}
  //         >
  //           <Link
  //             to="/surplus"
  //             className="autoComplete-li"
  //             state={{ keyword: co }}
  //           >
  //             {co}
  //           </Link>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  const CustomSpecialJobBtn = styled(Button)(({ theme }) => ({
    color: "#1976d2",
    fontWeight: jobSeach === "special job" ? "700" : "500",
    backgroundColor:
      jobSeach === "special job" ? "rgba(25, 118, 210 , 0.1)" : "transparent",
    "&:hover": {
      backgroundColor: "rgba(25, 118, 210 , 0.1)",
    },
  }));
  const CustomLocalJobBtn = styled(Button)(({ theme }) => ({
    color: "#1976d2",
    fontWeight: jobSeach === "local job" ? "700" : "500",
    backgroundColor:
      jobSeach === "local job" ? "rgba(25, 118, 210 , 0.1)" : "transparent",
    "&:hover": {
      backgroundColor: "rgba(25, 118, 210 , 0.1)",
    },
  }));

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
        {/* <ul
          className="top-link list-inline"
          style={{ position: "absolute", top: "0", right: "0" }}
        >
          <li>
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <MenuItem value="uk">
                <img src={ukFlag} width="20" />
              </MenuItem>
              <MenuItem value="india">
                <img src={indianFlag} width="20" />
              </MenuItem>
            </Select>
          </li>
          
        </ul> */}
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
                  width="100"
                  // style={{ width: "30px", height: "40px" }}
                  title="Your Store"
                  src={LOGO}
                />
                {/* <h3 className="logo-heading">FUTJAN</h3> */}
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
                  <form method="GET" action="#">
                    <div
                      id="search0"
                      className="search d-grid input-group form-group"
                    >
                      <input
                        className="autosearch-input form-control"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        autoComplete="off"
                        placeholder="Title"
                        name="search"
                      />
                      <div
                        className="select_category filter_type  icon-select"
                        // style={{ display: "none" }}
                      >
                        <AdsType adType={adType} setAdType={setAdType} />
                        {/* <input
                          className="form-control no-border"
                          name="category_id"
                          placeholder="Location"
                          
                          value={city}
                          style={{
                            width: "100%",
                            height: "100%",
                            background: "#fff",
                            paddingLeft: "0",
                            borderRadius: "4px",
                          }}
                        /> */}
                        {/* {renderCitySuggustion()} */}
                      </div>
                      <span className="input-group-btn">
                        {adType === "surplus" ? (
                          <Link
                            to="/surplus"
                            className="button-search btn btn-default btn-lg"
                            name="submit_search"
                            state={{ title: title.toLowerCase() }}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <i className="fa fa-search"></i>
                            <span className="hidden">Search</span>
                          </Link>
                        ) : null}
                        {adType === "job" ? (
                          <Link
                            to="/job"
                            className="button-search btn btn-default btn-lg"
                            name="submit_search"
                            state={{ searchTitle: title.toLowerCase() }}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <i className="fa fa-search"></i>
                            <span className="hidden">Search</span>
                          </Link>
                        ) : null}
                        {adType === "jobseeker" ? (
                          <Link
                            to="/job-seeker"
                            className="button-search btn btn-default btn-lg"
                            name="submit_search"
                            state={{ title: title.toLowerCase() }}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <i className="fa fa-search"></i>
                            <span className="hidden">Search</span>
                          </Link>
                        ) : null}

                        {/* <Link
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
                        </Link> */}
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
                    <input type="hidden" name="route" value="product/search" />
                  </form>
                </div>
              </div>
            </div>
            <div
              className={
                auth.user && auth.user.role === "admin"
                  ? "header-cart-phone col-lg-4 col-md-4 col-sm-1 col-xs-1"
                  : "header-cart-phone col-lg-3 col-md-3 col-sm-1 col-xs-1"
              }
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
                                    state={{ from: location.pathname }}
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
                              {auth.isAuthenticated === true &&
                              auth.user &&
                              auth.user.role === "admin" ? (
                                <li className="full-width menu-home with-sub-menu hover">
                                  <p className="close-menu"></p>

                                  <NavLink
                                    className="clearfix"
                                    to="/adminpanel"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      flexDirection: "column",
                                    }}
                                  >
                                    <i
                                      className="fa fa-desktop"
                                      style={{
                                        fontSize: "20px",
                                        padding: "0",
                                      }}
                                    ></i>
                                    <strong>Adminpanel</strong>
                                  </NavLink>
                                </li>
                              ) : null}
                              {auth.isAuthenticated === true ? (
                                // <li className="full-width menu-home with-sub-menu  hover menu-link">
                                <li className="full-width menu-home  hover menu-link">
                                  <IconButton
                                    size="large"
                                    // className="material-ui-menu"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        lineHeight: "10px",
                                        color: "#222",
                                      }}
                                      className="clearfix"
                                    >
                                      <i
                                        className="fa fa-bars"
                                        style={{
                                          fontSize: "20px",
                                          padding: "0",
                                        }}
                                      ></i>
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
                                        linkButton={true}
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
                                        <div
                                          style={{
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            flexDirection: "column",
                                            textTransform: "capitalize",
                                          }}
                                        >
                                          <p style={{ margin: "0" }}>
                                            {auth.user && auth.user.name}
                                          </p>
                                          <small style={{ color: "#a7a7a7" }}>
                                            {auth.user && auth.user.role}
                                          </small>
                                        </div>
                                      </MenuItem>
                                    )}

                                    <MenuItem
                                      linkButton={true}
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
                Jobs
              </NavLink>
              <div className="sub-menu" id="sub-menu">
                {/* <div className="content" id="sub-menu-content"> */}
                <div id="sub-menu-content">
                  <div>
                    <div
                      style={{
                        display: "flex",

                        alignItems: "center",
                      }}
                    >
                      <h4 style={{ padding: "0 15px" }}>Browser by</h4>
                      <Stack spacing={2} direction="row">
                        <CustomSpecialJobBtn
                          style={{ fontSize: "12px" }}
                          size="large"
                          onClick={() => setJobSearch("special job")}
                        >
                          Specialist Jobs
                        </CustomSpecialJobBtn>
                        <CustomLocalJobBtn
                          size="large"
                          style={{ fontSize: "12px" }}
                          onClick={() => setJobSearch("local job")}
                        >
                          Local Jobs
                        </CustomLocalJobBtn>
                      </Stack>
                    </div>
                    {jobSeach === "local job" ? (
                      <ul className="row-list">
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "ACTechnician",
                              category: "Local Job",
                            }}
                          >
                            AC Technician
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Cook/Helper",
                              category: "Local Job",
                            }}
                          >
                            Cook/Helper
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Operator/Technician",
                              category: "Local Job",
                            }}
                          >
                            Operator/Technician
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Bar Tender",
                              category: "Local Job",
                            }}
                          >
                            Bar Tender
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Delivery person",
                              category: "Local Job",
                            }}
                          >
                            Delivery person
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Painter",
                              category: "Local Job",
                            }}
                          >
                            Painter
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Body Guard",
                              category: "Local Job",
                            }}
                          >
                            Body Guard
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Driver",
                              category: "Local Job",
                            }}
                          >
                            Driver
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Plumber",
                              category: "Local Job",
                            }}
                          >
                            Plumber
                          </Link>
                        </li>

                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Beautician/Salon",
                              category: "Local Job",
                            }}
                          >
                            Beautician/Salon
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Data entry/Back office",
                              category: "Local Job",
                            }}
                          >
                            Data entry/Back office
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "BPOTelecaller",
                              category: "Local Job",
                            }}
                          >
                            BPOTelecaller
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Firefighter",
                              category: "Local Job",
                            }}
                          >
                            Firefighter
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Sales/Marketing",
                              category: "Local Job",
                            }}
                          >
                            Sales/Marketing
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/=job"
                            state={{
                              subCategory: "Office co-ordinator",
                              category: "Local Job",
                            }}
                          >
                            Office co-ordinator
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Helper",
                              category: "Local Job",
                            }}
                          >
                            Helper
                          </Link>
                        </li>

                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Soldering operator",
                              category: "Local Job",
                            }}
                          >
                            Soldering operator
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Nanny/Aaya",
                              category: "Local Job",
                            }}
                          >
                            Nanny/Aaya
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="job"
                            state={{
                              subCategory: "Labour",
                              category: "Local Job",
                            }}
                          >
                            Labour
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Teacher/Tutor",
                              category: "Local Job",
                            }}
                          >
                            Teacher/Tutor
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Construction",
                              category: "Local Job",
                            }}
                          >
                            Construction
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Maid/Servant",
                              category: "Local Job",
                            }}
                          >
                            Maid/Servant
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Waiter",
                              category: "Local Job",
                            }}
                          >
                            Waiter
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Control room",
                              category: "Local Job",
                            }}
                          >
                            Control room
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Metal sheet worker/Welder",
                              category: "Local Job",
                            }}
                          >
                            Metal sheet worker/Welder
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Washer",
                              category: "Local Job",
                            }}
                          >
                            Washer
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Office boy/peon",
                              category: "Local Job",
                            }}
                          >
                            Office boy/peon
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Other",
                              category: "Local Job",
                            }}
                          >
                            Other
                          </Link>
                        </li>
                      </ul>
                    ) : (
                      <ul className="row-list">
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Apprenticeships",
                              category: "Special Job",
                            }}
                          >
                            Apprenticeships
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Financial Services",
                              category: "Special Job",
                            }}
                          >
                            Financial Services
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Purchasing",
                              category: "Special Job",
                            }}
                          >
                            Purchasing
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Admin, SecretarialPA",
                              category: "Special Job",
                            }}
                          >
                            Admin, Secretarial & PA
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "General Insurance",
                              category: "Special Job",
                            }}
                          >
                            General Insurance
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Recruitment Consultancy",
                              category: "Special Job",
                            }}
                          >
                            Recruitment Consultancy
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Accountant",
                              category: "Special Job",
                            }}
                          >
                            Accountant
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Graduate TrainingInternships",
                              category: "Special Job",
                            }}
                          >
                            Graduate Training & Internships
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Retail",
                              category: "Special Job",
                            }}
                          >
                            Retail
                          </Link>
                        </li>

                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Banking",
                              category: "Special Job",
                            }}
                          >
                            Banking
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "HealthMedicine",
                              category: "Special Job",
                            }}
                          >
                            Health & Medicine
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Scientific",
                              category: "Special Job",
                            }}
                          >
                            Scientific
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "ConstructionProperty",
                              category: "Special Job",
                            }}
                          >
                            Construction & Property
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Human Resources",
                              category: "Special Job",
                            }}
                          >
                            Human Resources
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "SecuritySafety",
                              category: "Special Job",
                            }}
                          >
                            Security & Safety
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Customer Service",
                              category: "Special Job",
                            }}
                          >
                            Customer Service
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "HospitalityCatering",
                              category: "Special Job",
                            }}
                          >
                            Hospitality & Catering
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "StrategyConsultancy",
                              category: "Special Job",
                            }}
                          >
                            Strategy & Consultancy
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "CharityVoluntary",
                              category: "Special Job",
                            }}
                          >
                            Charity & Voluntary
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "ITTelecoms",
                              category: "Special Job",
                            }}
                          >
                            IT & Telecoms
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Social Care",
                              category: "Special Job",
                            }}
                          >
                            Social Care
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Education",
                              category: "Special Job",
                            }}
                          >
                            Education
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "LeisureTourism",
                              category: "Special Job",
                            }}
                          >
                            Leisure & Tourism
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Sales",
                              category: "Special Job",
                            }}
                          >
                            Sales
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Engineering",
                              category: "Special Job",
                            }}
                          >
                            Engineering
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Manufacturing",
                              category: "Special Job",
                            }}
                          >
                            Manufacturing
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "TransportLogistics",
                              category: "Special Job",
                            }}
                          >
                            Transport & Logistics
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Energy",
                              category: "Special Job",
                            }}
                          >
                            Energy
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "MarketingPR",
                              category: "Special Job",
                            }}
                          >
                            Marketing & PR
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Training",
                              category: "Special Job",
                            }}
                          >
                            Training
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "MotoringAutomotive",
                              category: "Special Job",
                            }}
                          >
                            Motoring & Automotive
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Legal",
                              category: "Special Job",
                            }}
                          >
                            Legal
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Media, DigitalCreative",
                              category: "Special Job",
                            }}
                          >
                            Media, Digital & Creative
                          </Link>
                        </li>
                        <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                          <Link
                            className="subcategory_item"
                            to="/job"
                            state={{
                              subCategory: "Other",
                              category: "Special Job",
                            }}
                          >
                            Other
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
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
              <div className="sub-menu" id="sub-menu">
                {/* <div className="content" id="sub-menu-content"> */}
                <div id="sub-menu-content">
                  <h4 style={{ padding: "0 15px" }}>Business Type</h4>
                  <div>
                    <ul className="row-list">
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
                          state={{ type: "Cafe" }}
                        >
                          Cafe
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
      <SideBar
        state={state}
        setState={setState}
        isAuthenticated={auth.isAuthenticated}
      />
    </header>
  );
};
export default React.memo(Header2);
