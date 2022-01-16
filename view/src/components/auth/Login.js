import React, { useState } from "react";
import { useDispatch } from "react-redux";
import history from "../../history";

// action
import { loginUser } from "../actions/authAction";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // initialize useDispatch
  const dispatch = useDispatch();
  // login function
  const login_Func = (e) => {
    e.preventDefault();
    const obj = {
      email: email.toLowerCase(),
      password,
    };
    dispatch(loginUser(obj, history, clearState));
  };
  const clearState = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <div className="account-login account res layout-1">
      <div id="wrapper" className="wrapper-fluid banners-effect-10">
        {/* Main Container   */}

        <div className="container">
          <div className="row">
            <ul className="breadcrumb">
              <li>
                <a href="#">
                  <i className="fa fa-home"></i>
                </a>
              </li>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
            <div id="content" className="col-md-9">
              <div className="row">
                <div className="col-sm-6">
                  <div className="well ">
                    <h2>New Customer</h2>
                    <p>
                      <strong>Register Account</strong>
                    </p>
                    <p>
                      By creating an account you will be able to shop faster, be
                      up to date on an order's status, and keep track of the
                      orders you have previously made.
                    </p>
                    <a href="register.html" className="btn btn-primary">
                      Continue
                    </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="well col-sm-12">
                    <h2>Returning Customer</h2>
                    <p>
                      <strong>I am a returning customer</strong>
                    </p>
                    <form
                      action="#"
                      method="post"
                      encType="multipart/form-data"
                    >
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
                          id="input-password"
                          className="form-control"
                        />
                        <a href="#">Forgotten Password</a>
                      </div>

                      <input
                        type="submit"
                        value="Login"
                        className="btn btn-primary pull-left"
                        onClick={(e) => login_Func(e)}
                      />
                    </form>
                    <column id="column-login" className="col-sm-8 pull-right">
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
                    </column>
                  </div>
                </div>
              </div>
            </div>
            <aside className="col-md-3 col-sm-4 col-xs-12 content-aside right_column sidebar-offcanvas">
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
            </aside>
          </div>
        </div>

        {/* Main Container */}
      </div>
    </div>
  );
};
export default Login;
