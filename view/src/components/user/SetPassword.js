import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { registerUserWithGoogle } from "../actions/authAction";
import Loader from "../../utils/Loader";

const SetPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({});
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

  const location = useLocation();
  const { state } = location;
  // reset password function

  const setPasswordFunc = (e) => {
    e.preventDefault();

    const obj = {
      password,
      passwordConfirm,
      token: state && state.token,
    };
    dispatch(registerUserWithGoogle(obj, clearState));
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
                    <h2>Set Password</h2>

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
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          placeholder="Password"
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
                          className="form-control"
                        />
                      </div>
                      <input
                        type="submit"
                        value="Set Password"
                        className="btn btn-primary pull-left"
                        onClick={(e) => setPasswordFunc(e)}
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
export default SetPassword;
