import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../actions/authAction";
import { updateCurrentUser } from "../actions/userAction";
import { Link } from "react-router-dom";
import Loader from "../../utils/Loader";
const MyAccount = () => {
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  // initialize hook
  const dispatch = useDispatch();
  // get state from store
  const auth = useSelector((state) => state.auth);
  const errorFromStore = useSelector((state) => state.error);
  // useEffect

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  useEffect(() => {
    setName(auth.currentUser && auth.currentUser.name);
    setEmail(auth.currentUser && auth.currentUser.email);
    setContact(auth.currentUser && auth.currentUser.contact);
  }, [auth.currentUser]);

  useEffect(() => {
    setErrors(errorFromStore);
  }, [errorFromStore]);

  // update user function
  const updateUserFunc = () => {
    const user = {
      name: name.toLowerCase(),
      email: email.toLowerCase(),
      contact: contact.toLowerCase(),
    };
    dispatch(updateCurrentUser(user));
  };
  return (
    <div class="main-container container">
      <div class="row">
        <div class="col-md-9" id="content">
          <h2 class="title">My Account</h2>
          <p class="lead">
            Hello, <strong>{name}!</strong> - To update your account
            information.
          </p>
          <form className="myAccount-form">
            <div class="row">
              <div class="col-sm-12">
                <fieldset id="personal-details">
                  <legend>Personal Details</legend>
                  <div class="form-group required">
                    <label for="input-firstname" class="control-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className={
                        errors && errors.validation && errors.validation.name
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      id="input-firstname"
                      placeholder="First Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      name="firstname"
                    />
                    {errors && errors.validation && errors.validation.name && (
                      <div className="invalid-feedback">
                        {errors.validation.name}
                      </div>
                    )}
                  </div>

                  <div class="form-group required">
                    <label for="input-email" class="control-label">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      className={
                        errors && errors.validation && errors.validation.email
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      id="input-email"
                      placeholder="E-Mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.name)}
                      name="email"
                    />
                    {errors && errors.validation && errors.validation.email && (
                      <div className="invalid-feedback">
                        {errors.validation.email}
                      </div>
                    )}
                  </div>

                  <div class="form-group required">
                    <label for="input-telephone" class="control-label">
                      Contact
                    </label>
                    <input
                      type="tel"
                      className={
                        errors && errors.validation && errors.validation.contact
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      id="input-telephone"
                      placeholder="Telephone"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      name="telephone"
                    />
                    {errors &&
                      errors.validation &&
                      errors.validation.contact && (
                        <div className="invalid-feedback">
                          {errors.validation.contact}
                        </div>
                      )}
                  </div>
                </fieldset>
                <br />
              </div>
            </div>

            <div class="buttons clearfix">
              <div class="pull-right">
                <input
                  type="button"
                  class="btn btn-md btn-primary"
                  value="Save Changes"
                  onClick={() => updateUserFunc()}
                />
              </div>
            </div>
          </form>
        </div>

        <aside class="col-md-3 col-sm-4 col-xs-12 content-aside right_column sidebar-offcanvas">
          <span id="close-sidebar" class="fa fa-times"></span>
          <div class="module">
            <h3 class="modtitle">
              <span>My Account </span>
            </h3>
            <div class="module-content custom-border">
              <ul class="list-box">
                <li>
                  <Link to="/login">Login </Link> /{" "}
                  <Link to="/signup">Register </Link>
                </li>
                <li>
                  <Link to="/user-panel/change-password">Change Password </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
      {auth.loading === true ? <Loader /> : null}
    </div>
  );
};
export default MyAccount;
