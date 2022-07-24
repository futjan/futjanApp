import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../actions/authAction";
import Loader from "../../utils/Loader";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const [passwordShow, setPasswordShow] = useState(false);
  // initialize Hooks
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  // get state from store
  const errorStore = useSelector((state) => state.error);
  const auth = useSelector((state) => state.auth);

  // useEffect
  useEffect(() => {
    setErrors(errorStore);
  }, [errorStore]);

  // reset password function
  const resetPasswordFunc = (e) => {
    e.preventDefault();

    const obj = {
      password,
      passwordConfirm,
    };
    dispatch(resetPassword(obj, params.token, clearState));
  };
  // clear state
  const clearState = () => {
    setPassword("");
    setPasswordConfirm("");
    setErrors({});
    moveToLogin();
  };
  // redirect to Login
  const moveToLogin = () => {
    navigate("/login");
  };
  function passwordShowFunc() {
    const x = document.getElementById("new-reset-password");
    const y = document.getElementById("confirm-reset-password");
    if (x.type === "password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
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
                    <Link to="/signup" className="btn btn-primary">
                      Continue
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="well col-sm-12">
                    <h2>Reset Password</h2>
                    <p>
                      <strong>Set New Password</strong>
                    </p>
                    <form
                      action="#"
                      method="post"
                      encType="multipart/form-data"
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
                      <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="input-password"
                        >
                          New Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          placeholder="Password"
                          id="new-reset-password"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="input-password"
                        >
                          Password Confirm
                        </label>
                        <input
                          type="password"
                          name="password"
                          onChange={(e) => setPasswordConfirm(e.target.value)}
                          value={passwordConfirm}
                          placeholder="Confirm"
                          id="confirm-reset-password"
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
                      </div>
                      <input
                        type="submit"
                        value="Reset Password"
                        className="btn btn-primary pull-left"
                        onClick={(e) => resetPasswordFunc(e)}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Container */}
      </div>
      {auth.loading === true ? <Loader /> : null}
    </div>
  );
};
export default ResetPassword;
