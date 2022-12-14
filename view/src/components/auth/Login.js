import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "../../utils/Loader";
import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";
import NewCustomer from "./NewCustomer";
// action
import { loginUser, loginWithGoogle } from "../actions/authAction";
import { CLEAR_ERRORS } from "../actions/types";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [passwordShow, setPasswordShow] = useState(false);
  // initialize navigation
  const navigate = useNavigate();
  const location = useLocation();
  // initialize useDispatch
  const dispatch = useDispatch();
  // get state from store
  const errorStore = useSelector((state) => state.error);
  const auth = useSelector((state) => state.auth);

  // useEffect
  useEffect(() => {
    setErrors(errorStore);
  }, [errorStore]);

  useEffect(() => {
    function start() {
      gapi.client.init({
        client_id:
          "532893321001-gefd5pi11rf25s8tkqd5n7er3phqcuu6.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  // login function
  const login_Func = (e) => {
    e.preventDefault();
    const obj = {
      email: email.toLowerCase(),
      password,
    };
    dispatch(loginUser(obj, pushToIndex, clearState));
  };
  const clearState = () => {
    setEmail("");
    setPassword("");
  };
  const pushToIndex = () => {
    if (location && location.state && location.state.from) {
      navigate(location && location.state && location.state.from);
    } else {
      navigate("/");
    }
  };

  // login with google
  const responseGoogle_success = (response) => {
    const { tokenObj, profileObj } = response;

    dispatch(
      loginWithGoogle(
        {
          email: profileObj && profileObj.email,
          name: profileObj && profileObj.name,
          profile: profileObj && profileObj.imageUrl,
          token: tokenObj && tokenObj.id_token,
        },
        pushToIndex
      )
    );
  };

  const responseGoogle_error = (err) => {
    console.log(err);
  };

  // const responseFacebook = (response) => {
  //   console.log(response);
  // };

  // const responseGoogle_success_signUp = (response) => {
  //   const { tokenObj, profileObj } = response;

  //   navigate(`/set-password/${tokenObj.id_token}`, {
  //     state: {
  //       email: profileObj && profileObj.email,
  //       name: profileObj && profileObj.name,
  //       profile: profileObj && profileObj.imageUrl,
  //       token: tokenObj && tokenObj.id_token,
  //     },
  //   });
  // };

  function passwordShowFunc() {
    const x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  return (
    <div
      className="account-login account res layout-1"
      style={{ position: "relative" }}
    >
      <div id="wrapper" className="wrapper-fluid banners-effect-10">
        {/* Main Container   */}

        <div className="container">
          <div className="row">
            <ul className="breadcrumb">
              <li>
                <Link to="/">
                  <i className="fa fa-home"></i>
                </Link>
              </li>
              {/* <li>
                <a href="#">Account</a>
              </li> */}
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
            <div id="content" className="col-md-12">
              <div className="row">
                <div className="col-sm-6">
                  <NewCustomer />
                  {/* <div className="well">
                    <h2>New Customer</h2>
                    <p>
                      <strong>Register Account</strong>
                    </p>
                    <p>
                      By creating an account you will be able to shop faster, be
                      up to date on an order's status, and keep track of the
                      orders you have previously made.
                    </p>

                    <GoogleLogin
                      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                      buttonText="Sign up with Google"
                      onSuccess={responseGoogle_success_signUp}
                      onFailure={responseGoogle_error}
                      className="google-login-button"
                    />
                    <div style={{ float: "left" }}>
                      <Link to="/signup" className="btn btn-primary signup-btn">
                        <MailOutlineIcon
                          fontSize="large"
                          sx={{
                            width: "35px",
                            height: "22px",
                          }}
                        />
                        Sign up with Email
                      </Link>
                    </div>
                  </div> */}
                </div>
                <div className="col-sm-6">
                  <div className="well col-sm-12">
                    <h2>Login</h2>

                    <form
                    // action="#"
                    // method="post"
                    // encType="multipart/form-data"
                    >
                      <div className="form-group">
                        {errors && errors.message && (
                          <div className="col-sm-12" style={{ padding: "0" }}>
                            <div className="alert alert-danger" role="alert">
                              {errors.message}
                            </div>
                          </div>
                        )}
                      </div>
                      <div style={{ margin: "10px 0" }}>
                        <GoogleLogin
                          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                          buttonText="Login with Google"
                          onSuccess={responseGoogle_success}
                          onFailure={responseGoogle_error}
                          className="google-login-button"
                          // cookiePolicy={"http://localhost:3000"}
                        />
                      </div>

                      <div className="form-group">
                        <label className="control-label" htmlFor="input-email">
                          E-Mail Address
                        </label>
                        <input
                          type="text"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          placeholder="E-Mail Address"
                          id="input-email"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="input-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          placeholder="Password"
                          id="password"
                          className="form-control"
                        />

                        <div className="checkbox">
                          <label
                            htmlFor="Show Password"
                            className="container-checkbox"
                            onClick={() => {
                              setPasswordShow(!passwordShow);
                              passwordShowFunc();
                            }}
                          >
                            <span>
                              <input
                                type="checkbox"
                                value={passwordShow}
                                onChange={() => {
                                  setPasswordShow(!passwordShow);
                                  passwordShowFunc();
                                }}
                                name="Show Password"
                                checked={passwordShow === true ? true : false}
                              />
                              Show Password
                              <span className="checkmark"></span>
                            </span>
                          </label>
                        </div>

                        <Link
                          to="/forget-password"
                          onClick={() =>
                            dispatch({
                              type: CLEAR_ERRORS,
                            })
                          }
                        >
                          Forgotten Password
                        </Link>
                      </div>
                      <button
                        type="submit"
                        value="Login"
                        className="btn btn-primary pull-left"
                        onClick={(e) => login_Func(e)}
                      >
                        Login{" "}
                      </button>
                    </form>
                    {/* <column id="column-login" className="col-sm-8 pull-right">
                      <div className="row">
                        <div
                          className="social_login pull-right"
                          id="so_sociallogin"
                        >
                          <a
                            href="#"
                            className="btn btn-social-icon btn-sm btn-facebook"
                          >
                            <i
                              className="fa fa-facebook fa-fw"
                              aria-hidden="true"
                            ></i>
                          </a>
                          <a
                            href="#"
                            className="btn btn-social-icon btn-sm btn-twitter"
                          >
                            <i
                              className="fa fa-twitter fa-fw"
                              aria-hidden="true"
                            ></i>
                          </a>
                          <a
                            href="#"
                            className="btn btn-social-icon btn-sm btn-google-plus"
                          >
                            <i
                              className="fa fa-google fa-fw"
                              aria-hidden="true"
                            ></i>
                          </a>
                          <a
                            href="#"
                            className="btn btn-social-icon btn-sm btn-linkdin"
                          >
                            <i
                              className="fa fa-linkedin fa-fw"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </column> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <aside className="col-md-3 col-sm-4 col-xs-12 content-aside right_column sidebar-offcanvas">
              <span id="close-sidebar" className="fa fa-times"></span>
              <div className="module">
                <h3 className="modtitle">
                  <span>My Wish List </span>
                </h3>
                <div className="module-content custom-border">
                  <ul className="list-box">
                    <li>
                      <a href="#">My Account </a>
                    </li>

                    <li>
                      <a href="#">Edit Account </a>
                    </li>
                    <li>
                      <a href="#">Password </a>
                    </li>

                    <li>
                      <a href="#">Address Book </a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wish List </a>
                    </li>
                    <li>
                      <a href="#">Order History </a>
                    </li>
                    <li>
                      <a href="#">Downloads </a>
                    </li>
                    <li>
                      <a href="#">Recurring payments </a>
                    </li>
                    <li>
                      <a href="#">Reward Points </a>
                    </li>
                    <li>
                      <a href="#">Returns </a>
                    </li>
                    <li>
                      <a href="#">Transactions </a>
                    </li>
                    <li>
                      <a href="#">Newsletter </a>
                    </li>

                    <li>
                      <a href="#">Logout </a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside> */}
          </div>
        </div>

        {/* Main Container */}
      </div>
      {auth.loading === true ? <Loader /> : null}
    </div>
  );
};
export default Login;
