import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../actions/authAction";

import Loader from "../../utils/Loader";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({});

  // initialize  hook
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // get state from store
  const errorState = useSelector((state) => state.error);
  const auth = useSelector((state) => state.auth);

  // useEffect
  useEffect(() => {
    setErrors(errorState);
  }, [errorState]);
  // signup function
  const signUpFunc = (e) => {
    e.preventDefault();
    const obj = {
      name,
      email,
      contact,
      password,
      passwordConfirm,
    };

    dispatch(registerUser(obj, clearState));
  };
  // clear state after successful signup
  const clearState = () => {
    setEmail("");
    setName("");
    setPassword("");
    setPasswordConfirm("");
    setContact("");
    // call redirect function
    redirectToLogin();
  };
  // redirect to login page
  const redirectToLogin = () => {
    navigate("/login");
  };
  return (
    // <!-- Main Container  -->
    <div class="main-container container" style={{ position: "relative" }}>
      <ul class="breadcrumb">
        <li>
          <Link to="/">
            <i class="fa fa-home"></i>
          </Link>
        </li>
        {/* <li>
          <a href="#">Account</a>
        </li> */}
        <li>
          <Link to="/signup">Register</Link>
        </li>
      </ul>

      <div class="row">
        <div id="content" class="col-md-9">
          <h2 class="title">Register Account</h2>
          <p>
            If you already have an account with us, please login at the{" "}
            <Link to="/login">login page</Link>.
          </p>
          <form
            action=""
            method="post"
            enctype="multipart/form-data"
            class="form-horizontal account-register clearfix"
          >
            <fieldset id="account">
              <legend>Your Personal Details</legend>
              <div className="form-group">
                {/* <div className="col-sm-2"></div> */}
                {errors && errors.message && (
                  <div className="col-sm-12">
                    <div class="alert alert-danger" role="alert">
                      {errors.message}
                    </div>
                  </div>
                )}
              </div>
              <div class="form-group required">
                <label class="col-sm-2 control-label" htmlFor="input-name">
                  Name
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    id="input-name"
                    className={
                      errors && errors.validation && errors.validation.name
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.name && (
                    <div className="invalid-feedback">
                      {errors.validation.name}
                    </div>
                  )}
                </div>
              </div>

              <div class="form-group required">
                <label class="col-sm-2 control-label" htmlFor="input-email">
                  E-Mail
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-Mail"
                    id="input-email"
                    className={
                      errors && errors.validation && errors.validation.email
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.email && (
                    <div className="invalid-feedback">
                      {errors.validation.email}
                    </div>
                  )}
                </div>
              </div>
              <div class="form-group required">
                <label class="col-sm-2 control-label" htmlFor="input-telephone">
                  Contact
                </label>
                <div class="col-sm-10">
                  <input
                    type="tel"
                    name="telephone"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Contact"
                    id="input-telephone"
                    className={
                      errors && errors.validation && errors.validation.contact
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.contact && (
                    <div className="invalid-feedback">
                      {errors.validation.contact}
                    </div>
                  )}
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>Your Password</legend>
              <div class="form-group required">
                <label class="col-sm-2 control-label" for="input-password">
                  Password
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    id="input-password"
                    className={
                      errors && errors.validation && errors.validation.password
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
              </div>
              <div class="form-group required">
                <label class="col-sm-2 control-label" for="input-confirm">
                  Password Confirm
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    name="confirm"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    placeholder="Password Confirm"
                    id="input-confirm"
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
              </div>
            </fieldset>

            <div class="buttons">
              <div class="pull-right">
                <input
                  type="button"
                  value="Sign up"
                  class="btn btn-primary"
                  onClick={(e) => signUpFunc(e)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      {auth.loading === true ? <Loader /> : null}
    </div>
  );
};
export default Register;
