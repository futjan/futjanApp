import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { forgetPassword } from "../actions/authAction";
import Loader from "../../utils/Loader";
const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  // initialize hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // get state from store
  const errorStore = useSelector((state) => state.error);
  const auth = useSelector((state) => state.auth);

  // useEffect
  useEffect(() => {
    setErrors({});
  }, []);
  useEffect(() => {
    setErrors(errorStore);
  }, [errorStore]);

  // forget password function
  const forgetPasswordFunc = (e) => {
    e.preventDefault();
    dispatch(forgetPassword({ email }, clearState));
  };

  const clearState = async () => {
    await moveToHome();
    setEmail("");
    setErrors({});
  };
  // redirect to Home
  const moveToHome = () => {
    navigate("/");
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
              {/* <li>
            <a href="#">Account</a>
          </li> */}
              <li>
                <Link to="/forget-password">Forget Password</Link>
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
                    <h2>Forget Password</h2>
                    <p>
                      <strong>
                        Enter your email , You will receive an email to reset
                        your password
                      </strong>
                    </p>
                    <form
                      action="#"
                      method="post"
                      encType="multipart/form-data"
                    >
                      <div className="form-group">
                        {errors && errors.message && (
                          <div className="col-sm-12" style={{ padding: "0" }}>
                            <div class="alert alert-danger" role="alert">
                              {errors.message}
                            </div>
                          </div>
                        )}
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

                      <input
                        type="submit"
                        value="Send mail"
                        className="btn btn-primary pull-left"
                        onClick={(e) => forgetPasswordFunc(e)}
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

export default ForgetPassword;
