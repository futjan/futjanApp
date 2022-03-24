import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { changePassword } from "../actions/authAction";
import Loader from "../../utils/Loader";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({});
  // initialize Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // get state from store
  const errorStore = useSelector((state) => state.error);
  const auth = useSelector((state) => state.auth);

  // useEffect
  useEffect(() => {
    setErrors(errorStore);
  }, [errorStore]);

  // reset password function
  const changePasswordFunc = (e) => {
    e.preventDefault();

    const obj = {
      currentPassword,
      password,
      passwordConfirm,
    };
    dispatch(changePassword(obj, clearState));
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
                    <h2>Change Password</h2>
                    <p>
                      <strong>Set New Password</strong>
                    </p>
                    <form
                    //   action="#"
                    //   method="post"
                    //   encType="multipart/form-data"
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
                          Your Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          value={currentPassword}
                          placeholder="Your Password"
                          id="input-password"
                          className={
                            errors &&
                            errors.validation &&
                            errors.validation.currentPassword
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                        />
                        {errors &&
                          errors.validation &&
                          errors.validation.currentPassword && (
                            <div className="invalid-feedback">
                              {errors.validation.currentPassword}
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
                          id="input-password"
                          className={
                            errors &&
                            errors.validation &&
                            errors.validation.password
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                        />
                        {errors &&
                          errors.validation &&
                          errors.validation.password && (
                            <div className="invalid-feedback">
                              {errors.validation.password}
                            </div>
                          )}
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
                          id="input-password"
                          className={
                            errors &&
                            errors.validation &&
                            errors.validation.passwordConfirm
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                        />
                        {errors &&
                          errors.validation &&
                          errors.validation.passwordConfirm && (
                            <div className="invalid-feedback">
                              {errors.validation.passwordConfirm}
                            </div>
                          )}
                      </div>
                      <input
                        type="submit"
                        value="Reset Password"
                        className="btn btn-primary pull-left"
                        onClick={(e) => changePasswordFunc(e)}
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
export default ChangePassword;
